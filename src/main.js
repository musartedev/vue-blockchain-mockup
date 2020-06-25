import Vue from "vue";
import { VueSpinners } from "@saeris/vue-spinners";
import "@/assets/css/tailwind.css";
import VueChartkick from "vue-chartkick";
import App from "./App.vue";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import Chart from "chart.js";

Vue.use(VueSpinners);
Vue.use(VueChartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
