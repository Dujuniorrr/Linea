<script setup>
import { clients, partners } from '../data/content'
import LogoMarquee from './LogoMarquee.vue'
</script>

<template>
  <div class="clients-section">
    <div class="block">
      <div class="block-head">
        <p class="eyebrow-mini">Confiança</p>
        <h3 class="sub-title">Clientes atendidos</h3>
      </div>
      <div class="band">
        <LogoMarquee :items="clients" :duration="48" />
      </div>
    </div>

    <div class="block partners-block">
      <div class="block-head">
        <p class="eyebrow-mini">Rede</p>
        <h3 class="sub-title">Parceiros de trabalho</h3>
      </div>
      <div class="band">
        <LogoMarquee :items="partners" :duration="48" reverse />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clients-section {
  display: grid;
  gap: 2.85rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

.block {
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

.block-head {
  margin-bottom: 1.15rem;
  min-width: 0;
}

.eyebrow-mini {
  margin: 0 0 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--garnet);
}

.sub-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.5vw, 1.7rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--ink);
  min-width: 0;
}

.band {
  position: relative;
  padding: 1.35rem 0.85rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.4)),
    var(--garnet-wash);
  border: 1px solid rgba(227, 6, 19, 0.1);
  border-radius: 1.25rem;
  overflow: hidden;
}

.band::before,
.band::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3.5rem;
  z-index: 2;
  pointer-events: none;
}

.band::before {
  left: 0;
  background: linear-gradient(90deg, rgba(242, 243, 241, 0.95), transparent);
}

.band::after {
  right: 0;
  background: linear-gradient(270deg, rgba(242, 243, 241, 0.95), transparent);
}

.partners-block {
  overflow-x: clip;
}

@media (max-width: 900px) {
  .clients-section {
    gap: 2.25rem;
  }
}

@media (max-width: 480px) {
  .band {
    padding: 1rem 0.35rem;
    border-radius: 1rem;
  }
}
</style>
