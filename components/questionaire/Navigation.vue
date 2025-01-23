<script setup>
  const slides = defineModel();
  const currentSlide = defineModel("currentSlide");
  const isSubmitted = defineModel("isSubmitted");

  const validation = () => {
    const slide = slides.value[currentSlide.value];
    if (slide.required) {
      return slide.answer !== null && (Array.isArray(slide.answer) ? slide.answer.length > 0 : slide.answer.trim() !== "");
    }
    return true;
  };

  const nextSlide = () => {
    if (validation()) {
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
</script>

<template>
  <div class="fixed bottom-10 right-10 flex justify-between mt-8 rounded-lg overflow-hidden">
    <button
      @click="prevSlide"
      class="border-r-2 min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition"
      :class="{
        'opacity-50 pointer-events-none': currentSlide <= 0,
      }"
      :disabled="currentSlide <= 0"
    >
      <UIcon name="i-heroicons-chevron-up" class="w-5 h-5" />
    </button>
    <button
      @click="nextSlide"
      class="ml-auto min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition"
    >
      <div class="px-4" v-if="currentSlide === slides.length - 1">Submit</div>
      <UIcon v-else name="i-heroicons-chevron-down" class="w-5 h-5" />
    </button>
  </div>
</template>
