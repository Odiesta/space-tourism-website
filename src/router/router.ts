import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";
import CrewView from "@/views/CrewView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/destination", component: DestinationView },
  { path: "/crew", component: CrewView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
