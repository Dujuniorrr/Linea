import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ComplementaryView from '../views/ComplementaryView.vue'
import ComplementaryDetailView from '../views/ComplementaryDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Apresentação' } },
    {
      path: '/projetos',
      name: 'projects',
      component: ProjectsView,
      meta: { title: 'Projetos Arquitetônicos' },
    },
    {
      path: '/projetos/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      meta: { title: 'Projeto' },
    },
    {
      path: '/complementares',
      name: 'complementary',
      component: ComplementaryView,
      meta: { title: 'Projetos Complementares' },
    },
    {
      path: '/complementares/:slug',
      name: 'complementary-detail',
      component: ComplementaryDetailView,
      meta: { title: 'Projeto complementar' },
    },
    { path: '/clientes', redirect: '/#clientes' },
    { path: '/contato', redirect: '/#contato' },
    { path: '/contact.aspx', redirect: '/#contato' },
    { path: '/page2.aspx', redirect: '/#clientes' },
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

router.afterEach((to) => {
  const page = to.meta.title ? `${to.meta.title} · ` : ''
  document.title = `${page}Linea Engenharia e Arquitetura`
})

export default router
