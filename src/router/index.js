import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/ProductosView.vue'),
    props: (route) => {
      return {
        productos: [
          {
            id: 1,
            imagen: require('../assets/img/desayunos.jpg'),
            nombre: 'Desayuno',
            descripcion: 'Contamos con desayunos nutritivos y deliciosos',
            precio: 2000,
            cantidad: 'Para dos personas'
          },
          {
            id: 2,
            imagen: require('../assets/img/bebidas.jpg'),
            nombre: 'Bebidas',
            descripcion: 'Contamos con ricas bebidas',
            precio: 1000,
            cantidad: 'Para una persona'
          },
          {
            id: 3,
            imagen: require('../assets/img/empanadas.jpg'),
            nombre: 'Empanadas',
            descripcion: 'Contamos con ricas empanadas',
            precio: 1500,
            cantidad: 'Para una persona'
          }
        ]
      }
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
