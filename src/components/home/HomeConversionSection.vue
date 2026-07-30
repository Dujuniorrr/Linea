<script setup>
import { whatsappHref } from '../../utils/whatsapp'
</script>

<template>
  <section class="band band-cta">
    <div class="container band-inner conversion-inner">
      <h2>Seu projeto precisa avançar com clareza técnica e segurança jurídica?</h2>
      <p class="conversion-text">
        A Linea integra arquitetura, complementares e regularização em um único fluxo de trabalho,
        reduzindo gargalos e aumentando a previsibilidade da sua obra.
      </p>
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
  </section>
</template>

<style scoped>
.conversion-inner {
  display: grid;
  justify-items: center;
  gap: 0.35rem;
}

.conversion-inner h2 {
  margin: 0.35rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 3.2vw, 2.4rem);
  font-weight: 400;
  color: #fff;
  max-width: 24ch;
}

.conversion-text {
  margin: 0.9rem 0 0;
  max-width: 62ch;
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
}

.conversion-inner .btn {
  margin-top: 1.4rem;
  background: #fff;
  color: var(--garnet-deep);
}

.conversion-inner .btn:hover {
  background: #fff;
  color: var(--garnet-deep);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

@media (max-width: 700px) {
  .conversion-inner {
    justify-items: start;
    text-align: left;
  }

  .conversion-inner h2 {
    max-width: none;
    text-align: left;
  }

  .conversion-text {
    text-align: left;
  }
}
</style>
