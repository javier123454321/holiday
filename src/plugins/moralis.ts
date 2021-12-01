import Moralis from "moralis";
import { App } from "vue";

const serverUrl = String(import.meta.env.VITE_MORALIS_SERVER_URL);
const appId = String(import.meta.env.VITE_MORALIS_APP_ID);

export default {
  install: (app:App, options: any) => {
    app.config.globalProperties.$moralis = Moralis.start({ serverUrl, appId });
  },
};
