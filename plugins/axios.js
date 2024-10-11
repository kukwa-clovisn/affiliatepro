import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  // axios.defaults.baseURL = "http://localhost:3005/api";
  axios.defaults.baseURL = "https://api.gospelfxtrader.com";
});
