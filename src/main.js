import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import DetailsPage from "./views/DetailsPage.vue";
import LogIn from "./views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LogIn },
  {
    path: "/details",
    component: DetailsPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isLoggedIn")) {
        next();
      } else {
        next("/");
      }
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
});
