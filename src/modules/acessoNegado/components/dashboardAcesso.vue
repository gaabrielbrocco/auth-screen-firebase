<template>
  <section :style="mobile ? 'padding: 10px 12px;' : 'padding: 65px 10px 80px;'">
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="8" sm="12">
        <v-card class="rounded-xl" min-height="785" color="#E9E9E9">
          <v-row>
            <v-col cols="12" lg="7" class="d-flex justify-center align-center">
              <v-img :src="locked" :height="mobile ? 180 : 500"></v-img>
            </v-col>
            <v-col class="d-flex justify-end pa-5" cols="12" lg="5" sm="12">
              <v-card
                class="rounded-xl"
                :min-height="mobile ? 570 : 800"
                :style="
                  mobile
                    ? 'max-width: 340px; width: 100%;'
                    : 'min-width: 550px;'
                "
                color="white"
                elevation="0"
              >
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="12"
                    :class="
                      mobile
                        ? 'd-flex justify-center font-weight-thin-bold mt-5'
                        : 'd-flex justify-center font-weight-thin-bold mt-15 pt-15'
                    "
                    :style="mobile ? 'font-size: 25px' : 'font-size: 40px'"
                  >
                    Ooops!... Algo deu errado
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-center">
                  <v-col
                    cols="10"
                    class="d-flex justify-center font-weight-light"
                    :style="
                      mobile
                        ? 'color: gray; font-size: 15px'
                        : 'color: gray; font-size: 18px'
                    "
                  >
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
                      :min-width="mobile ? 300 : 350"
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
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
