<script setup>
import { architecturalProjects, complementaryProjects, testimonials } from '../data/content'
import HomeHeroSection from '../components/home/HomeHeroSection.vue'
import HomeIntroSection from '../components/home/HomeIntroSection.vue'
import HomeProjectTypesSection from '../components/home/HomeProjectTypesSection.vue'
import HomeServicesSection from '../components/home/HomeServicesSection.vue'
import HomeTestimonialSection from '../components/home/HomeTestimonialSection.vue'
import HomeFeaturedProjectsSection from '../components/home/HomeFeaturedProjectsSection.vue'
import HomeConversionSection from '../components/home/HomeConversionSection.vue'
import HomeClientsSection from '../components/home/HomeClientsSection.vue'
import HomeContactSection from '../components/home/HomeContactSection.vue'
</script>

<template>
  <div>
    <HomeHeroSection />

    <div class="home">
      <HomeIntroSection />

      <HomeProjectTypesSection />

      <HomeServicesSection />

      <HomeTestimonialSection :testimonial="testimonials[0]" />

      <HomeFeaturedProjectsSection
        title="Projetos em destaque"
        bridge="Cada obra traduz nosso compromisso com soluções viáveis, estética consistente e desempenho técnico no dia a dia de uso."
        see-all-to="/projetos"
        see-all-title="Ver todos os projetos arquitetônicos"
        :projects="architecturalProjects.slice(0, 3)"
        link-prefix="/projetos"
        subtitle-key="location"
      />

      <HomeFeaturedProjectsSection
        title="Complementares em destaque"
        bridge="São os projetos complementares que garantem que tudo funcione na prática: da segurança à operação cotidiana da edificação."
        see-all-to="/complementares"
        see-all-title="Ver todos os projetos complementares"
        :projects="complementaryProjects.slice(0, 3)"
        link-prefix="/complementares"
        subtitle-key="client"
        tint
      />

      <HomeTestimonialSection :testimonial="testimonials[1]" align="end" />

      <HomeConversionSection />

      <HomeClientsSection />

      <HomeContactSection />
    </div>
  </div>
</template>

<style src="../styles/home-bands.css"></style>
