<script setup lang="ts">
  import text from "@/components/questionaire/components/Text.vue";
  import rating from "@/components/questionaire/components/Rating.vue";
  import multipleChoice from "@/components/questionaire/components/MultipleChoice.vue";
  import slider from "@/components/questionaire/components/Slider.vue";

  definePageMeta({
    layout: "questionaire",
  });

  const currentSlide = ref<number>(0);
  const isSubmitted = ref(false);
  const navigationRef = ref();

  const components: any = {
    text,
    rating,
    multipleChoice,
    slider,
  };

  const slides = ref([
    {
      title: "Ονοματεπώνυμο",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Email",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Τηλέφωνο",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Ειδικότητα",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Έτος ειδικότητας",
      type: "text",
      required: true,
      answer: null,
    },
    {
      title: "Νοσοκομείο/Κέντρο Υγείας όπου εργάζομαι",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Επιθυμητό καθαρό κέρδος ανά επίσκεψη",
      type: "slider",
      min: 20,
      max: 80,
      appendValue: "€",
      answer: 30,
    },
    {
      title: "Ποιες ημέρες είστε διαθέσιμος/η για επισκέψεις;",
      type: "multipleChoice",
      options: ["Καθημερινές", "Σαββατοκύριακα"],
      required: true,
      answer: [],
    },
    {
      title: "Μέσο Μετακίνησης",
      type: "multipleChoice",
      options: ["Αυτοκίνητο", "Μηχανάκι", "Δεν διαθέτω μέσο μετακίνησης"],
      required: true,
      answer: [],
    },
    {
      title: "Είστε διαθέσιμος/η για έκτακτα περιστατικά εκτός προγραμματισμένων ραντεβού;",
      type: "rating",
      options: ["Ναι", "Όχι"],
      required: true,
      answer: "",
    },
    {
      title: "Πώς προτιμάτε να επικοινωνείτε με ασθενείς;",
      type: "multipleChoice",
      options: ["Τηλεφωνικά", "Μέσω email", "Μέσω μηνυμάτων"],
      required: true,
      answer: [],
    },
    {
      title: "Ποιες υπηρεσίες προτιμάτε να παρέχετε;",
      type: "multipleChoice",
      options: ["Κατ’ οίκον επισκέψεις", "Τηλεϊατρική (online ραντεβού)"],
      required: true,
      answer: [],
    },
    {
      title: "Σε πόσο χρόνο μπορείτε να αναλάβετε ένα νέο περιστατικό;",
      type: "rating",
      options: ["Άμεσα (μέσα σε 1 ώρα)", "Σε λίγες ώρες", "Εντός της ημέρας", "Εντός 2-3 ημερών"],
      required: true,
      answer: "",
    },
    {
      title: "Μπορείτε να παρέχετε ηλεκτρονική συνταγογράφηση;",
      type: "rating",
      options: ["Ναι", "Όχι"],
      required: true,
      answer: "",
    },
  ]);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-4">
    <QuestionaireProgress :current-slide="currentSlide" :slides="slides" />
    <div v-if="!isSubmitted" class="w-full max-w-3xl overflow-hidden">
      <div class="p-8 space-y-6">
        <transition name="slide-bottom" mode="out-in" class="relative">
          <div :key="currentSlide" class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 tracking-tight">
              {{ currentSlide + 1 }}. {{ slides[currentSlide].title }}
            </h2>

            <component
              :is="components[slides[currentSlide].type]"
              v-model="slides"
              :current-slide="currentSlide"
              @submit="navigationRef?.nextSlide"
            />
            <UButton :disabled="!navigationRef?.isFieldValid" class="me-3" @click="navigationRef?.nextSlide">OK</UButton>
            <small> Πατήστε <b>Enter ↵</b> </small>
          </div>
        </transition>
      </div>
    </div>

    <QuestionaireThankYou v-else />

    <QuestionaireNavigation
      ref="navigationRef"
      v-model="slides"
      v-model:current-slide="currentSlide"
      v-model:is-submitted="isSubmitted"
    />
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
