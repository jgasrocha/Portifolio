// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue"; // novo arquivo contendo Home + About

const routes = [
  { path: "/", component: MainPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
