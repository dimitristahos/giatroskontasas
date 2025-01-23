<script setup>
  defineProps({
    currentSlide: {
      type: Number,
      required: true,
    },
  });

  const slides = defineModel();
</script>

<template>
  <div class="flex justify-between space-x-2">
    <button
      v-for="option in slides[currentSlide].options"
      :key="option"
      @click="slides[currentSlide].answer = option"
      :class="{
        'bg-orange-500 text-white': slides[currentSlide].answer === option,
        'bg-black text-white': slides[currentSlide].answer !== option,
      }"
      class="flex-1 py-3 rounded-lg transition hover:bg-gray-700"
    >
      {{ option }}
    </button>
  </div>
</template>
