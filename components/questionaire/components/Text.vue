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
  <input
    v-model="slides[currentSlide].answer"
    type="text"
    placeholder="Δώστε την απάντηση σας"
    style="box-shadow: none !important"
    class="w-full text-4xl bg-transparent px-0 py-3 border-0 border-b-2 border-black outline-none focus:border-orange-500 transition"
  />
</template>
