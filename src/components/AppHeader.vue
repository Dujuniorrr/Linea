<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { navigation } from '../data/content'
import BrandLogo from './BrandLogo.vue'
import { ref, watch } from 'vue'

const route = useRoute()
const open = ref(false)

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

function isActive(item) {
  if (item.hash) {
    return route.path === '/' && route.hash === item.hash
  }
  if (item.to === '/') {
    return route.path === '/' && !route.hash
  }
  return route.path === item.to || route.path.startsWith(`${item.to}/`)
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink to="/" class="brand" aria-label="Linea Engenharia e Arquitetura — início" title="Linea Engenharia e Arquitetura — início">
        <BrandLogo size="md" />
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        :title="open ? 'Fechar menu' : 'Abrir menu'"
        @click="open = !open"
      >
        <span class="burger" :class="{ open }" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav id="site-nav" class="nav" :class="{ open }">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: isActive(item) }"
          :title="item.label"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>


<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--header-h);
  border-bottom: 1px solid var(--line);
  background: rgba(242, 243, 241, 0.86);
  backdrop-filter: blur(14px);
  box-shadow: 0 1px 0 var(--garnet-wash);
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--garnet-deep), var(--garnet) 35%, var(--garnet-soft) 70%, transparent);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.15rem 1.35rem;
}

.nav-link {
  position: relative;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 0.35rem 0;
  transition: color 0.25s var(--ease);
}

.nav-link:hover,
.nav-link.active {
  color: var(--garnet-deep);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.15rem;
  height: 2px;
  background: linear-gradient(90deg, var(--garnet), var(--garnet-soft));
  transform-origin: left;
  animation: drawLine 0.45s var(--ease) both;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--line);
  border-radius: 0.65rem;
  background: var(--white);
  padding: 0;
  cursor: pointer;
  transition: border-color 0.25s var(--ease), background 0.25s var(--ease);
}

.menu-toggle:hover {
  border-color: var(--garnet);
}

.burger {
  position: relative;
  width: 1.25rem;
  height: 0.9rem;
  display: block;
}

.burger span {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: var(--ink);
  border-radius: 1px;
  transition: transform 0.35s var(--ease), opacity 0.25s var(--ease), top 0.35s var(--ease),
    width 0.35s var(--ease);
  transform-origin: center;
}

.burger span:nth-child(1) {
  top: 0;
}

.burger span:nth-child(2) {
  top: calc(50% - 1px);
  width: 70%;
}

.burger span:nth-child(3) {
  top: calc(100% - 2px);
  width: 85%;
}

.burger.open span:nth-child(1) {
  top: calc(50% - 1px);
  transform: rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
  width: 100%;
  transform: scaleX(0);
}

.burger.open span:nth-child(3) {
  top: calc(50% - 1px);
  width: 100%;
  transform: rotate(-45deg);
}

@media (max-width: 920px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav {
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.75rem var(--space) 1.25rem;
    background: rgba(242, 243, 241, 0.97);
    border-bottom: 1px solid var(--line);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 16px 32px rgba(23, 25, 28, 0.06);
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--line);
  }
}
</style>
