<template>
  <dashboard-login :controller="controller" />
</template>

<script setup>
import { loginController } from "../controller/loginController";
import dashboardLogin from "../components/dashboardLogin.vue";
const controller = loginController();
</script>
