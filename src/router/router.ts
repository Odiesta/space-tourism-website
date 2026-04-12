// router.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/destination", component: DestinationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
