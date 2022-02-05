import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import FontAwesomeIcon from "./fontawesome-icons";
import VueApexCharts from "vue3-apexcharts";

createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
