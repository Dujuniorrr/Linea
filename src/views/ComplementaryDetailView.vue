<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findComplementary } from '../data/content'
import GalleryGrid from '../components/GalleryGrid.vue'
import PageNav from '../components/PageNav.vue'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const project = computed(() => findComplementary(route.params.slug))
</script>

<template>
  <div v-if="project" class="page container">
    <PageNav
      back-to="/complementares"
      back-label="Projetos Complementares"
      :crumbs="[
        { label: 'Início', to: '/' },
        { label: 'Projetos Complementares', to: '/complementares' },
      ]"
      :current="project.title"
    />

    <p v-if="project.category" class="eyebrow">{{ project.category }}</p>
    <h1 class="page-title tight">{{ project.title }}</h1>
    <p class="page-lead">{{ project.description || project.definition }}</p>

    <dl class="facts">
      <div>
        <dt>Cliente</dt>
        <dd>{{ project.client }}</dd>
      </div>
      <div>
        <dt>Uso</dt>
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
  margin-top: 0.85rem;
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
