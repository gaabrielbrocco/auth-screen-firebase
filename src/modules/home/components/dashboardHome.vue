<template>
  <section class="mt-15" style="background-color: white">
    <v-row class="d-flex justify-center" style="min-height: 91vh">
      <v-col cols="12" sm="12" md="11">
        <div class="text-center py-15 mt-10">
          <v-row
            v-if="
              controller.dadosUsuario.value &&
              controller.dadosUsuario.value.providerData[0].providerId ===
                'password'
            "
            class="d-flex justify-center"
          >
            <v-col cols="10">
              <div class="text-h5 text-black font-weight-thin">
                Parabéns {{ controller.dadosUsuario.value?.email }}, você está
                autenticado!
              </div>
              <div
                class="font-weight-thin mt-10"
                style="color: gray; font-size: 18px"
              >
                Para sair de sua conta, clique no botão abaixo:
              </div>
            </v-col>
          </v-row>
          <v-row v-else class="d-flex justify-center">
            <v-col cols="10">
              <div class="text-h5 text-black font-weight-thin">
                Parabéns {{ controller.dadosUsuario.value?.displayName }}, você
                está autenticado!
              </div>
              <v-avatar size="x-large" class="mt-8">
                <v-img :src="controller.dadosUsuario.value?.photoURL"></v-img>
              </v-avatar>
              <div
                class="font-weight-thin mt-10"
                style="color: gray; font-size: 18px"
              >
                Para sair de sua conta, clique no botão abaixo:
              </div>
            </v-col>
          </v-row>
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
