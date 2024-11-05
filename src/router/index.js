import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../modules/login/view/login.vue";
import Register from "../modules/register/view/register.vue";
import Home from "../modules/home/view/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/cadastro",
      name: "Register",
      component: Register,
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (currentUser) {
      next();
    } else {
      alert("Você não tem acesso a essa página, por favor, autentique-e!");
      next("/login");
    }
  } else if (currentUser && (to.path === "/login" || to.path === "/cadastro")) {
    next("/");
  } else {
    next();
  }
});

export default router;
