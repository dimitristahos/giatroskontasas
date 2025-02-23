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
  <div class="flex flex-col space-y-2 max-w-xs">
    <div>
      {{ slides[currentSlide].min }}{{ slides[currentSlide].appendValue }} ~ {{ slides[currentSlide].answer
      }}{{ slides[currentSlide].appendValue }}
    </div>

    <div class="border-2 border-gray-700 p-4 rounded-md">
      <URange
        v-model="slides[currentSlide].answer"
        :min="slides[currentSlide].min"
        :max="slides[currentSlide].max"
        :step="10"
      />
    </div>
  </div>
</template>
