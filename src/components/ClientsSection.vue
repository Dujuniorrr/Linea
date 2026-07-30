<script setup>
import { clients, partners } from '../data/content'
import LogoMarquee from './LogoMarquee.vue'

const clientRows = (() => {
  const mid = Math.ceil(clients.length / 2)
  return [clients.slice(0, mid), clients.slice(mid)]
})()
</script>

<template>
  <div class="clients-section">
    <div class="block">
      <div class="block-head">
        <h3 class="sub-title">Clientes atendidos</h3>
      </div>
      <div class="marquee-band">
        <div class="clients-desktop">
          <LogoMarquee :items="clients" :duration="48" />
        </div>
        <div class="clients-mobile">
          <LogoMarquee :items="clientRows[0]" :duration="36" />
          <LogoMarquee :items="clientRows[1]" :duration="42" reverse class="row-offset" />
        </div>
      </div>
    </div>

    <div class="block partners-block">
      <div class="block-head">
        <h3 class="sub-title">Parceiros de trabalho</h3>
      </div>
      <div class="marquee-band">
        <LogoMarquee :items="partners" :duration="40" reverse />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clients-section {
  display: grid;
  gap: 2.5rem;
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
  margin-bottom: 1.05rem;
  min-width: 0;
}

.sub-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.4vw, 1.65rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--ink);
  min-width: 0;
}

.marquee-band {
  position: relative;
  padding: 1.2rem 0.75rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.55)),
    var(--garnet-wash);
  border: 1px solid rgba(227, 6, 19, 0.12);
  border-radius: 1.15rem;
  overflow: hidden;
}

.marquee-band::before,
.marquee-band::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3.25rem;
  z-index: 2;
  pointer-events: none;
}

.marquee-band::before {
  left: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), transparent);
}

.marquee-band::after {
  right: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.95), transparent);
}

.clients-desktop {
  display: block;
}

.clients-mobile {
  display: none;
  gap: 0.85rem;
}

.row-offset {
  margin-left: -2.5rem;
}

.partners-block {
  overflow-x: clip;
}

@media (max-width: 900px) {
  .clients-section {
    gap: 2rem;
  }

  .clients-desktop {
    display: none;
  }

  .clients-mobile {
    display: grid;
  }
}

@media (max-width: 480px) {
  .marquee-band {
    padding: 0.9rem 0.3rem;
    border-radius: 1rem;
  }

  .clients-mobile {
    gap: 0.65rem;
  }

  .row-offset {
    margin-left: -1.25rem;
  }
}
</style>
