<script setup>
defineProps({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  context: { type: String, default: '' },
  topic: { type: String, default: '' },
  hook: { type: String, default: '' },
  align: {
    type: String,
    default: 'start', // start | end
  },
})
</script>

<template>
  <div class="testimonial" :class="align">
    <header v-if="topic || hook" class="lead">
      <p v-if="topic" class="topic">{{ topic }}</p>
      <p v-if="hook" class="hook">{{ hook }}</p>
    </header>

    <figure class="quote">
      <span class="mark" aria-hidden="true">“</span>
      <blockquote>
        <p>{{ quote }}</p>
      </blockquote>
      <figcaption>
        <span class="rule" aria-hidden="true" />
        <div class="meta">
          <span class="author">{{ author }}</span>
          <span v-if="context" class="context">{{ context }}</span>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.testimonial {
  display: grid;
  gap: 1.35rem;
  max-width: 48rem;
}

.testimonial.end {
  margin-left: auto;
}

.lead {
  display: grid;
  gap: 0.65rem;
  max-width: 40rem;
}

.testimonial.end .lead {
  margin-left: auto;
  text-align: right;
}

.topic {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--garnet);
}

.hook {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.01em;
  color: var(--ink);
}

.quote {
  position: relative;
  margin: 0;
  padding: 2rem 1.85rem 1.85rem;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.62));
  border: 1px solid rgba(201, 206, 199, 0.65);
  border-radius: 1.25rem;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.85) inset,
    0 18px 40px rgba(23, 25, 28, 0.05);
  overflow: hidden;
  isolation: isolate;
}

.quote::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 0% 0%, var(--garnet-wash), transparent 55%),
    radial-gradient(ellipse 50% 40% at 100% 100%, rgba(181, 5, 15, 0.05), transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.quote > * {
  position: relative;
  z-index: 1;
}

.mark {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(3.25rem, 7vw, 4.5rem);
  font-weight: 300;
  line-height: 0.7;
  color: var(--garnet);
  opacity: 0.85;
  margin-bottom: 0.75rem;
  letter-spacing: -0.04em;
}

blockquote {
  margin: 0;
}

blockquote p {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.02rem, 2vw, 1.22rem);
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.005em;
  color: var(--ink-soft);
  text-align: left;
  hyphens: none;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.rule {
  flex: 0 0 2.25rem;
  height: 2px;
  background: linear-gradient(90deg, var(--garnet), var(--garnet-soft));
  border-radius: 1px;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.author {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
}

.context {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
}

@media (max-width: 700px) {
  .testimonial,
  .testimonial.end {
    max-width: none;
    margin-left: 0;
  }

  .testimonial.end .lead {
    margin-left: 0;
    text-align: left;
  }

  .quote {
    padding: 1.65rem 1.25rem 1.4rem;
    border-radius: 1rem;
  }
}
</style>
