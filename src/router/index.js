import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Lecture from "../views/lecture/Lecture";
import Practice from "../views/practice/Practice";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lecture/:id',
    name: 'Lecture',
    component: Lecture
  },
  {
    path: '/practice/:id',
    name: 'Practice',
    component: Practice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
