<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="mx-auto px-6 py-8" max-width="400" min-width="400">
      <v-form
        :disabled="controller.loading.value"
        :readonly="controller.loading.value"
      >
        <h1 class="text-center mb-3">Crie uma conta</h1>
        <v-text-field
          class="mb-2"
          label="E-mail"
          variant="underlined"
          clearable
          :rules="[controller.regras.required, controller.regras.validEmail]"
          v-model="controller.email.value"
        ></v-text-field>

        <v-text-field
          label="Senha"
          placeholder="Informe sua senha"
          variant="underlined"
          clearable
          @click:append-inner="
            controller.showPassword.value = !controller.showPassword.value
          "
          :append-inner-icon="
            controller.showPassword.value ? 'mdi-eye' : 'mdi-eye-off'
          "
          :type="controller.showPassword.value ? 'text' : 'password'"
          :rules="[
            controller.regras.required,
            (v) =>
              (v && v.length >= 6) || 'A senha deve ter no mínimo 6 caracteres',
          ]"
          v-model="controller.password.value"
        ></v-text-field>

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
</template>

<script setup>
import logoGoogle from "../../../assets/logoGoogle.png";

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
