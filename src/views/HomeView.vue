<script setup>
import { RouterLink } from 'vue-router'
import { about, site, architecturalProjects, complementaryProjects, testimonials, contacts } from '../data/content'
import ProjectCard from '../components/ProjectCard.vue'
import BrandLogo from '../components/BrandLogo.vue'
import ClientsSection from '../components/ClientsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import TestimonialQuote from '../components/TestimonialQuote.vue'
import TextMarquee from '../components/TextMarquee.vue'

const valuePillars = [
  {
    kicker: 'Diagnóstico',
    title: 'Mapeamento técnico antes de qualquer decisão',
    text: 'Analisamos contexto, normas e objetivo do negócio para reduzir incerteza e criar um plano de projeto mais previsível.',
  },
  {
    kicker: 'Performance',
    title: 'Projetos que funcionam na prática',
    text: 'Cada detalhe é pensado para obra, operação e manutenção: menos retrabalho, menos atraso e mais eficiência no uso do espaço.',
  },
  {
    kicker: 'Regularização',
    title: 'Segurança normativa do início ao fim',
    text: 'Conduzimos aprovações e documentação com rigor técnico para proteger seu investimento e evitar bloqueios futuros.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico e direção',
    text: 'Levantamos necessidades, riscos e oportunidades para definir uma rota clara de projeto.',
  },
  {
    step: '02',
    title: 'Projeto integrado',
    text: 'Arquitetura e complementares evoluem juntos para manter compatibilização e ganho de prazo.',
  },
  {
    step: '03',
    title: 'Aprovação e regularização',
    text: 'Acompanhamos tramitações com critérios técnicos e comunicação objetiva com os órgãos.',
  },
  {
    step: '04',
    title: 'Entrega com previsibilidade',
    text: 'Você recebe documentação estruturada e suporte para executar com mais segurança na ponta.',
  },
]

const whatsappHref =
  contacts.offices
    ?.flatMap((office) => office.phones || [])
    ?.find((phone) => phone.whatsapp && phone.href)?.href || '/#contato'

const serviceRows = (() => {
  const list = about.services
  const mid = Math.ceil(list.length / 2)
  return [list.slice(0, mid), list.slice(mid)]
})()

const typeRows = (() => {
  const list = about.projectTypes
  const mid = Math.ceil(list.length / 2)
  return [list.slice(0, mid), list.slice(mid)]
})()

function scrollToContent() {
  document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <svg class="hero-build" viewBox="0 0 1600 700" preserveAspectRatio="xMidYMax slice">
          <g class="build-layer" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
            stroke-linecap="round">
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
          <RouterLink class="btn btn-ghost" to="/projetos">Ver projetos</RouterLink>
          <a class="btn btn-primary" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
            Falar conosco
          </a>
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

    <div class="home">
      <section id="apresentacao" class="band band-paper anchor-section">
        <div class="container band-inner">
          <div class="intro-layout">
            <div class="intro-copy">
              <h1 class="page-title">Soluções técnicas para o bom funcionamento da edificação</h1>
              <p class="intro-text">{{ about.intro }}</p>
              <p class="intro-text">{{ about.experience }}</p>
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

      <!-- <section class="band band-plain">
        <div class="container band-inner">
          <div class="section-intro">
            <h2 class="section-title">Não entregamos apenas projeto. Entregamos direção.</h2>
            <p class="section-lead">
              Combinamos estratégia, domínio técnico e acompanhamento próximo para transformar decisões
              complexas em uma jornada clara de obra e regularização.
            </p>
          </div>

          <div class="momentum-grid">
            <article v-for="item in valuePillars" :key="item.title" class="momentum-card">
              <p class="momentum-kicker">{{ item.kicker }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section> -->

      <section class="band band-tint">
        <div class="container band-inner">
          <div class="section-intro">
            <h2 class="section-title">Tipos de projetos realizados</h2>
            <p class="section-lead">
              Do residencial ao industrial, atendemos demandas específicas sem perder a visão
              estratégica: funcionalidade, desempenho e conformidade caminham juntos em cada projeto.
            </p>
          </div>
          <div class="list-rail list-rail-types">
            <TextMarquee
              :items="about.projectTypes"
              :duration="40"
              :mobile-duration="18"
              :numbered="false"
              class="types-row-desktop"
            />
            <TextMarquee
              :items="typeRows[0]"
              :duration="40"
              :mobile-duration="18"
              :numbered="false"
              class="types-row-mobile"
            />
            <TextMarquee
              :items="typeRows[1]"
              :duration="46"
              :mobile-duration="20"
              reverse
              class="rail-offset types-row-mobile"
              :numbered="false"
            />
          </div>
        </div>
      </section>

      <section class="band band-dark">
        <div class="container band-inner">
          <div class="section-intro">
            <h2 class="section-title">Serviços</h2>
            <p class="section-lead">
              Projetos em BIM, aprovações e regularizações com abordagem prática: menos retrabalho, mais
              previsibilidade e execução com segurança.
            </p>
          </div>
          <div class="list-rail list-rail-dark">
            <TextMarquee
              :items="serviceRows[0]"
              :duration="72"
              :mobile-duration="34"
              reverse
              :numbered="false"
            />
            <TextMarquee
              :items="serviceRows[1]"
              :duration="80"
              :mobile-duration="38"
              class="rail-offset"
              :numbered="false"
            />
          </div>
        </div>
      </section>

      <!-- <section class="band band-plain">
        <div class="container band-inner">
          <div class="section-intro centered">
            <h2 class="section-title">Um fluxo técnico pensado para dar ritmo à sua obra</h2>
            <p class="section-lead">
              Organizamos as etapas para que você tenha visibilidade do processo, controle de prazo e
              mais confiança em cada tomada de decisão.
            </p>
          </div>

          <ol class="process-grid">
            <li v-for="item in processSteps" :key="item.step" class="process-card">
              <span class="process-step">{{ item.step }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </li>
          </ol>
        </div>
      </section> -->

      <section class="band band-quote" aria-label="Depoimento">
        <div class="container band-inner">
          <TestimonialQuote :topic="testimonials[0].topic" :hook="testimonials[0].hook" :quote="testimonials[0].quote"
            :author="testimonials[0].author" :context="testimonials[0].context" />
        </div>
      </section>

      <section class="band band-plain">
        <div class="container band-inner">
          <div class="section-head">
            <div class="section-intro compact">
              <h2 class="section-title">Projetos em destaque</h2>
            </div>
            <RouterLink class="see-all" to="/projetos">Ver todos</RouterLink>
          </div>
          <p class="section-bridge">
            Cada obra traduz nosso compromisso com soluções viáveis, estética consistente e desempenho
            técnico no dia a dia de uso.
          </p>
          <div class="project-grid">
            <ProjectCard v-for="(project, i) in architecturalProjects.slice(0, 3)" :key="project.slug"
              :to="`/projetos/${project.slug}`" :title="project.title" :subtitle="project.location"
              :meta="project.area || ''" :image="project.cover" :index="i" />
          </div>
        </div>
      </section>

      <section class="band band-tint">
        <div class="container band-inner">
          <div class="section-head">
            <div class="section-intro compact">
              <h2 class="section-title">Complementares em destaque</h2>
            </div>
            <RouterLink class="see-all" to="/complementares">Ver todos</RouterLink>
          </div>
          <p class="section-bridge">
            São os projetos complementares que garantem que tudo funcione na prática: da segurança à
            operação cotidiana da edificação.
          </p>
          <div class="project-grid">
            <ProjectCard v-for="(project, i) in complementaryProjects.slice(0, 3)" :key="project.slug"
              :to="`/complementares/${project.slug}`" :title="project.title" :subtitle="project.client"
              :meta="[project.category, project.area].filter(Boolean).join(' · ')" :image="project.cover" :index="i" />
          </div>
        </div>
      </section>

      <section class="band band-quote" aria-label="Depoimento">
        <div class="container band-inner">
          <TestimonialQuote :topic="testimonials[1].topic" :hook="testimonials[1].hook" :quote="testimonials[1].quote"
            :author="testimonials[1].author" :context="testimonials[1].context" align="end" />
        </div>
      </section>

      <section class="band band-cta">
        <div class="container band-inner conversion-inner">
          <h2>Seu projeto precisa avançar com clareza técnica e segurança jurídica?</h2>
          <p class="conversion-text">
            A Linea integra arquitetura, complementares e regularização em um único fluxo de trabalho,
            reduzindo gargalos e aumentando a previsibilidade da sua obra.
          </p>
          <a class="btn btn-primary" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
            Falar conosco
          </a>
        </div>
      </section>

      <section id="clientes" class="band band-plain anchor-section">
        <div class="container band-inner">
          <div class="section-intro">
            <h2 class="section-title">Clientes e Parceiros</h2>
            <p class="section-lead">
              Empresas e instituições que confiam na Linea — e parceiros estratégicos que ampliam
              nossa capacidade de entrega em diferentes frentes.
            </p>
          </div>
          <ClientsSection />
        </div>
      </section>

      <section id="contato" class="band band-tint anchor-section">
        <div class="container band-inner">
          <div class="section-head">
            <div class="section-intro compact">
              <h2 class="section-title">Contatos</h2>
              <p class="section-lead">
                Atendimento direto com a arquiteta responsável — sede em Curitiba, Paraná.
              </p>
            </div>
            <a class="btn btn-primary" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
              Falar conosco
            </a>
          </div>
          <ContactSection />
        </div>
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

.build-layer>* {
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

.home {
  display: block;
}

.band {
  position: relative;
  width: 100%;
  padding-block: clamp(3rem, 6vw, 5rem);
}

.band-inner {
  position: relative;
  z-index: 1;
}

.band-paper {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
}

.band-plain {
  background: transparent;
}

.band-tint {
  background:
    radial-gradient(ellipse 60% 70% at 100% 0%, rgba(227, 6, 19, 0.06), transparent 60%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.5));
  border-block: 1px solid rgba(53, 57, 74, 0.08);
}

.band-quote {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0));
}

.band-dark {
  background:
    radial-gradient(ellipse 50% 60% at 8% 0%, rgba(240, 58, 68, 0.26), transparent 55%),
    radial-gradient(ellipse 45% 60% at 95% 100%, rgba(74, 93, 106, 0.32), transparent 55%),
    linear-gradient(135deg, #191d2d, #242a42 55%, #1b2033);
  color: rgba(255, 255, 255, 0.88);
}

.band-dark .section-title {
  color: #fff;
}

.band-dark .section-title::before {
  background: linear-gradient(180deg, var(--garnet-soft), rgba(255, 255, 255, 0.5));
}

.band-dark .section-lead {
  color: rgba(255, 255, 255, 0.74);
}

.list-rail {
  margin-top: 0.35rem;
}

.list-rail-types {
  display: grid;
  gap: 0.7rem;
}

.types-row-mobile {
  display: none;
}

.types-row-desktop {
  display: block;
}

@media (max-width: 900px) {
  .types-row-desktop {
    display: none;
  }

  .types-row-mobile {
    display: block;
  }
}

.list-rail-dark {
  display: grid;
  gap: 0.65rem;
}

.list-rail-dark :deep(.chip) {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
}

.list-rail-dark :deep(.chip-label) {
  color: #fff;
}

.list-rail-dark :deep(.chip-index) {
  color: rgba(255, 180, 184, 0.95);
}

.list-rail-dark :deep(.chip:hover) {
  border-color: rgba(240, 58, 68, 0.55);
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 0 12px 28px rgba(8, 10, 18, 0.22);
}

.rail-offset {
  margin-left: -3rem;
}

@media (min-width: 901px) {
  .list-rail-types {
    gap: 1rem;
    padding-block: 0.55rem 0.25rem;
  }

  .list-rail-types :deep(.group) {
    gap: 0.85rem;
    padding-block: 0.35rem;
  }

  .list-rail-types :deep(.chip) {
    padding: 1.05rem 1.4rem;
    border-radius: 1.15rem;
    border-color: rgba(201, 206, 199, 0.9);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 14px 30px rgba(23, 25, 28, 0.07);
  }

  .list-rail-types :deep(.chip-label) {
    font-size: 1.02rem;
    font-weight: 650;
  }
}

.band-cta {
  background:
    radial-gradient(ellipse 45% 70% at 12% 10%, rgba(227, 6, 19, 0.32), transparent 55%),
    linear-gradient(120deg, #b5050f, #7d0510 60%, #2a1420);
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}

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

.section-bridge {
  margin: 0 0 1.05rem;
  max-width: 72ch;
  color: var(--ink-soft);
  font-size: 0.97rem;
  line-height: 1.6;
  letter-spacing: 0.005em;
}

.section-bridge-center {
  margin: 1.1rem auto 0;
  text-align: center;
}

.split-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 1rem 2.5rem;
  align-items: end;
  margin-bottom: 1.6rem;
}

.split-head .section-bridge {
  margin: 0;
}

.section-intro.centered {
  max-width: 62ch;
  margin-inline: auto;
  text-align: center;
}

.section-intro.centered .section-title {
  padding-left: 0;
}

.section-intro.centered .section-title::before {
  left: 50%;
  top: auto;
  bottom: -0.5rem;
  width: 3rem;
  height: 3px;
  transform: translateX(-50%);
  border-radius: 999px;
}

.section-intro.centered .section-lead {
  margin-inline: auto;
  margin-top: 1.1rem;
}

.momentum-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.momentum-card {
  padding: 1.05rem;
  border-radius: 1rem;
  border: 1px solid rgba(36, 38, 50, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.78)),
    var(--garnet-wash);
  box-shadow: 0 12px 26px rgba(23, 25, 28, 0.05);
}

.momentum-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--garnet-deep);
}

.momentum-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--ink);
}

.momentum-card p {
  margin: 0.55rem 0 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--ink-soft);
}

.process-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.process-card {
  position: relative;
  padding: 1rem 0.95rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(36, 38, 50, 0.08);
  background: rgba(255, 255, 255, 0.74);
}

.process-step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 1.7rem;
  border-radius: 999px;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--garnet-deep);
  background: rgba(227, 6, 19, 0.1);
}

.process-card h3 {
  margin: 0.65rem 0 0;
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--ink);
}

.process-card p {
  margin: 0.5rem 0 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-soft);
}

.conversion-inner {
  display: grid;
  justify-items: center;
  gap: 0.35rem;
}

.conversion-inner h2 {
  margin: 0.35rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 3.2vw, 2.4rem);
  font-weight: 400;
  color: #fff;
  max-width: 24ch;
}

.conversion-text {
  margin: 0.9rem 0 0;
  max-width: 62ch;
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
}

.conversion-inner .btn {
  margin-top: 1.4rem;
  background: #fff;
  color: var(--garnet-deep);
}

.conversion-inner .btn:hover {
  background: #fff;
  color: var(--garnet-deep);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

@media (max-width: 700px) {
  .section-bridge {
    margin-bottom: 0.9rem;
    font-size: 0.93rem;
  }
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

@media (max-width: 1024px) {
  .intro-layout {
    grid-template-columns: 1fr;
  }

  .stats-panel {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .split-head {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

  .band {
    padding-block: clamp(2.25rem, 5vw, 3.5rem);
  }

  .project-grid,
  .momentum-grid {
    grid-template-columns: 1fr;
  }

  .stats-panel {
    grid-template-columns: 1fr;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-head .btn {
    width: 100%;
  }
}

@media (max-width: 700px) {
  /* celular: hero ~ metade da tela, sem cortar conteúdo */
  .hero {
    min-height: min(50svh, 24rem);
  }

  .section-bridge {
    margin-bottom: 0.9rem;
    font-size: 0.93rem;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .conversion-inner {
    justify-items: start;
    text-align: left;
  }

  .conversion-inner h2 {
    max-width: none;
    text-align: left;
  }

  .conversion-text {
    text-align: left;
  }

  .band-cta {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .rail-offset {
    margin-left: -1.25rem;
  }
}

@media (min-width: 901px) {
  .hero-content {
    padding-block: 3.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .build-layer>* {
    animation: none !important;
    opacity: 0.22 !important;
    stroke-dashoffset: 0 !important;
    transform: none !important;
  }
}
</style>
