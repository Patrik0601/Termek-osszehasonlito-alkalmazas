import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '../views/ProductCatalog.vue'
import ComparisonView from '../views/ComparisonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductCatalog,
    },
    {
      path: '/compare',
      name: 'compare',   
      component: ComparisonView,
    },
  ],
})

export default router
