<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findArchitectural } from '../data/content'
import GalleryGrid from '../components/GalleryGrid.vue'
import PageNav from '../components/PageNav.vue'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const project = computed(() => findArchitectural(route.params.slug))
</script>

<template>
  <div v-if="project" class="page container">
    <PageNav
      back-to="/projetos"
      back-label="Projetos Arquitetônicos"
      :crumbs="[
        { label: 'Início', to: '/' },
        { label: 'Projetos Arquitetônicos', to: '/projetos' },
      ]"
      :current="project.title"
    />

    <h1 class="page-title tight">{{ project.title }}</h1>
    <p class="page-lead">{{ project.description }}</p>

    <dl class="facts">
      <div>
        <dt>Cliente</dt>
        <dd>{{ project.client }}</dd>
      </div>
      <div>
        <dt>Obra</dt>
        <dd>{{ project.work }}</dd>
      </div>
      <div v-if="project.area">
        <dt>Área</dt>
        <dd>{{ project.area }}</dd>
      </div>
      <div>
        <dt>Local</dt>
        <dd>{{ project.location }}</dd>
      </div>
    </dl>

    <section class="section">
      <h2 class="section-title">Galeria</h2>
      <GalleryGrid :items="project.gallery" />
    </section>
  </div>

  <NotFoundView v-else />
</template>

<style scoped>
.page-title.tight {
  margin-top: 0;
}

.page-lead {
  white-space: pre-line;
}

.facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0 0;
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.facts dt {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.35rem;
  font-weight: 500;
}

.facts dd {
  margin: 0;
  font-weight: 500;
}

@media (max-width: 800px) {
  .facts {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
