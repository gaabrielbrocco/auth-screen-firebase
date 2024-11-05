<template>
  <v-snackbar v-model="snackbar" timeout="3000">
    {{ snackbarMessage }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Fechar
      </v-btn>
    </template>
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
                      elevation="1s"
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

  <!-- <div class="d-flex justify-center align-center fill-height">
    <v-card class="mx-auto px-6 py-8" max-width="400" min-width="300">
      <v-form
        :disabled="controller.loading.value"
        :readonly="controller.loading.value"
      >

        <p v-if="controller.errMsg.value" class="text-red text-center">
          {{ controller.errMsg.value }}
        </p>

        <br />

        <v-divider class="mx-10"></v-divider>

        <div class="d-flex justify-center mt-3">
          <button @click="controller.signInWithGoogle">
            <v-avatar :image="logoGoogle"></v-avatar>
          </button>
        </div>

        <p class="text-center mt-5">
          Ainda não possui uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </v-form>
    </v-card>
  </div> -->
</template>

<script setup>
import logoGoogle from "../../../assets/logoGoogle.png";
import login from "../../../assets/login.png";
import imagem from "../../../assets/imagem.png";

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
