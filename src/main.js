import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyC5dh-hyDrMcZyqzeAvxZ2Z5xkbyjUyviw",
  authDomain: "auth-screen-firebase.firebaseapp.com",
  projectId: "auth-screen-firebase",
  storageBucket: "auth-screen-firebase.firebasestorage.app",
  messagingSenderId: "757976656944",
  appId: "1:757976656944:web:ec0425b159a519e58e91f5",
  measurementId: "G-9ED1JSPL97",
};

initializeApp(firebaseConfig);

const app = createApp(App);

registerPlugins(app);

app.use(router).mount("#app");
