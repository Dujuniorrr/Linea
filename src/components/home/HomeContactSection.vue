<script setup>
import ContactSection from '../ContactSection.vue'
import { whatsappHref } from '../../utils/whatsapp'
</script>

<template>
  <section id="contato" class="band band-tint anchor-section">
    <div class="container band-inner">
      <div class="section-head">
        <div class="section-intro compact">
          <h2 class="section-title">Contatos</h2>
          <p class="section-lead">
            Atendimento direto com a arquiteta responsável — sede em Curitiba, Paraná.
          </p>
        </div>
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
      <ContactSection />
    </div>
  </section>
</template>
