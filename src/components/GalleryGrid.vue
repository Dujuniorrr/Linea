<script setup>
import { toRef } from 'vue'
import { useGalleryLightbox } from '../composables/useGalleryLightbox'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  projectTitle: {
    type: String,
    default: '',
  },
})

function imageLabel(item) {
  if (!item) return ''
  return props.projectTitle ? `${props.projectTitle} — ${item.title}` : item.title
}

const {
  activeIndex,
  stageEl,
  isOpen,
  active,
  canPrev,
  canNext,
  imageStyle,
  resetView,
  open,
  close,
  prev,
  next,
  zoomIn,
  zoomOut,
  toggleZoom,
  onWheel,
  onPointerDown,
  onPointerMove,
  onPointerUp,
} = useGalleryLightbox(toRef(props, 'items'))
</script>

<template>
  <div class="gallery">
    <div class="grid">
      <button
        v-for="(item, i) in items"
        :key="item.src + i"
        type="button"
        class="thumb"
        :title="`Ampliar: ${imageLabel(item)}`"
        :aria-label="`Ampliar imagem: ${imageLabel(item)}`"
        @click="open(i)"
      >
        <span class="thumb-media">
          <img
            :src="item.src"
            :alt="imageLabel(item)"
            :title="imageLabel(item)"
            loading="lazy"
            decoding="async"
          />
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
        :aria-label="imageLabel(active)"
        @click.self="close"
        @wheel.prevent="onWheel"
      >
        <header class="toolbar">
          <p class="meta">
            <span class="counter">{{ activeIndex + 1 }} / {{ items.length }}</span>
            <span class="title">{{ imageLabel(active) }}</span>
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
            :alt="imageLabel(active)"
            :title="imageLabel(active)"
            :style="imageStyle"
            decoding="async"
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
  aspect-ratio: 4 / 3;
}

.thumb-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
