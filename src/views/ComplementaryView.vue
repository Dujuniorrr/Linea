<script setup>
import { complementaryProjects } from '../data/content'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <div class="page container">
    <p class="eyebrow fade-up">Especialidades técnicas</p>
    <h1 class="page-title fade-up fade-up-delay-1">Projetos Complementares</h1>
    <p class="page-lead fade-up fade-up-delay-2">
      Prevenção contra incêndio, hidráulica, elétrica e vigilância — projetos desenvolvidos pela
      Linea com precisão técnica e conformidade normativa.
    </p>

    <div class="grid section">
      <ProjectCard
        v-for="(item, i) in complementaryProjects"
        :key="item.slug"
        :to="`/complementares/${item.slug}`"
        :title="item.title"
        :subtitle="item.client"
        :meta="[item.category, item.area, item.location].filter(Boolean).join(' · ')"
        :image="item.cover"
        :index="i"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1.5rem;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
