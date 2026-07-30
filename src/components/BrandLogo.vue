<script setup>
defineProps({
  variant: {
    type: String,
    default: 'dark', // dark | light
  },
  showSub: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'md', // sm | md | lg | hero | mark
  },
  /** usa apenas o símbolo (A + linha) */
  markOnly: {
    type: Boolean,
    default: false,
  },
})

/* URLs estáveis em /public para preload + cache do LCP */
const logoDark = '/logo-wordmark.webp'
const logoMark = '/apple-touch-icon.webp'
</script>

<template>
  <span
    class="logo"
    :class="[variant, size, { mark: markOnly }]"
    role="img"
    aria-label="Linea Engenharia e Arquitetura"
    title="Linea Engenharia e Arquitetura"
  >
    <img
      v-if="markOnly"
      class="mark-img"
      :src="logoMark"
      alt="Símbolo Linea Engenharia e Arquitetura"
      title="Linea Engenharia e Arquitetura"
      width="180"
      height="180"
      decoding="async"
      draggable="false"
    />
    <img
      v-else
      class="wordmark-img"
      :src="logoDark"
      alt="Linea Engenharia e Arquitetura"
      title="Linea Engenharia e Arquitetura"
      width="774"
      height="322"
      decoding="async"
      :fetchpriority="size === 'hero' ? 'high' : 'low'"
      :loading="size === 'hero' ? 'eager' : 'lazy'"
      draggable="false"
    />
  </span>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  line-height: 0;
  max-width: 100%;
}

.wordmark-img,
.mark-img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: left center;
}

.light .wordmark-img {
  filter: brightness(0) invert(1);
}

.light.mark .mark-img {
  filter: none;
}

.sm .wordmark-img {
  height: 1.65rem;
  width: auto;
}

.md .wordmark-img {
  height: 2.15rem;
  width: auto;
}

.lg .wordmark-img {
  height: 2.85rem;
  width: auto;
}

.hero .wordmark-img {
  height: clamp(3.75rem, 12vw, 6.5rem);
  width: auto;
}

.sm.mark .mark-img,
.md.mark .mark-img {
  height: 2.35rem;
  width: 2.35rem;
  object-fit: cover;
  border-radius: 2px;
}

.lg.mark .mark-img,
.hero.mark .mark-img {
  height: 9.5rem;
  width: 9.5rem;
}
</style>
