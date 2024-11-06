import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import router from "./router";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "auth-screen-firebase.firebaseapp.com",
  projectId: "auth-screen-firebase",
  storageBucket: "auth-screen-firebase.firebasestorage.app",
  messagingSenderId: "757976656944",
  appId: "1:757976656944:web:57789594e33727098e91f5",
  measurementId: "G-S10GEKSEB8",
};

initializeApp(firebaseConfig);

const app = createApp(App);

registerPlugins(app);

app.use(router).mount("#app");
