import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue'),
    },
    {
      path: '/message2',
      name: 'message2',
      component: () => import('../views/Message2View.vue'),
    },
    {
      path: '/todolistusingevents',
      name: 'todolistusingevents',
      component: () => import('../views/ToDolistUsingEventsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/EmployeeRegistration.vue'),
    },
    {
      path: '/crudsample',
      name: 'crudsample',
      component: () => import('../views/SampleCrud.vue'),
    },
    {
      path: '/todolistvuex',
      name: 'todolistvuex',
      component: () => import('../views/ToDoListUsingVuex.vue'),
    },
    {
      path: '/todolistvuexandcomponents',
      name: 'todolistvuexandcomponents',
      component: () => import('../views/ToDoListVuexAndComponents.vue'),
    },
  ],
})

export default router
