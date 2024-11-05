import { ref } from "vue";
import { useRouter } from "vue-router";

const acessoNegadoController = () => {
  const router = useRouter();
  const loading = ref(false);

  const irParaLogin = async () => {
    loading.value = true;
    try {
      await router.push("/login");
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      loading.value = false;
    }
  };

  return { router, loading, irParaLogin };
};

export { acessoNegadoController };
