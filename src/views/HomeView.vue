<script setup>
import { RouterLink } from 'vue-router'
import { about, site, architecturalProjects, complementaryProjects, testimonials } from '../data/content'
import ProjectCard from '../components/ProjectCard.vue'
import BrandLogo from '../components/BrandLogo.vue'
import ClientsSection from '../components/ClientsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import TestimonialQuote from '../components/TestimonialQuote.vue'

function scrollToContent() {
  document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <svg class="hero-build" viewBox="0 0 1600 700" preserveAspectRatio="xMidYMax slice">
          <g
            class="build-layer"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <!-- fundação -->
            <path class="build-base" pathLength="1" d="M40 620 H1560" />

            <!-- pilares (sobe do chão) -->
            <path class="build-col col-1" d="M220 620 V420" />
            <path class="build-col col-2" d="M520 620 V280" />
            <path class="build-col col-3" d="M880 620 V360" />
            <path class="build-col col-4" d="M1280 620 V200" />

            <!-- andaimes / travamentos horizontais -->
            <path class="build-beam beam-1" pathLength="1" d="M220 520 H400" />
            <path class="build-beam beam-2" pathLength="1" d="M520 450 H760" />
            <path class="build-beam beam-3" pathLength="1" d="M880 490 H1140" />
            <path class="build-beam beam-4" pathLength="1" d="M1280 380 H1480" />

            <!-- coberturas triangulares -->
            <path class="build-roof roof-1" pathLength="1" d="M40 620 L220 420 L400 620" />
            <path class="build-roof roof-2" pathLength="1" d="M280 620 L520 280 L760 620" />
            <path class="build-roof roof-3" pathLength="1" d="M620 620 L880 360 L1140 620" />
            <path class="build-roof roof-4" pathLength="1" d="M980 620 L1280 200 L1580 620" />

            <!-- diagonais de contraventamento -->
            <path class="build-brace brace-1" pathLength="1" d="M280 620 L400 520" />
            <path class="build-brace brace-2" pathLength="1" d="M760 620 L880 480" />
            <path class="build-brace brace-3" pathLength="1" d="M1140 620 L1280 420" />
          </g>
        </svg>
      </div>

      <div class="container hero-content">
        <div class="fade-up">
          <BrandLogo variant="light" size="hero" />
        </div>
        <p class="hero-lead fade-up fade-up-delay-2">{{ site.tagline }}</p>
        <div class="hero-actions fade-up fade-up-delay-3">
          <RouterLink class="btn btn-primary" to="/projetos">Ver projetos</RouterLink>
          <RouterLink class="btn btn-ghost" to="/#contato">Falar conosco</RouterLink>
        </div>
        <button class="scroll-hint fade-up fade-up-delay-3" type="button" @click="scrollToContent">
          <span class="scroll-hint-label">Saiba mais</span>
          <span class="scroll-hint-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </button>
      </div>

      <div class="hero-line" aria-hidden="true" />
    </section>

    <div id="apresentacao" class="page container">
      <section class="intro">
        <p class="eyebrow">Apresentação</p>
        <h2 class="page-title">Soluções técnicas para o bom funcionamento da edificação</h2>
        <div class="intro-grid">
          <p>{{ about.intro }}</p>
          <p>{{ about.experience }}</p>
        </div>
      </section>

      <section class="stats section">
        <div v-for="stat in site.stats" :key="stat.label" class="stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </section>

      <section class="section">
        <div class="section-intro">
          <p class="eyebrow">O que fazemos</p>
          <h2 class="section-title">Tipos de projetos realizados</h2>
          <p class="section-lead">
            Do residencial ao industrial: soluções sob medida para cada tipo de edificação.
          </p>
        </div>
        <ul class="type-list">
          <li v-for="type in about.projectTypes" :key="type">{{ type }}</li>
        </ul>
      </section>

      <section class="section">
        <div class="section-intro">
          <p class="eyebrow">Expertise técnica</p>
          <h2 class="section-title">Serviços</h2>
          <p class="section-lead">
            Projetos em BIM, aprovações e regularizações — com precisão normativa e acompanhamento
            próximo em cada etapa.
          </p>
        </div>
        <div class="services">
          <article v-for="service in about.services" :key="service">
            <span class="service-line" aria-hidden="true" />
            <h3>{{ service }}</h3>
          </article>
        </div>
      </section>

      <section class="section quote-section" aria-label="Depoimento">
        <TestimonialQuote
          :topic="testimonials[0].topic"
          :hook="testimonials[0].hook"
          :quote="testimonials[0].quote"
          :author="testimonials[0].author"
          :context="testimonials[0].context"
        />
      </section>

      <section class="section">
        <div class="section-head">
          <div class="section-intro compact">
            <p class="eyebrow">Portfólio</p>
            <h2 class="section-title">Projetos em destaque</h2>
          </div>
          <RouterLink class="see-all" to="/projetos">Ver todos</RouterLink>
        </div>
        <div class="project-grid">
          <ProjectCard
            v-for="(project, i) in architecturalProjects.slice(0, 3)"
            :key="project.slug"
            :to="`/projetos/${project.slug}`"
            :title="project.title"
            :subtitle="project.location"
            :meta="project.area || ''"
            :image="project.cover"
            :index="i"
          />
        </div>
      </section>

      <section class="section quote-section quote-section-end" aria-label="Depoimento">
        <TestimonialQuote
          :topic="testimonials[1].topic"
          :hook="testimonials[1].hook"
          :quote="testimonials[1].quote"
          :author="testimonials[1].author"
          :context="testimonials[1].context"
          align="end"
        />
      </section>

      <section class="section">
        <div class="section-head">
          <div class="section-intro compact">
            <p class="eyebrow">Especialidades técnicas</p>
            <h2 class="section-title">Complementares em destaque</h2>
          </div>
          <RouterLink class="see-all" to="/complementares">Ver todos</RouterLink>
        </div>
        <div class="project-grid">
          <ProjectCard
            v-for="(project, i) in complementaryProjects.slice(0, 3)"
            :key="project.slug"
            :to="`/complementares/${project.slug}`"
            :title="project.title"
            :subtitle="project.client"
            :meta="[project.category, project.area].filter(Boolean).join(' · ')"
            :image="project.cover"
            :index="i"
          />
        </div>
      </section>

      <section id="clientes" class="section anchor-section">
        <div class="section-intro">
          <p class="eyebrow">Relacionamentos</p>
          <h2 class="section-title">Clientes e Parceiros</h2>
          <p class="section-lead">
            Empresas e instituições que confiam na Linea — e parceiros que somam técnica e
            execução.
          </p>
        </div>
        <ClientsSection />
      </section>

      <section id="contato" class="section anchor-section">
        <div class="section-intro">
          <p class="eyebrow">Vamos conversar</p>
          <h2 class="section-title">Contatos</h2>
          <p class="section-lead">
            Atendimento direto com a arquiteta responsável — sede em Curitiba, Paraná.
          </p>
        </div>
        <ContactSection />
      </section>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 22rem;
  overflow: hidden;
  color: #fff;
  isolation: isolate;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(18, 20, 22, 0.35) 0%, rgba(18, 20, 22, 0.72) 55%, rgba(18, 20, 22, 0.92) 100%),
    linear-gradient(115deg, rgba(227, 6, 19, 0.38), rgba(181, 5, 15, 0.12) 38%, transparent 52%),
    radial-gradient(ellipse 50% 40% at 85% 20%, rgba(240, 58, 68, 0.18), transparent 60%),
    url('../assets/images/hero-building.jpg') center / cover no-repeat;
}

.hero-build {
  position: absolute;
  inset: auto 0 0 0;
  width: 100%;
  height: min(48%, 420px);
  color: rgba(255, 255, 255, 0.72);
  pointer-events: none;
  opacity: 0.5;
}

.build-layer > * {
  opacity: 0;
}

.build-base,
.build-beam,
.build-roof,
.build-brace {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}

.build-col {
  transform-box: fill-box;
  transform-origin: center bottom;
  transform: scaleY(0);
}

/* Ciclo único de 14s — monta como obra, segura, desmonta */
.build-base {
  animation: stageBase 14s ease-in-out infinite;
}

.col-1 {
  animation: stageCol 14s ease-in-out infinite;
}
.col-2 {
  animation: stageCol 14s ease-in-out 0.18s infinite;
}
.col-3 {
  animation: stageCol 14s ease-in-out 0.36s infinite;
}
.col-4 {
  animation: stageCol 14s ease-in-out 0.54s infinite;
}

.beam-1 {
  animation: stageBeam 14s ease-in-out infinite;
}
.beam-2 {
  animation: stageBeam 14s ease-in-out 0.15s infinite;
}
.beam-3 {
  animation: stageBeam 14s ease-in-out 0.3s infinite;
}
.beam-4 {
  animation: stageBeam 14s ease-in-out 0.45s infinite;
}

.roof-1 {
  animation: stageRoof 14s ease-in-out infinite;
}
.roof-2 {
  animation: stageRoof 14s ease-in-out 0.2s infinite;
}
.roof-3 {
  animation: stageRoof 14s ease-in-out 0.4s infinite;
}
.roof-4 {
  animation: stageRoof 14s ease-in-out 0.6s infinite;
}

.brace-1 {
  animation: stageBrace 14s ease-in-out infinite;
}
.brace-2 {
  animation: stageBrace 14s ease-in-out 0.18s infinite;
}
.brace-3 {
  animation: stageBrace 14s ease-in-out 0.36s infinite;
}

/* 1. Fundação */
@keyframes stageBase {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  6% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  68% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  78%,
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

/* 2. Pilares sobem do solo */
@keyframes stageCol {
  0%,
  8% {
    transform: scaleY(0);
    opacity: 0;
  }
  18% {
    transform: scaleY(1);
    opacity: 0.26;
  }
  68% {
    transform: scaleY(1);
    opacity: 0.26;
  }
  78%,
  100% {
    transform: scaleY(1);
    opacity: 0;
  }
}

/* 3. Vigas / andaimes */
@keyframes stageBeam {
  0%,
  20% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  28% {
    stroke-dashoffset: 0;
    opacity: 0.24;
  }
  68% {
    stroke-dashoffset: 0;
    opacity: 0.24;
  }
  78%,
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

/* 4. Coberturas triangulares */
@keyframes stageRoof {
  0%,
  30% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  42% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  68% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
  78%,
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

/* 5. Contraventamento */
@keyframes stageBrace {
  0%,
  44% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  52% {
    stroke-dashoffset: 0;
    opacity: 0.22;
  }
  68% {
    stroke-dashoffset: 0;
    opacity: 0.22;
  }
  78%,
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-block: 3rem;
  max-width: 920px;
}

.hero-content :deep(.logo.hero) {
  margin-bottom: 0;
}

.hero-lead {
  margin-top: 0.85rem;
  max-width: 42ch;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.86);
  text-align: left;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.15rem;
}

.hero .btn-ghost {
  border-color: rgba(255, 255, 255, 0.55);
  color: #fff;
}

.hero .btn-ghost:hover {
  background: #fff;
  color: var(--ink);
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.25rem;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  padding: 0;
  margin-top: 1.75rem;
  text-align: center;
}

.scroll-hint-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.scroll-hint-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  animation: bounceHint 1.6s var(--ease) infinite;
}

.scroll-hint-icon svg {
  width: 1.15rem;
  height: 1.15rem;
}

.hero-line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--garnet-deep), var(--garnet) 40%, var(--garnet-soft) 75%, transparent);
  transform-origin: left;
  animation: drawLine 1s var(--ease) 0.3s both;
}

.hero-line::after {
  content: '';
  position: absolute;
  right: 12%;
  bottom: 0;
  width: 2.5rem;
  height: 3px;
  background: var(--white);
  opacity: 0.55;
}

@keyframes bounceHint {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(5px);
    opacity: 1;
  }
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2rem;
  margin-top: 1.75rem;
  color: var(--ink-soft);
  text-align: justify;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
  padding: 0;
  border: 0;
  background: transparent;
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

.type-list {
  list-style: none;
  margin: 0;
  padding: 0.85rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(201, 206, 199, 0.7);
  border-radius: 1.15rem;
}

.type-list li {
  position: relative;
  padding: 0.95rem 1rem 0.95rem 1.35rem;
  border: 0;
  border-radius: 0.75rem;
  font-weight: 600;
  background: transparent;
  color: var(--ink);
  cursor: default;
  pointer-events: none;
  user-select: text;
}

.type-list li::before {
  content: '';
  position: absolute;
  left: 0.55rem;
  top: 50%;
  width: 0.35rem;
  height: 0.35rem;
  background: var(--garnet);
  transform: translateY(-50%) rotate(45deg);
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.65rem;
}

.services article {
  position: relative;
  padding: 1rem 1rem 1rem 1.35rem;
  border: 1px solid rgba(201, 206, 199, 0.65);
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.7);
  transition: background 0.3s var(--ease), border-color 0.3s var(--ease), transform 0.3s var(--ease),
    box-shadow 0.3s var(--ease);
}

.services article:hover {
  background: #fff;
  border-color: rgba(227, 6, 19, 0.22);
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.06);
  transform: translateY(-2px);
}

.service-line {
  position: absolute;
  left: 0.65rem;
  top: 1.3rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: var(--garnet);
  box-shadow: 0 0 0 3px var(--garnet-wash);
  display: block;
}

.services h3 {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.4;
}

.intro .page-title {
  margin-bottom: 0.25rem;
}

.section-intro {
  margin-bottom: 1.35rem;
}

.section-intro .section-title {
  margin-bottom: 0.65rem;
}

.section-intro.compact {
  margin-bottom: 0;
}

.section-intro.compact .section-title {
  margin-bottom: 0;
}

.section-title {
  font-weight: 400;
  letter-spacing: 0.01em;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.35rem;
}

.section-head .section-title {
  margin-bottom: 0;
}

.see-all {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 600;
  color: var(--garnet);
  white-space: nowrap;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  transition: color 0.25s var(--ease), gap 0.25s var(--ease);
}

.see-all::after {
  content: '';
  width: 0.4rem;
  height: 0.4rem;
  border-right: 1.5px solid currentColor;
  border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.25s var(--ease);
}

.see-all:hover {
  color: var(--garnet-deep);
  gap: 0.65rem;
}

.see-all:hover::after {
  transform: rotate(45deg) translate(1px, -1px);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.anchor-section {
  scroll-margin-top: calc(var(--header-h) + 1.25rem);
  min-width: 0;
  max-width: 100%;
  overflow-x: clip;
}

.section-lead {
  margin: 0;
  max-width: 54ch;
  color: var(--ink-soft);
  font-size: 1.02rem;
  text-align: left;
  hyphens: none;
}

.section-intro .section-lead {
  margin-top: 0.15rem;
}

.quote-section {
  margin-top: 3.75rem;
  padding-block: 0.5rem;
}

.quote-section-end {
  margin-top: 4rem;
}

#clientes.section {
  margin-top: 4.5rem;
}

@media (max-width: 900px) {
  .hero {
    min-height: 0;
    height: auto;
    max-height: none;
    padding-block: 1.75rem 1.25rem;
  }

  .hero-content {
    padding-block: 0.5rem 0.25rem;
  }

  .hero-content :deep(.logo.hero .wordmark-img) {
    height: clamp(2.5rem, 10vw, 3.4rem);
  }

  .hero-lead {
    font-size: 0.92rem;
    margin-top: 0.55rem;
    max-width: 34ch;
  }

  .hero-actions {
    margin-top: 0.85rem;
    gap: 0.65rem;
  }

  .hero-actions :deep(.btn),
  .hero .btn {
    min-height: 2.6rem;
    padding: 0.55rem 1.05rem;
    font-size: 0.75rem;
  }

  .scroll-hint {
    margin-top: 1.1rem;
  }

  .hero-build {
    height: 36%;
    opacity: 0.4;
  }

  .intro-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}

/* celular: hero ~ metade da tela, sem cortar conteúdo */
@media (max-width: 700px) {
  .hero {
    min-height: min(50svh, 24rem);
  }
}

@media (min-width: 901px) {
  .hero-content {
    padding-block: 3.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .build-layer > * {
    animation: none !important;
    opacity: 0.22 !important;
    stroke-dashoffset: 0 !important;
    transform: none !important;
  }
}
</style>
