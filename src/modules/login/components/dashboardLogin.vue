<template>
  <v-snackbar
    v-model="controller.snackbar.value"
    timeout="3000"
    color="red"
    location="top"
    class="mt-10"
    min-height="70"
  >
    <div
      class="d-flex justify-space-between align-center"
      style="font-size: 16px"
    >
      <div>{{ controller.snackbarMessage.value }}</div>
      <v-btn
        icon="mdi-close"
        variant="text"
        @click="controller.snackbar.value = false"
      >
      </v-btn>
    </div>
  </v-snackbar>
  <section :style="mobile ? 'padding: 10px 12px;' : 'padding: 65px 10px 80px;'">
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="8" sm="12">
        <v-card class="rounded-xl" min-height="785" color="#E9E9E9">
          <v-row>
            <v-col cols="12" lg="7" class="d-flex justify-center align-center">
              <v-img :src="login" :height="mobile ? 180 : 500"></v-img>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" lg="5" sm="12">
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
                    :style="mobile ? 'font-size: 35px' : 'font-size: 40px'"
                  >
                    Bem-vindo de volta!
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
                    Preencha seus dados para realizar o login
                  </v-col>
                </v-row>

                <v-row
                  :class="
                    mobile
                      ? 'd-flex justify-center mt-2'
                      : 'd-flex justify-center mt-10'
                  "
                >
                  <v-col
                    cols="9"
                    :class="
                      mobile
                        ? 'd-flex justify-center pa-0'
                        : 'd-flex justify-center'
                    "
                  >
                    <v-text-field
                      label="E-mail"
                      variant="underlined"
                      clearable
                      :rules="[
                        controller.regras.required,
                        controller.regras.validEmail,
                      ]"
                      v-model="controller.email.value"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-center">
                  <v-col
                    cols="9"
                    :class="
                      mobile
                        ? 'd-flex justify-center pa-0'
                        : 'd-flex justify-center'
                    "
                  >
                    <v-text-field
                      label="Senha"
                      placeholder="Informe sua senha"
                      variant="underlined"
                      clearable
                      @click:append-inner="
                        controller.showPassword.value =
                          !controller.showPassword.value
                      "
                      :append-inner-icon="
                        controller.showPassword.value
                          ? 'mdi-eye'
                          : 'mdi-eye-off'
                      "
                      :type="
                        controller.showPassword.value ? 'text' : 'password'
                      "
                      :rules="[
                        controller.regras.required,
                        (v) =>
                          (v && v.length >= 6) ||
                          'A senha deve ter no mínimo 6 caracteres',
                      ]"
                      v-model="controller.password.value"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center mt-10">
                  <v-col cols="9" class="d-flex justify-center">
                    <v-btn
                      class="rounded-xl"
                      size="50"
                      elevation="1"
                      color="black"
                      text="Entrar"
                      :min-width="mobile ? 300 : 350"
                      :loading="controller.loading.value"
                      :disabled="controller.loading.value"
                      @click="controller.login"
                      block
                    ></v-btn>
                  </v-col>
                </v-row>
                <v-row v-if="!mobile" class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <v-btn
                      class="rounded-xl text-none"
                      size="50"
                      elevation="1"
                      color="#E9E9E9"
                      min-width="350"
                      :loading="controller.loading.value"
                      @click="controller.signInWithGoogle"
                      block
                    >
                      <v-avatar
                        class="me-2"
                        size="24"
                        :image="logoGoogle"
                      ></v-avatar>
                      Entrar com Google
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row v-if="mobile" class="d-flex justify-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn
                      class="rounded-xl text-none"
                      elevation="1"
                      size="50"
                      color="#E9E9E9"
                      min-width="300"
                      :loading="controller.loading.value"
                      @click="controller.signInWithGoogle"
                      icon
                      variant="text"
                    >
                      <v-avatar
                        class="me-2"
                        size="30"
                        :image="logoGoogle"
                      ></v-avatar>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row v-if="!mobile" class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <div class="font-weight-light" style="color: gray">
                      Ainda não possui uma conta?
                      <router-link
                        to="/cadastro"
                        class="ml-1"
                        style="color: black; text-decoration: underline"
                      >
                        Cadastre-se
                      </router-link>
                    </div>
                  </v-col>
                </v-row>
                <v-row v-if="mobile" class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <div class="font-weight-light" style="color: gray">
                      Ainda não possui uma conta?
                    </div>
                  </v-col>
                </v-row>
                <v-row v-if="mobile" class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <router-link
                      to="/cadastro"
                      style="color: black; text-decoration: underline"
                    >
                      Cadastre-se
                    </router-link>
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
import login from "../../../assets/login.png";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
