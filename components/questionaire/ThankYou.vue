<script setup lang="ts">
  import axios from "axios";
  import qs from "qs";

  const props = defineProps<{
    slides: Record<string, any>[];
    isSubmitted: boolean;
  }>();

  const $route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const env = runtimeConfig.public;

  const loading = ref(false);
  const submitted = ref(false);

  const submit = async () => {
    if (submitted.value) return;
    loading.value = true;
    try {
      const slidesObject = props.slides.reduce((acc, slide) => {
        acc[slide.name] = slide.answer;
        return acc;
      }, {});

      await axios.post(
        env.onlineFormUrl,
        qs.stringify({
          action: "questionaire",
          guid: $route.query.id,
          ...slidesObject,
        })
      );

      submitted.value = true;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(async () => await submit());
</script>
<template>
  <div class="text-center p-12">
    <h2 class="text-3xl font-bold text-gray-800 mt-4">Ευχαριστούμε!</h2>
  </div>
</template>
