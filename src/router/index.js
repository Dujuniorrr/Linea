import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ComplementaryView from '../views/ComplementaryView.vue'
import ComplementaryDetailView from '../views/ComplementaryDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { findArchitectural, findComplementary } from '../data/content'
import { applySeo } from '../seo/applySeo'
import { trackPageView } from '../seo/analytics'
import { DEFAULT_DESCRIPTION, SITE_URL } from '../seo/site'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: null,
        description: DEFAULT_DESCRIPTION,
      },
    },
    {
      path: '/projetos',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projetos Arquitetônicos',
        description:
          'Portfólio Linea: projetos residenciais, comerciais, industriais e institucionais em Curitiba e região.',
      },
    },
    {
      path: '/projetos/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      meta: {
        title: 'Projeto',
        description: 'Detalhes de projeto arquitetônico desenvolvido pela Linea Engenharia e Arquitetura.',
        type: 'article',
      },
    },
    {
      path: '/complementares',
      name: 'complementary',
      component: ComplementaryView,
      meta: {
        title: 'Projetos Complementares',
        description:
          'Projetos complementares em BIM: prevenção de incêndio, hidrossanitário, elétrico e vigilância sanitária.',
      },
    },
    {
      path: '/complementares/:slug',
      name: 'complementary-detail',
      component: ComplementaryDetailView,
      meta: {
        title: 'Projeto complementar',
        description: 'Detalhes de projeto complementar desenvolvido pela Linea Engenharia e Arquitetura.',
        type: 'article',
      },
    },
    { path: '/clientes', redirect: '/#clientes' },
    { path: '/contato', redirect: '/#contato' },
    { path: '/contact.aspx', redirect: '/#contato' },
    { path: '/page2.aspx', redirect: '/#clientes' },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Página não encontrada',
        description: 'A página solicitada não foi encontrada no site da Linea Engenharia e Arquitetura.',
        noindex: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return { top: 0 }
  },
})

function resolveImage(cover) {
  if (!cover) return `${SITE_URL}/og-image.jpg`
  if (/^(https?:|data:)/i.test(cover)) return cover
  if (cover.startsWith('/')) return `${SITE_URL}${cover}`
  return cover
}

function resolveSeo(to) {
  let title = to.meta.title || null
  let description = to.meta.description || DEFAULT_DESCRIPTION
  let image = `${SITE_URL}/og-image.jpg`
  const type = to.meta.type || 'website'
  const noindex = Boolean(to.meta.noindex)

  if (to.name === 'project-detail') {
    const project = findArchitectural(to.params.slug)
    if (project) {
      title = project.title
      description = project.description || description
      image = resolveImage(project.cover)
    }
  }

  if (to.name === 'complementary-detail') {
    const project = findComplementary(to.params.slug)
    if (project) {
      title = project.title
      description = project.description || description
      image = resolveImage(project.cover)
    }
  }

  return {
    title,
    description,
    path: to.path,
    image,
    type,
    noindex,
  }
}

router.afterEach((to) => {
  applySeo(resolveSeo(to))
  trackPageView(to.fullPath)
})

export default router
