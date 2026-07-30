<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    default: 35,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="logos"
    :class="{ reverse }"
    :style="{ '--marquee-duration': `${duration}s` }"
  >
    <div class="marquee">
      <div class="viewport">
        <div class="track">
          <ul
            v-for="copy in 2"
            :key="copy"
            class="group"
            :aria-hidden="copy === 2 ? 'true' : undefined"
          >
            <li v-for="item in items" :key="`${copy}-${item.name}`" class="tile">
              <div class="face">
                <img
                  :src="item.logo"
                  :alt="`Logo ${item.name}`"
                  :title="item.name"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
              <span class="caption">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logos {
  --tile-w: 11.75rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.tile {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.55rem;
  min-width: 0;
  list-style: none;
  flex: 0 0 auto;
  width: var(--tile-w);
}

.face {
  position: relative;
  height: 5.75rem;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid transparent;
  border-radius: 0.85rem;
  box-sizing: border-box;
  overflow: hidden;
  transition:
    border-color 0.4s var(--ease),
    box-shadow 0.4s var(--ease),
    background 0.4s var(--ease),
    transform 0.4s var(--ease);
}

.face img {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: auto;
  height: auto;
  max-width: calc(100% - 1.75rem);
  max-height: calc(100% - 1.75rem);
  object-fit: contain;
  object-position: center;
  transition: transform 0.4s var(--ease);
}

.caption {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  text-align: center;
  line-height: 1.35;
  padding-inline: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.35s var(--ease);
}

.tile:hover .face {
  border-color: rgba(227, 6, 19, 0.2);
  background: #fff;
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.08);
  transform: translateY(-3px);
}

.tile:hover .face img {
  transform: scale(1.04);
}

.tile:hover .caption {
  color: var(--garnet-deep);
}

.marquee {
  position: relative;
  overflow: hidden;
}

.viewport {
  overflow: hidden;
  padding-block: 0.25rem;
}

.track {
  display: flex;
  width: max-content;
  animation: marqueeLTR var(--marquee-duration) linear infinite;
  will-change: transform;
}

.reverse .track {
  animation-name: marqueeRTL;
}

.group {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0 0.35rem;
}

.marquee:hover .track {
  animation-play-state: paused;
}

@keyframes marqueeLTR {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes marqueeRTL {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 700px) {
  .logos {
    --tile-w: 9.75rem;
  }

  .face {
    height: 4.85rem;
    border-radius: 0.7rem;
  }

  .face img {
    max-width: calc(100% - 1.35rem);
    max-height: calc(100% - 1.35rem);
  }

  .group {
    gap: 0.55rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .group {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .group + .group {
    display: none;
  }

  .tile:hover .face {
    transform: none;
  }
}
</style>
