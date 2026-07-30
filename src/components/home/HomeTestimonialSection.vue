<script setup>
import TestimonialQuote from '../TestimonialQuote.vue'

defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
  align: {
    type: String,
    default: 'start',
  },
})
</script>

<template>
  <section class="band band-quote" aria-label="Depoimento">
    <div class="container band-inner">
      <TestimonialQuote
        :topic="testimonial.topic"
        :hook="testimonial.hook"
        :quote="testimonial.quote"
        :author="testimonial.author"
        :context="testimonial.context"
        :align="align"
      />
    </div>
  </section>
</template>
