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
  <v-snackbar
    v-model="controller.snackbarSucess.value"
    timeout="3000"
    color="green"
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
        @click="controller.snackbarSucess.value = false"
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
              <v-img :src="hello" height="500"></v-img>
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
                    Olá, seja bem-vindo!
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="10"
                    class="d-flex justify-center font-weight-light"
                    style="color: gray; font-size: 18px"
                  >
                    Por favor, preencha seus dados para criar a conta
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

                <v-row class="d-flex justify-center">
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
                      text="Cadastrar"
                      min-width="350"
                      :loading="controller.loading.value"
                      :disabled="controller.loading.value"
                      @click="controller.register"
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
                      Cadastrar com Google
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-center">
                  <v-col cols="9" class="d-flex justify-center">
                    <div class="font-weight-light" style="color: gray">
                      Já possui uma conta?
                      <router-link
                        to="/login"
                        class="ml-1"
                        style="color: black; text-decoration: underline"
                      >
                        Login
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
import hello from "../../../assets/hello.png";

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>

<!-- <template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="mx-auto px-6 py-8" max-width="400" min-width="400">
      <v-form
        :disabled="controller.loading.value"
        :readonly="controller.loading.value"
      >

        <br />

        <v-btn
          color="#5865f2"
          size="large"
          type="submit"
          variant="elevated"
          block
          :loading="controller.loading.value"
          :disabled="
            !controller.password.value ||
            controller.password.value.length < 6 ||
            controller.loading.value
          "
          @click="controller.register"
        >
          Cadastrar
        </v-btn>

        <br />

        <v-divider class="mx-10"></v-divider>

        <div class="d-flex justify-center mt-3">
          <button @click="controller.signInWithGoogle">
            <v-avatar :image="logoGoogle"></v-avatar>
          </button>
        </div>

        <p class="text-center mt-5">
          Já possui uma conta? <a href="/login">Login</a>
        </p>
      </v-form>
    </v-card>
  </div>
</template> -->
