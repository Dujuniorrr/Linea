<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  backTo: {
    type: String,
    required: true,
  },
  backLabel: {
    type: String,
    required: true,
  },
  current: {
    type: String,
    default: '',
  },
  crumbs: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <nav class="page-nav" aria-label="Navegação da página">
    <RouterLink
      class="back-btn"
      :to="backTo"
      :aria-label="`Voltar para ${backLabel}`"
      :title="`Voltar para ${backLabel}`"
    >
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <path d="M15 6 L9 12 L15 18" stroke-linecap="square" stroke-linejoin="miter" />
        </svg>
      </span>
      <span class="back-text">Voltar</span>
    </RouterLink>

    <ol class="crumbs" v-if="crumbs.length || current">
      <li v-for="crumb in crumbs" :key="crumb.to || crumb.label">
        <RouterLink v-if="crumb.to" :to="crumb.to" :title="crumb.label">{{ crumb.label }}</RouterLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
      <li v-if="current" class="current" aria-current="page">
        <span>{{ current }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.page-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.25rem;
  padding: 0.4rem 0.85rem 0.4rem 0.55rem;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: border-color 0.25s var(--ease), background 0.25s var(--ease), color 0.25s var(--ease),
    transform 0.25s var(--ease);
}

.back-btn:hover {
  border-color: var(--garnet);
  color: var(--garnet);
  transform: translateX(-2px);
}

.icon {
  display: grid;
  place-items: center;
  width: 1.15rem;
  height: 1.15rem;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 0;
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.crumbs li {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.crumbs li:not(:last-child)::after {
  content: '';
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  margin-inline: 0.65rem;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transform: rotate(-45deg);
  opacity: 0.9;
}

.crumbs a {
  color: var(--ink-soft);
  transition: color 0.25s var(--ease);
}

.crumbs a:hover {
  color: var(--garnet);
}

.crumbs .current span {
  color: var(--ink);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: min(42vw, 18rem);
}

@media (max-width: 640px) {
  .page-nav {
    gap: 0.85rem;
  }

  .crumbs {
    width: 100%;
    order: -1;
  }

  .crumbs .current span {
    max-width: 70vw;
  }
}
</style>
