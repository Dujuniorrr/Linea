<script setup>
import { about, site } from '../../data/content'
</script>

<template>
  <section id="apresentacao" class="band band-paper anchor-section">
    <div class="container band-inner">
      <div class="intro-layout">
        <div class="intro-copy">
          <h1 class="page-title">Soluções técnicas para o bom funcionamento da edificação</h1>
          <p class="intro-text">{{ about.intro }}</p>
          <p class="intro-text">{{ about.experience }}</p>
          <p class="intro-text">{{ about.focus }}</p>
          <p class="intro-closing">
            Na Linea, unimos <strong>precisão, eficiência e responsabilidade</strong> em cada etapa.
          </p>
        </div>

        <aside class="stats-panel" aria-label="Linea em números">
          <div v-for="stat in site.stats" :key="stat.label" class="stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 3.25rem);
  align-items: start;
}

.intro-copy .page-title {
  margin-bottom: 1.25rem;
  max-width: 20ch;
}

.intro-text {
  margin: 0 0 1rem;
  color: var(--ink-soft);
}

.intro-closing {
  margin: 1.35rem 0 0;
  padding-left: 1rem;
  border-left: 3px solid var(--garnet);
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.5;
  color: var(--ink);
}

.intro-closing strong {
  font-weight: 600;
  color: var(--garnet-deep);
}

.stats-panel {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.stat {
  position: relative;
  display: grid;
  gap: 0.4rem;
  padding: 1.35rem 1.25rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(201, 206, 199, 0.7);
  border-radius: 1rem;
  box-shadow: 0 10px 28px rgba(23, 25, 28, 0.04);
}

.stat::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1.1rem;
  bottom: 1.1rem;
  width: 3px;
  border-radius: 0 2px 2px 0;
  background: linear-gradient(180deg, var(--garnet-soft), var(--garnet-deep));
  opacity: 0.9;
}

.stat strong {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 300;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, var(--garnet-soft), var(--garnet-deep));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding-left: 0.55rem;
}

.stat span {
  color: var(--muted);
  font-size: 0.9rem;
  padding-left: 0.55rem;
}

@media (max-width: 1024px) {
  .intro-layout {
    grid-template-columns: 1fr;
  }

  .stats-panel {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .stats-panel {
    grid-template-columns: 1fr;
  }
}
</style>
