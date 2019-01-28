import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import BooksMaintain from "./views/BooksMaintain.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/books",
      name: "booksmaintain",
      component: BooksMaintain
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
