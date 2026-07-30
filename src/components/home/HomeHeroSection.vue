<script setup>
import { RouterLink } from 'vue-router'
import BrandLogo from '../BrandLogo.vue'
import { site } from '../../data/content'
import { whatsappHref } from '../../utils/whatsapp'

function scrollToContent() {
  document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
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
        <div class="hero-brand">
          <BrandLogo variant="light" size="hero" />
        </div>
        <p class="hero-lead fade-up fade-up-delay-2">{{ site.tagline }}</p>
        <div class="hero-actions fade-up fade-up-delay-3">
          <RouterLink
            class="btn btn-ghost"
            to="/projetos"
            title="Ver projetos arquitetônicos da Linea"
          >
            Ver projetos
          </RouterLink>
          <a
            class="btn btn-primary"
            :href="whatsappHref"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="Falar conosco no WhatsApp"
          >
            Falar conosco
          </a>
        </div>
        <button
          class="scroll-hint fade-up fade-up-delay-3"
          type="button"
          title="Saiba mais sobre a Linea"
          aria-label="Saiba mais sobre a Linea"
          @click="scrollToContent"
        >
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

</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: min(50svh, 24rem);
  overflow: hidden;
  color: #fff;
  isolation: isolate;
  contain: layout;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(18, 20, 22, 0.35) 0%, rgba(18, 20, 22, 0.72) 55%, rgba(18, 20, 22, 0.92) 100%),
    linear-gradient(115deg, rgba(227, 6, 19, 0.38), rgba(181, 5, 15, 0.12) 38%, transparent 52%),
    radial-gradient(ellipse 50% 40% at 85% 20%, rgba(240, 58, 68, 0.18), transparent 60%),
    url('/hero-lcp.webp') center / cover no-repeat;
  content-visibility: auto;
}

.hero-brand {
  min-height: clamp(3.75rem, 12vw, 6.5rem);
  display: flex;
  align-items: center;
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

@media (max-width: 900px) {
  .hero {
    min-height: min(50svh, 24rem);
    height: auto;
    max-height: none;
    padding-block: 1.75rem 1.25rem;
  }

  .hero-content {
    padding-block: 0.5rem 0.25rem;
  }

  .hero-brand {
    min-height: clamp(2.5rem, 10vw, 3.4rem);
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
}

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
  .build-layer>* {
    animation: none !important;
    opacity: 0.22 !important;
    stroke-dashoffset: 0 !important;
    transform: none !important;
  }
}
</style>
