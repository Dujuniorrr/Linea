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

      <ul class="partners-grid">
        <li v-for="item in partners" :key="item.name" class="partner">
          <div class="logo-box">
            <img :src="item.logo" :alt="item.name" loading="lazy" draggable="false" />
          </div>
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
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

.partners-grid {
  list-style: none;
  margin: 0;
  padding: 1.15rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  width: 100%;
  max-width: 100%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.45));
  border: 1px solid rgba(201, 206, 199, 0.75);
  border-radius: 1.25rem;
}

.partner {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
  max-width: 100%;
}

.logo-box {
  position: relative;
  width: 100%;
  height: 7.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid transparent;
  border-radius: 0.9rem;
  box-sizing: border-box;
  overflow: hidden;
  transition:
    border-color 0.35s var(--ease),
    box-shadow 0.35s var(--ease),
    background 0.35s var(--ease),
    transform 0.35s var(--ease);
}

.logo-box img {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  object-fit: contain;
  object-position: center;
  transition: transform 0.4s var(--ease);
}

.name {
  display: block;
  width: 100%;
  max-width: 100%;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  text-align: center;
  line-height: 1.35;
  overflow-wrap: anywhere;
  word-break: break-word;
  transition: color 0.35s var(--ease);
}

.partner:hover .logo-box {
  border-color: rgba(227, 6, 19, 0.22);
  background: #fff;
  box-shadow: 0 14px 32px rgba(23, 25, 28, 0.08);
  transform: translateY(-3px);
}

.partner:hover .logo-box img {
  transform: scale(1.04);
}

.partner:hover .name {
  color: var(--garnet-deep);
}

@media (max-width: 900px) {
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .logo-box {
    height: 7rem;
  }
}

@media (max-width: 480px) {
  .band {
    padding: 1rem 0.35rem;
    border-radius: 1rem;
  }

  .partners-grid {
    gap: 0.65rem;
    padding: 0.85rem;
    border-radius: 1rem;
  }

  .logo-box {
    height: 6.25rem;
    border-radius: 0.75rem;
  }

  .logo-box img {
    max-width: calc(100% - 1.5rem);
    max-height: calc(100% - 1.5rem);
  }
}
</style>
