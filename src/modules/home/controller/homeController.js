import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const homeController = () => {
  const loading = ref(false);
  const router = useRouter();
  const auth = getAuth();

  const logout = async () => {
    try {
      loading.value = true;
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    logout,
  };
};

export { homeController };
