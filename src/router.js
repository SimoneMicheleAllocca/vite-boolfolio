import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import ShowProject from './pages/ShowProject.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ShowProject, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;