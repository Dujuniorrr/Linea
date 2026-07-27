<script setup>
import { architecturalProjects } from '../data/content'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <div class="page container">
    <p class="eyebrow fade-up">Portfólio</p>
    <h1 class="page-title fade-up fade-up-delay-1">Projetos Arquitetônicos</h1>
    <p class="page-lead fade-up fade-up-delay-2">
      Seleção de obras desenvolvidas pela Linea, com informações de cliente, área e localização.
    </p>

    <div class="grid section">
      <ProjectCard
        v-for="(project, i) in architecturalProjects"
        :key="project.slug"
        :to="`/projetos/${project.slug}`"
        :title="project.title"
        :subtitle="project.client"
        :meta="[project.area, project.location].filter(Boolean).join(' · ')"
        :image="project.cover"
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
