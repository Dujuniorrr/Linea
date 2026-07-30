<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page container not-found">
    <p class="eyebrow">Erro 404</p>
    <p class="code" aria-hidden="true">404</p>
    <h1 class="page-title">Página não encontrada</h1>
    <p class="page-lead">
      O endereço que você acessou não existe ou foi movido. Use os links abaixo para continuar
      navegando no site da Linea.
    </p>

    <div class="actions">
      <RouterLink class="btn btn-primary" to="/" title="Ir para a página inicial">
        Ir para o início
      </RouterLink>
      <RouterLink class="btn btn-ghost" to="/projetos" title="Ver projetos arquitetônicos">
        Projetos arquitetônicos
      </RouterLink>
      <RouterLink class="btn btn-ghost" to="/complementares" title="Ver projetos complementares">
        Projetos complementares
      </RouterLink>
      <RouterLink class="btn btn-ghost" to="/#contato" title="Ver informações de contato">
        Contatos
      </RouterLink>
    </div>

    <nav class="helpful" aria-label="Links úteis">
      <p>Também pode interessar:</p>
      <ul>
        <li>
          <RouterLink to="/#clientes" title="Ver clientes e parceiros da Linea">
            Clientes e parceiros
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/#apresentacao" title="Sobre a Linea Engenharia e Arquitetura">
            Sobre a Linea
          </RouterLink>
        </li>
        <li>
          <a
            href="https://wa.me/5541996463034"
            title="Falar com a Linea no WhatsApp"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >WhatsApp</a>
        </li>
      </ul>
    </nav>
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

.helpful {
  margin-top: 2.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
  width: min(100%, 36rem);
}

.helpful p {
  margin: 0 0 0.65rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.helpful ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
}

.helpful a {
  color: var(--garnet);
  font-weight: 600;
  border-bottom: 1px solid transparent;
}

.helpful a:hover {
  border-bottom-color: var(--garnet);
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
