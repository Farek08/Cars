import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VoteView from "../views/VoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/voting",
      name: "vote",
      component: VoteView,
    },
    {
      path: "/voting/:id",
      name: "vote",
      component: VoteView,
    },
  ],
});

export default router;
