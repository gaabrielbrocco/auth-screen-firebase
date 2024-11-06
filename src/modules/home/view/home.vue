<template>
  <home :controller="controller" />
</template>

<script setup>
import { homeController } from "../controller/homeController";
import Home from "../components/dashboardHome.vue";
const controller = homeController();
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
