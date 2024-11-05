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

      alert("Usuário criado com sucesso!");

      router.push("/");
    } catch (error) {
      alert(errorMessages[error.code] || "Erro ao criar o usuário!");
    } finally {
      loading.value = false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      loading.value = true;

      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);

      alert("Usuário criado com sucesso!");

      router.push("/");
    } catch (error) {
      alert(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    password,
    loading,
    showPassword,
    regras,
    register,
    signInWithGoogle,
  };
};

export { registerController };
