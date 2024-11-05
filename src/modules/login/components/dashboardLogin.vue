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
  <section style="padding: 90px 10px 80px">
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card class="rounded-xl" min-height="800" color="#E9E9E9">
          <v-row>
            <v-col cols="7" class="d-flex justify-center align-center">
              <v-img :src="login" height="500"></v-img>
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
                    Seja bem-vindo de volta!
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="10"
                    class="d-flex justify-center font-weight-light"
                    style="color: gray; font-size: 18px"
                  >
                    Por favor, preencha seus dados
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-center mt-10">
                  <v-col cols="9" class="d-flex justify-center">
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

                <v-row class="d-flex justify-center mt-1">
                  <v-col cols="9" class="d-flex justify-center">
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
                      min-width="350"
                      :loading="controller.loading.value"
                      :disabled="controller.loading.value"
                      @click="controller.login"
                      type="submit"
                      block
                    ></v-btn>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <v-btn
                      class="rounded-xl text-none"
                      size="50"
                      elevation="1"
                      color="#E9E9E9"
                      min-width="350"
                      :loading="controller.loading.value"
                      @click="controller.signInWithGoogle"
                      type="submit"
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

                <v-row class="d-flex justify-center">
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

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
