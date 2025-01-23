<script setup>
  import text from "@/components/questionaire/components/Text.vue";
  import rating from "@/components/questionaire/components/Rating.vue";
  import multipleChoice from "@/components/questionaire/components/MultipleChoice.vue";

  definePageMeta({
    layout: "questionaire",
  });

  const currentSlide = ref(0);
  const isSubmitted = ref(false);

  const components = {
    text,
    rating,
    multipleChoice,
  };

  const slides = ref([
    {
      title: "Όνομα",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Επώνυμο",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Πόσες φορές την εβδομάδα χρειάζεστε περίθαλψη;",
      type: "rating",
      options: ["1", "2", "3", "4", "5"],
      required: true,
      answer: null,
    },
    {
      title: "Πώς μάθατε για εμάς",
      type: "multipleChoice",
      options: ["Google", "Facebook", "Instagram", "Απο φίλο"],
      required: false,
      answer: [],
    },
  ]);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-4">
    <QuestionaireProgress :currentSlide="currentSlide" :slides="slides" />
    <div v-if="!isSubmitted" class="w-full max-w-3xl overflow-hidden">
      <div class="p-8 space-y-6">
        <transition name="slide-bottom" mode="out-in" class="relative">
          <div :key="currentSlide" class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 tracking-tight">
              {{ currentSlide + 1 }}. {{ slides[currentSlide].title }}
            </h2>

            <component :is="components[slides[currentSlide].type]" v-model="slides" :currentSlide="currentSlide" />
          </div>
        </transition>
      </div>
    </div>

    <QuestionaireThankYou v-else />

    <QuestionaireNavigation v-model="slides" v-model:currentSlide="currentSlide" v-model:isSubmitted="isSubmitted" />
  </div>
</template>

<style scoped>
  .slide-bottom-enter-active,
  .slide-bottom-leave-active {
    transition: all 0.3s ease;
  }
  .slide-bottom-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }
  .slide-bottom-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
