<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    default: 42,
  },
  mobileDuration: {
    type: Number,
    default: null,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  numbered: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div
    class="rail"
    :class="{ reverse }"
    :style="{
      '--rail-duration': `${duration}s`,
      '--rail-duration-mobile': `${mobileDuration ?? duration}s`,
    }"
  >
    <div class="viewport">
      <div class="track">
        <ul
          v-for="copy in 2"
          :key="copy"
          class="group"
          :aria-hidden="copy === 2 ? 'true' : undefined"
        >
          <li v-for="(item, i) in items" :key="`${copy}-${item}`" class="chip">
            <span v-if="numbered" class="chip-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="chip-label">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rail {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.viewport {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
}

.track {
  display: flex;
  width: max-content;
  animation: railLTR var(--rail-duration) linear infinite;
  will-change: transform;
}

.reverse .track {
  animation-name: railRTL;
}

.group {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  list-style: none;
  margin: 0;
  padding: 0.2rem 0.35rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  flex: 0 0 auto;
  max-width: min(22rem, 78vw);
  padding: 0.7rem 0.95rem;
  border: 1px solid rgba(201, 206, 199, 0.75);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 8px 18px rgba(23, 25, 28, 0.04);
  transition:
    border-color 0.3s var(--ease),
    box-shadow 0.3s var(--ease),
    transform 0.3s var(--ease);
}

.chip-index {
  flex: 0 0 auto;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--garnet);
}

.chip-label {
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rail:hover .track {
  animation-play-state: paused;
}

.chip:hover {
  border-color: rgba(227, 6, 19, 0.28);
  box-shadow: 0 12px 24px rgba(23, 25, 28, 0.08);
  transform: translateY(-2px);
}

@keyframes railLTR {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes railRTL {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .track {
    animation-duration: var(--rail-duration-mobile);
  }
}

@media (max-width: 700px) {
  .chip {
    padding: 0.58rem 0.8rem;
    max-width: min(18rem, 82vw);
  }

  .chip-label {
    font-size: 0.8rem;
  }

  .group {
    gap: 0.45rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .group {
    flex-wrap: wrap;
    padding: 0;
  }

  .group + .group {
    display: none;
  }

  .viewport {
    mask-image: none;
    -webkit-mask-image: none;
  }

  .chip {
    max-width: 100%;
  }

  .chip-label {
    white-space: normal;
  }
}
</style>
