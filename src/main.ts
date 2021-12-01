import { createApp } from "vue";
import router from "./router/router";
import "./index.css";
import App from "./App.vue";
import moralis from "./plugins/moralis";

// console.log("moralis.ts");

// console.log(import.meta.env.VITE_MORALIS_SERVER_URL);

// Moralis.start({
//   serverUrl: String(import.meta.env.VITE_MORALIS_SERVER_URL),
//   appId: String(import.meta.env.VITE_MORALIS_APP_ID),
// });

const app = createApp(App);
console.log({ app });
app.use(moralis);
app.use(router);
app.mount("#app");
