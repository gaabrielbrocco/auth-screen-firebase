import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const registerController = () => {
  const email = ref("");
  const password = ref("");
  const loading = ref(false);
  const showPassword = ref(false);
  const snackbar = ref(false);
  const snackbarSucess = ref(false);
  const snackbarMessage = ref("");
  const regras = {
    required: (v) => !!v || "Obrigatório",
    validEmail: (v) => {
      if (v.length > 0) {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || "E-mail inválido";
      }

      return true;
    },
  };
  const router = useRouter();

  const register = async () => {
    const errorMessages = {
      "auth/email-already-in-use": "E-mail já está em uso!",
      "auth/invalid-email": "E-mail inválido!",
      "auth/operation-not-allowed": "Operação não permitida!",
      "auth/weak-password": "A senha é muito fraca!",
    };

    try {
      loading.value = true;

      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email.value, password.value);

      snackbarMessage.value = "Usuário criado com sucesso!";
      snackbarSucess.value = true;

      router.push("/");
    } catch (error) {
      snackbarMessage.value =
        errorMessages[error.code] || "Erro ao registrar o usuário!";
      snackbar.value = true;
    } finally {
      loading.value = false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      loading.value = true;

      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);

      snackbarMessage.value = "Usuário criado com sucesso!";
      snackbarSucess.value = true;

      router.push("/");
    } catch (error) {
      snackbarMessage.value = "Erro ao registrar o usuário!";
      snackbar.value = true;
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    password,
    loading,
    showPassword,
    snackbar,
    snackbarSucess,
    snackbarMessage,
    regras,
    register,
    signInWithGoogle,
  };
};

export { registerController };
