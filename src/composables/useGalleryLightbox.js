import { computed, onBeforeUnmount, onMounted, ref, toValue, watch } from 'vue'

/**
 * @param {import('vue').MaybeRefOrGetter<unknown[]>} items
 */
export function useGalleryLightbox(items) {
  const itemList = computed(() => toValue(items) || [])

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
  const active = computed(() => (isOpen.value ? itemList.value[activeIndex.value] : null))
  const canPrev = computed(() => activeIndex.value > 0)
  const canNext = computed(() => activeIndex.value < itemList.value.length - 1)
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

  return {
    activeIndex,
    scale,
    offset,
    dragging,
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
  }
}
