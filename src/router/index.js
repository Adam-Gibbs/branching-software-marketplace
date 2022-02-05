import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Log In",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Else",
    component: () => import("../views/404.vue"),
    meta: {
      authRequired: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //A Logged-in user can't go to login pages again
  const go = to.name;
  if (
    (go === "Sign In" || go === "Sign Up") &&
    localStorage.getItem("userId")
  ) {
    router.push({
      name: "Overview",
    });
  } else if (to.meta.authRequired) {
    if (!localStorage.getItem("userId")) {
      //user not logged in, send them to login page
      router.push({
        name: "Sign In",
        query: {
          go,
        },
      });
    }
  }

  return next();
});

export default router;
