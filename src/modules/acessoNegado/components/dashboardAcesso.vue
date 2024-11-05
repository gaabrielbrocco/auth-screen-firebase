<template>
  <section style="padding: 90px 10px 80px">
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card class="rounded-xl" min-height="800" color="#E9E9E9">
          <v-row>
            <v-col cols="7" class="d-flex justify-center align-center">
              <v-img :src="locked" height="500"></v-img>
            </v-col>
            <v-col class="d-flex justify-end pa-5" cols="5">
              <v-card
                class="rounded-xl"
                min-height="800"
                min-width="550"
                color="white"
                elevation="0"
              >
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="10"
                    class="d-flex justify-center text-h4 font-weight-thin-bold mt-15 pt-15"
                  >
                    Ooops!... Algo deu errado
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <div class="font-weight-light" style="color: gray">
                      Realize o login para acessar a página
                    </div>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <v-btn
                      class="rounded-xl"
                      size="50"
                      elevation="1"
                      color="black"
                      text="Fazer login"
                      min-width="350"
                      :loading="controller.loading.value"
                      @click="controller.irParaLogin"
                      type="submit"
                      block
                    ></v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import logoGoogle from "../../../assets/logoGoogle.png";
import locked from "../../../assets/locked.png";

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
