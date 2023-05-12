import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/home.component.vue";
import PageNotFound from "../components/page-not-found.component.vue";
import Post from "../components/post.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/posts/:id",
      name: "posts",
      component: Post,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});

export default router;