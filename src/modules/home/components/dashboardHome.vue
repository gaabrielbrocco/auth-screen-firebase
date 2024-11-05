<template>
  <section class="mt-15" style="background-color: white">
    <v-row class="d-flex justify-center" style="min-height: 91vh">
      <v-col cols="12" sm="12" md="11">
        <div class="text-center py-15 mt-10">
          <div class="text-h3 text-black font-weight-thin">
            Parabéns, você está autenticado!
          </div>
          <div
            class="font-weight-thin mt-10"
            style="color: gray; font-size: 22px"
          >
            Para sair de sua conta, clique no botão abaixo:
          </div>
        </div>
        <div class="d-flex justify-center">
          <v-btn @click="controller.logout" size="large"> SAIR </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
