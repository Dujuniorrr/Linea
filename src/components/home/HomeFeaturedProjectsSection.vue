<script setup>
import { RouterLink } from 'vue-router'
import ProjectCard from '../ProjectCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  bridge: {
    type: String,
    required: true,
  },
  seeAllTo: {
    type: String,
    required: true,
  },
  seeAllTitle: {
    type: String,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
  linkPrefix: {
    type: String,
    required: true,
  },
  /** 'location' | 'client' — which field to use as card subtitle */
  subtitleKey: {
    type: String,
    default: 'location',
  },
  tint: {
    type: Boolean,
    default: false,
  },
})

function projectMeta(project) {
  if (project.category) {
    return [project.category, project.area].filter(Boolean).join(' · ')
  }
  return project.area || ''
}
</script>

<template>
  <section :class="['band', tint ? 'band-tint' : 'band-plain']">
    <div class="container band-inner">
      <div class="section-head">
        <div class="section-intro compact">
          <h2 class="section-title">{{ title }}</h2>
        </div>
        <RouterLink class="see-all" :to="seeAllTo" :title="seeAllTitle">
          Ver todos
        </RouterLink>
      </div>
      <p class="section-bridge">{{ bridge }}</p>
      <div class="project-grid">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.slug"
          :to="`${linkPrefix}/${project.slug}`"
          :title="project.title"
          :subtitle="project[subtitleKey]"
          :meta="projectMeta(project)"
          :image="project.cover"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
