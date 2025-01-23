<script setup>
  const props = defineProps({
    currentSlide: {
      type: Number,
      required: true,
    },
    slides: {
      type: Array,
      required: true,
    },
  });

  const progress = computed(() => ((props.currentSlide + 1) / props.slides.length) * 100);
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-1.5 bg-gray-200">
    <div class="h-full bg-orange-500 transition-all duration-300" :style="{ width: `${progress}%` }"></div>
  </div>
</template>
