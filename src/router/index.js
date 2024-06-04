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
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: (route) => {
      return {
        platos: [
          {
            nombre: 'Colaciones',
            precio: 3500,
            descripcion: 'Un plato típico de la cocina chilena que se hace con carne, zapallo, papas y verduras.',
            cantidad: 10,
            imagen: require("../assets/img/colaciones.jpg")
            
          },

          {
            nombre: 'Bebidas',
            precio: 1500,
            descripcion: 'Descubre deliciosas bebidas saludables y naturales que refrescarán tu día de forma sana y deliciosa.',
            cantidad: 20,
            imagen: require("../assets/img/bebidas.jpg")
          },
          {
            nombre: 'Sándwich Caprese',
            precio: 2000,
            descripcion: ' Este Sándwich Caprese está elaborado con ingredientes frescos.Es el desayuno perfecto, especialmente durante el verano.',
            cantidad: 15,
            imagen: require("../assets/img/desayunos.jpg")
          },
          {
            nombre: 'Dulces',
            precio: 200,
            descripcion: 'Encuentra una gran variedad de dulces típicos y artesanales de Chile, elaborados con recetas tradicionales y ingredientes de calidad.',
            cantidad: 25,
            imagen: require("../assets/img/dulces.jpg")
          },
          {
            nombre: 'Empanadas',
            precio: 2000,
            descripcion: 'Deliciosas empanadas chilenas: rellenas de sabores como carne, pino de pollo, y jurel. Auténtico placer culinario.',
            cantidad: 12,
            imagen: require("../assets/img/empanadas.jpg")
          },
          {
            nombre: 'Verduras',
            precio: 700,
            descripcion: 'Verduras chilenas frescas y sabrosas: variedad única, colores vibrantes, esencia de la tierra en cada bocado.',
            cantidad: 18,
            imagen: require("../assets/img/verduras.jpg")
          }

        ],
      }
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404View.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router





