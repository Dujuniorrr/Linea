<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const activeIndex = ref(-1)
const scale = ref(1)
const offset = ref({ x: 0, y: 0 })
const dragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const origin = ref({ x: 0, y: 0 })
const animating = ref(true)
const stageEl = ref(null)

/** @type {import('vue').Ref<'swipe' | 'pan' | 'pinch' | null>} */
const touchMode = ref(null)
const pinchStartDist = ref(0)
const pinchStartScale = ref(1)
const swipeStart = ref({ x: 0, y: 0 })
const lastTapAt = ref(0)

const isOpen = computed(() => activeIndex.value >= 0)
const active = computed(() => (isOpen.value ? props.items[activeIndex.value] : null))
const canPrev = computed(() => activeIndex.value > 0)
const canNext = computed(() => activeIndex.value < props.items.length - 1)
const imageStyle = computed(() => ({
  transform: `translate(${offset.value.x}px, ${offset.value.y}px) scale(${scale.value})`,
  transition: animating.value ? 'transform 0.08s linear' : 'none',
  cursor: scale.value > 1 ? (dragging.value ? 'grabbing' : 'grab') : 'zoom-in',
}))

function resetView() {
  scale.value = 1
  offset.value = { x: 0, y: 0 }
  dragging.value = false
  touchMode.value = null
  animating.value = true
}

function open(index) {
  activeIndex.value = index
  resetView()
}

function close() {
  activeIndex.value = -1
  resetView()
}

function prev() {
  if (!canPrev.value) return
  activeIndex.value -= 1
  resetView()
}

function next() {
  if (!canNext.value) return
  activeIndex.value += 1
  resetView()
}

function zoomIn() {
  animating.value = true
  scale.value = Math.min(4, +(scale.value + 0.35).toFixed(2))
}

function zoomOut() {
  animating.value = true
  const nextScale = Math.max(1, +(scale.value - 0.35).toFixed(2))
  scale.value = nextScale
  if (nextScale === 1) offset.value = { x: 0, y: 0 }
}

function toggleZoom(event) {
  animating.value = true
  if (scale.value > 1) {
    resetView()
    return
  }
  scale.value = 2.2
  const rect = event.currentTarget.getBoundingClientRect()
  const cx = event.clientX - rect.left - rect.width / 2
  const cy = event.clientY - rect.top - rect.height / 2
  offset.value = { x: -cx * 0.45, y: -cy * 0.45 }
}

function onWheel(event) {
  if (!isOpen.value) return
  event.preventDefault()
  if (event.deltaY < 0) zoomIn()
  else zoomOut()
}

function onPointerDown(event) {
  if (event.pointerType === 'touch') return
  if (scale.value <= 1) return
  dragging.value = true
  animating.value = false
  dragStart.value = { x: event.clientX, y: event.clientY }
  origin.value = { ...offset.value }
  event.currentTarget.setPointerCapture?.(event.pointerId)
}

function onPointerMove(event) {
  if (event.pointerType === 'touch') return
  if (!dragging.value) return
  offset.value = {
    x: origin.value.x + (event.clientX - dragStart.value.x),
    y: origin.value.y + (event.clientY - dragStart.value.y),
  }
}

function onPointerUp(event) {
  if (event.pointerType === 'touch') return
  dragging.value = false
  animating.value = true
}

function touchDistance(a, b) {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
}

function onTouchStart(event) {
  if (event.touches.length === 2) {
    event.preventDefault()
    touchMode.value = 'pinch'
    animating.value = false
    dragging.value = false
    pinchStartDist.value = touchDistance(event.touches[0], event.touches[1])
    pinchStartScale.value = scale.value
    return
  }

  if (event.touches.length === 1) {
    const t = event.touches[0]
    if (scale.value > 1) {
      event.preventDefault()
      touchMode.value = 'pan'
      animating.value = false
      dragging.value = true
      dragStart.value = { x: t.clientX, y: t.clientY }
      origin.value = { ...offset.value }
    } else {
      touchMode.value = 'swipe'
      swipeStart.value = { x: t.clientX, y: t.clientY }
    }
  }
}

function onTouchMove(event) {
  if (touchMode.value === 'pinch' && event.touches.length === 2) {
    event.preventDefault()
    const dist = touchDistance(event.touches[0], event.touches[1])
    if (pinchStartDist.value <= 0) return
    const nextScale = Math.min(4, Math.max(1, pinchStartScale.value * (dist / pinchStartDist.value)))
    scale.value = +nextScale.toFixed(2)
    if (scale.value === 1) offset.value = { x: 0, y: 0 }
    return
  }

  if (touchMode.value === 'pan' && event.touches.length === 1) {
    event.preventDefault()
    const t = event.touches[0]
    offset.value = {
      x: origin.value.x + (t.clientX - dragStart.value.x),
      y: origin.value.y + (t.clientY - dragStart.value.y),
    }
    return
  }

  if (touchMode.value === 'swipe' && event.touches.length === 1) {
    event.preventDefault()
  }
}

function onTouchEnd(event) {
  if (touchMode.value === 'swipe' && event.changedTouches.length >= 1) {
    const t = event.changedTouches[0]
    const dx = t.clientX - swipeStart.value.x
    const dy = t.clientY - swipeStart.value.y
    const now = Date.now()

    // double tap → zoom
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      if (now - lastTapAt.value < 320) {
        animating.value = true
        if (scale.value > 1) resetView()
        else {
          scale.value = 2.2
          offset.value = { x: 0, y: 0 }
        }
        lastTapAt.value = 0
      } else {
        lastTapAt.value = now
      }
    } else if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      if (dx < 0) next()
      else prev()
    }
  }

  if (event.touches.length === 0) {
    touchMode.value = null
    dragging.value = false
    animating.value = true
    if (scale.value < 1.05) {
      scale.value = 1
      offset.value = { x: 0, y: 0 }
    }
  } else if (event.touches.length === 1 && scale.value > 1) {
    touchMode.value = 'pan'
    animating.value = false
    dragging.value = true
    dragStart.value = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    }
    origin.value = { ...offset.value }
  }
}

function onKeydown(event) {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') prev()
  if (event.key === 'ArrowRight') next()
  if (event.key === '+' || event.key === '=') zoomIn()
  if (event.key === '-' || event.key === '_') zoomOut()
  if (event.key === '0') resetView()
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(stageEl, (el, prev) => {
  if (prev) {
    prev.removeEventListener('touchstart', onTouchStart)
    prev.removeEventListener('touchmove', onTouchMove)
    prev.removeEventListener('touchend', onTouchEnd)
    prev.removeEventListener('touchcancel', onTouchEnd)
  }
  if (el) {
    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('touchcancel', onTouchEnd, { passive: true })
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
  if (stageEl.value) {
    stageEl.value.removeEventListener('touchstart', onTouchStart)
    stageEl.value.removeEventListener('touchmove', onTouchMove)
    stageEl.value.removeEventListener('touchend', onTouchEnd)
    stageEl.value.removeEventListener('touchcancel', onTouchEnd)
  }
})
</script>

<template>
  <div class="gallery">
    <div class="grid">
      <button
        v-for="(item, i) in items"
        :key="item.src + i"
        type="button"
        class="thumb"
        @click="open(i)"
      >
        <span class="thumb-media">
          <img :src="item.src" :alt="item.title" loading="lazy" />
          <span class="thumb-zoom" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16 L21 21" stroke-linecap="square" />
              <path d="M11 8.5 V13.5 M8.5 11 H13.5" stroke-linecap="square" />
            </svg>
          </span>
        </span>
        <span class="thumb-caption">{{ item.title }}</span>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="isOpen && active"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="active.title"
        @click.self="close"
        @wheel.prevent="onWheel"
      >
        <header class="toolbar">
          <p class="meta">
            <span class="counter">{{ activeIndex + 1 }} / {{ items.length }}</span>
            <span class="title">{{ active.title }}</span>
          </p>

          <div class="actions">
            <button type="button" class="tool" :disabled="!canPrev" aria-label="Anterior" @click="prev">
              ‹
            </button>
            <button type="button" class="tool" :disabled="!canNext" aria-label="Próxima" @click="next">
              ›
            </button>
            <button type="button" class="tool" aria-label="Diminuir zoom" @click="zoomOut">−</button>
            <button type="button" class="tool" aria-label="Aumentar zoom" @click="zoomIn">+</button>
            <button type="button" class="tool" aria-label="Resetar zoom" @click="resetView">1:1</button>
            <button type="button" class="tool close" aria-label="Fechar" @click="close">✕</button>
          </div>
        </header>

        <button
          v-if="canPrev"
          type="button"
          class="nav prev"
          aria-label="Imagem anterior"
          @click="prev"
        >
          ‹
        </button>
        <button
          v-if="canNext"
          type="button"
          class="nav next"
          aria-label="Próxima imagem"
          @click="next"
        >
          ›
        </button>

        <div ref="stageEl" class="stage">
          <img
            :src="active.src"
            :alt="active.title"
            :style="imageStyle"
            draggable="false"
            @dblclick="toggleZoom"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
          />
        </div>

        <p class="hint desktop">
          Scroll para zoom · arraste para mover · ← → navegar · Esc fechar
        </p>
        <p class="hint mobile">
          Deslize para trocar · pinça para zoom · toque duplo para ampliar
        </p>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.thumb {
  appearance: none;
  border: 1px solid var(--line);
  background: #fff;
  padding: 0;
  text-align: left;
  cursor: zoom-in;
  display: grid;
  border-radius: 0.85rem;
  overflow: hidden;
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}

.thumb:hover {
  border-color: var(--garnet);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.08);
}

.thumb-media {
  position: relative;
  overflow: hidden;
  background: var(--paper-2);
}

.thumb-media img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transition: transform 0.45s var(--ease);
}

.thumb:hover .thumb-media img {
  transform: scale(1.05);
}

.thumb-zoom {
  position: absolute;
  right: 0.7rem;
  bottom: 0.7rem;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  background: rgba(23, 25, 28, 0.72);
  color: #fff;
  border-radius: 0.4rem;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}

.thumb-zoom svg {
  width: 1.05rem;
  height: 1.05rem;
}

.thumb:hover .thumb-zoom {
  opacity: 1;
  transform: translateY(0);
}

.thumb-caption {
  display: block;
  padding: 0.8rem 0.9rem;
  font-size: 0.88rem;
  color: var(--ink-soft);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(12, 14, 16, 0.94);
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem 1rem 1.25rem;
  overscroll-behavior: none;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  z-index: 2;
}

.meta {
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
  min-width: 0;
  color: #e8ecef;
}

.counter {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
}

.title {
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tool {
  min-width: 2.35rem;
  height: 2.35rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 0.45rem;
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  font-size: 1.05rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s var(--ease), border-color 0.2s var(--ease);
}

.tool:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.4);
}

.tool:disabled {
  opacity: 0.35;
  cursor: default;
}

.tool.close {
  margin-left: 0.25rem;
}

.stage {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  min-height: 0;
  user-select: none;
  touch-action: none;
  -webkit-user-select: none;
}

.stage img {
  max-width: min(92vw, 1100px);
  max-height: calc(100vh - 9rem);
  max-height: calc(100svh - 9rem);
  object-fit: contain;
  transform-origin: center center;
  will-change: transform;
  -webkit-user-drag: none;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 0.55rem;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.nav.prev {
  left: 1rem;
}

.nav.next {
  right: 1rem;
}

.nav:hover {
  background: rgba(255, 255, 255, 0.14);
}

.hint {
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.hint.mobile {
  display: none;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .nav {
    display: none;
  }

  .hint.desktop {
    display: none;
  }

  .hint.mobile {
    display: block;
  }

  .thumb:hover {
    transform: none;
    box-shadow: none;
  }

  .thumb:hover .thumb-zoom {
    opacity: 0.85;
    transform: none;
  }
}

@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .title {
    max-width: 46vw;
  }

  .stage img {
    max-height: calc(100svh - 8.5rem);
  }
}
</style>
