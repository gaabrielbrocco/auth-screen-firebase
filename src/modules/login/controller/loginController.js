import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const loginController = () => {
  const email = ref("");
  const password = ref("");
  const errMsg = ref("");
  const loading = ref(false);
  const showPassword = ref(false);
  const snackbar = ref(false);
  const snackbarMessage = ref("");
  const router = useRouter();
  const auth = getAuth();

  const regras = {
    required: (v) => (v ? true : "Campo obrigatório"),
    validEmail: (v) => (v && isValidEmail(v) ? true : "E-mail inválido"),
  };

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const login = async () => {
    loading.value = true;
    errMsg.value = "";

    const errorMessages = {
      "auth/invalid-email": "E-mail inválido!",
      "auth/user-not-found": "Usuário não encontrado!",
      "auth/wrong-password": "Senha incorreta!",
    };

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push("/");
    } catch (error) {
      snackbarMessage.value =
        errorMessages[error.code] || "E-mail ou senha incorretos!";
      snackbar.value = true;
    } finally {
      loading.value = false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      loading.value = true;

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      router.push("/");
    } catch (error) {
      snackbarMessage.value = "Erro ao fazer o login!";
      snackbar.value = true;
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    password,
    errMsg,
    loading,
    snackbar,
    snackbarMessage,
    showPassword,
    regras,
    isValidEmail,
    login,
    signInWithGoogle,
  };
};

export { loginController };
