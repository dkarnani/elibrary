import Vue from "vue";
import Router from "vue-router";
import BooksMaintain from "./views/BooksMaintain.vue";
import CheckOut from "./views/CheckOut.vue";
import Report from "./views/Report.vue";
import AvailableReport from "./views/AvailableReport.vue";
import Home from "./views/Home.vue";
import StudentsMaintain from "./views/StudentsMaintain.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/books",
      name: "booksmaintain",
      component: BooksMaintain
    },
    {
      path: "/students",
      name: "studentsmaintain",
      component: StudentsMaintain
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
    },
    {
      path: "/availableReport",
      name: "availableReport",
      component: AvailableReport
    }
  ]
});
