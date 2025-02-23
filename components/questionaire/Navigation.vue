<script setup lang="ts">
  const slides = defineModel<Record<string, any>[]>({ default: [] });
  const currentSlide = defineModel<number>("currentSlide", { default: 0 });
  const isSubmitted = defineModel<boolean>("isSubmitted");

  const isFieldValid = computed<boolean>(() => {
    const slide = slides.value[currentSlide.value];
    if (slide.required) {
      return slide.answer !== null && (Array.isArray(slide.answer) ? slide.answer.length > 0 : slide.answer.trim() !== "");
    }
    return true;
  });

  const nextSlide = () => {
    if (isFieldValid.value) {
      if (currentSlide.value < slides.value.length - 1) {
        currentSlide.value++;
      } else {
        isSubmitted.value = true;
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide.value > 0) {
      currentSlide.value--;
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      nextSlide();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown);
  });

  defineExpose({ nextSlide, isFieldValid });
</script>

<template>
  <div class="fixed bottom-10 right-10 flex justify-between mt-8 rounded-lg overflow-hidden">
    <button
      class="border-r-2 min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition"
      :class="{
        'opacity-50 pointer-events-none': currentSlide <= 0,
      }"
      :disabled="currentSlide <= 0"
      @click="prevSlide"
    >
      <UIcon name="i-heroicons-chevron-up" class="w-5 h-5" />
    </button>
    <button
      class="ml-auto min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition"
      :disabled="!isFieldValid"
      @click="nextSlide"
    >
      <div v-if="currentSlide === slides.length - 1" class="px-4">Submit</div>
      <UIcon v-else name="i-heroicons-chevron-down" class="w-5 h-5" />
    </button>
  </div>
</template>
