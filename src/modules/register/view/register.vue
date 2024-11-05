<template>
  <dashboard-register :controller="controller" />
</template>

<script setup>
import { registerController } from "../controller/registerController";
import DashboardRegister from "../components/dashboardRegister.vue";
const controller = registerController();
</script>
