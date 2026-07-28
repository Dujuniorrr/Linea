<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page container not-found">
    <p class="eyebrow">Erro 404</p>
    <p class="code" aria-hidden="true">404</p>
    <h1 class="page-title">Página não encontrada</h1>
    <p class="page-lead">
      O endereço que você acessou não existe ou foi movido. Volte ao início ou explore os projetos
      da Linea.
    </p>

    <div class="actions">
      <RouterLink class="btn btn-primary" to="/">Ir para o início</RouterLink>
      <RouterLink class="btn btn-ghost" to="/projetos">Ver projetos</RouterLink>
      <RouterLink class="btn btn-ghost" to="/#contato">Falar conosco</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: calc(100vh - var(--header-h) - 12rem);
  padding-block: clamp(3rem, 8vw, 5.5rem);
}

.code {
  margin: 0.35rem 0 0.15rem;
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 14vw, 8.5rem);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--garnet);
  opacity: 0.9;
}

.page-title {
  margin-top: 0.35rem;
  max-width: 16ch;
}

.page-lead {
  max-width: 42ch;
  margin-top: 1rem;
  text-align: left;
  color: var(--ink-soft);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

@media (max-width: 520px) {
  .actions {
    width: 100%;
    flex-direction: column;
  }

  .actions .btn {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}
</style>
