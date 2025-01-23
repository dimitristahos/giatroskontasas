<script setup>
  const props = defineProps({
    currentSlide: {
      type: Number,
      required: true,
    },
  });

  const slides = defineModel();

  const toggleMultiChoice = (option) => {
    const currentAnswer = slides.value[props.currentSlide].answer;
    const newAnswer = currentAnswer.includes(option)
      ? currentAnswer.filter((item) => item !== option)
      : [...currentAnswer, option];
    slides.value[props.currentSlide].answer = newAnswer;
  };
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <button
      v-for="option in slides[currentSlide].options"
      :key="option"
      @click="toggleMultiChoice(option)"
      :class="{
        'bg-orange-500 text-white': slides[currentSlide].answer.includes(option),
        'bg-black text-white': !slides[currentSlide].answer.includes(option),
      }"
      class="py-3 rounded-lg transition hover:bg-gray-700"
    >
      {{ option }}
    </button>
  </div>
</template>
