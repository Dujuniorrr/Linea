<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  meta: { type: String, default: '' },
  image: { type: String, default: '' },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <RouterLink :to="to" class="card">
    <div class="media">
      <img v-if="image" :src="image" :alt="title" loading="lazy" />
      <div v-else class="placeholder" />
      <span class="index">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>
    <div class="body">
      <h3>{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
      <span v-if="meta" class="meta">{{ meta }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: grid;
  gap: 0.95rem;
  color: inherit;
  transition: transform 0.4s var(--ease);
}

.card:hover {
  transform: translateY(-5px);
}

.media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--paper-2);
  border: 1px solid rgba(201, 206, 199, 0.75);
  border-radius: 1.1rem;
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.05);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s var(--ease);
}

.card:hover .media img {
  transform: scale(1.05);
}

.placeholder {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(135deg, var(--paper-2), #d5dad4 40%, var(--paper-2)),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 8px,
      rgba(23, 25, 28, 0.04) 8px,
      rgba(23, 25, 28, 0.04) 9px
    );
}

.index {
  position: absolute;
  left: 0.85rem;
  bottom: 0.85rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #fff;
  background: linear-gradient(135deg, var(--garnet), var(--garnet-deep));
  padding: 0.4rem 0.6rem;
  border-radius: 0.45rem;
  box-shadow: 0 6px 16px var(--garnet-glow);
}

.media::after {
  content: '';
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 0.85rem;
  height: 0.85rem;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
}

.card:hover .media::after {
  opacity: 1;
  transform: translate(0, 0);
}

.body {
  padding-inline: 0.15rem;
}

.body h3 {
  font-size: 1.18rem;
  line-height: 1.25;
}

.body p {
  margin-top: 0.4rem;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.meta {
  display: inline-block;
  margin-top: 0.7rem;
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--garnet);
  font-weight: 600;
}
</style>
