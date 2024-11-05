<template>
  <dashboard-acesso :controller="controller" />
</template>

<script setup>
import { acessoNegadoController } from "../controller/acessoNegadoController";
import DashboardAcesso from "../components/dashboardAcesso.vue";
const controller = acessoNegadoController();
</script>
