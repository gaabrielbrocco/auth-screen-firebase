import { onMounted, ref } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const homeController = () => {
  const loading = ref(false);
  const router = useRouter();
  let auth = getAuth();
  const isLoggedIn = ref(false);
  const dadosUsuario = ref("");

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
      dadosUsuario.value = user;
    });
  });

  const logout = async () => {
    try {
      loading.value = true;
      await signOut(auth);
      router.push("/login");
      isLoggedIn.value = false;
      dadosUsuario.value = "";
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    logout,
    dadosUsuario,
  };
};

export { homeController };
