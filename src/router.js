import Vue from "vue";
import Router from "vue-router";
import BooksMaintain from "./views/BooksMaintain.vue";
import CheckOut from "./views/CheckOut.vue";
import Report from "./views/Report.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/books",
      name: "booksmaintain",
      component: BooksMaintain
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOut
    },
    {
      path: "/report",
      name: "report",
      component: Report
    }
  ]
});
