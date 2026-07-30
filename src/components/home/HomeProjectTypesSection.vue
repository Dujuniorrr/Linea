<script setup>
import { about } from '../../data/content'
import TextMarquee from '../TextMarquee.vue'

const typeRows = (() => {
  const list = about.projectTypes
  const mid = Math.ceil(list.length / 2)
  return [list.slice(0, mid), list.slice(mid)]
})()
</script>

<template>
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
</template>

<style scoped>
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
</style>
