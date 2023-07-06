import { createApp } from "vue" // Import createApp from Vue

import App from "./App.vue"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "bootstrap/dist/js/bootstrap.js"
import "./store/global.css"

createApp(App) // Use createApp instead of "new Vue"
  .use(store)
  .use(router)
  .mount("#app")
