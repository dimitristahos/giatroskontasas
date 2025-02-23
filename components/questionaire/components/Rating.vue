<script setup>
  const props = defineProps({
    currentSlide: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmits(["submit"]);
  const slides = defineModel();

  const submit = (option) => {
    slides.value[props.currentSlide].answer = option;
    setTimeout(() => emit("submit"), 600);
  };

  const handleKeydown = (event) => {
    const index = lettersToNumber(event.key.toUpperCase()) - 1;
    if (index >= 0 && index < slides.value[props.currentSlide].options.length) {
      submit(slides.value[props.currentSlide].options[index]);
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
</script>

<template>
  <div class="flex flex-col space-y-2 max-w-xs">
    <UButton
      v-for="(option, i) in slides[currentSlide].options"
      :key="option"
      :class="{
        'bg-gray-800 bg-opacity-40 animate-[pulse_0.25s_ease_2]': slides[currentSlide].answer === option,
        'bg-gray-800 bg-opacity-20 ': slides[currentSlide].answer !== option,
      }"
      class="flex-1 py-3 rounded-md transition hover:bg-opacity-40 border-2 border-gray-700 text-black"
      @click="submit(option)"
    >
      <div
        class="border border-gray-700 flex items-center justify-center w-6 h-6 mr-2 rounded-sm"
        :class="{
          'bg-black text-white': slides[currentSlide].answer === option,
          'bg-gray-400': slides[currentSlide].answer !== option,
        }"
      >
        {{ numberToLetters(i + 1) }}
      </div>

      {{ option }}

      <div v-if="slides[currentSlide].answer === option" class="ms-auto">
        <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.757 1.8a.75.75 0 0 1 .06 1.06l-8.28 9.28a.75.75 0 0 1-1.09.03L1.212 7.936a.75.75 0 1 1 1.06-1.06l3.674 3.674 7.752-8.688a.75.75 0 0 1 1.06-.06Z"
          />
        </svg>
      </div>
    </UButton>
  </div>
</template>
