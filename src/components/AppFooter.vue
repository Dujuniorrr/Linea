<script setup>
import { RouterLink } from 'vue-router'
import { navigation, site } from '../data/content'
import BrandLogo from './BrandLogo.vue'
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <BrandLogo variant="light" size="lg" />
        <p class="footer-slogan">{{ site.slogan }}</p>
      </div>

      <nav class="footer-nav" aria-label="Rodapé">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} {{ site.legalName }}</span>
      <span>Curitiba — Paraná</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  border-top: 0;
  background:
    radial-gradient(ellipse 60% 50% at 10% 0%, rgba(227, 6, 19, 0.18), transparent 55%),
    linear-gradient(180deg, #1a1d21, #121417);
  color: #d7dbd8;
  padding: 3.25rem 0 1.5rem;
  /* border-radius: 1.5rem 1.5rem 0 0; */
  margin-top: 1rem;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--garnet-deep), var(--garnet) 45%, var(--garnet-soft));
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-slogan {
  margin-top: 1.35rem;
  max-width: 34ch;
  font-size: 0.92rem;
  font-weight: 300;
  color: #b7bfc6;
  font-style: italic;
}

.footer-nav {
  display: grid;
  gap: 0.65rem;
  align-content: start;
  justify-items: start;
}

.footer-nav a {
  color: #cfd5d9;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.25s var(--ease);
}

.footer-nav a:hover {
  color: var(--garnet-soft);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  font-size: 0.78rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: #8b949c;
}

@media (max-width: 720px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
