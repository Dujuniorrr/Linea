<script setup>
import { about } from '../../data/content'
import TextMarquee from '../TextMarquee.vue'

const serviceRows = (() => {
  const list = about.services
  const mid = Math.ceil(list.length / 2)
  return [list.slice(0, mid), list.slice(mid)]
})()
</script>

<template>
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
</template>

<style scoped>
.list-rail {
  margin-top: 0.35rem;
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
</style>
