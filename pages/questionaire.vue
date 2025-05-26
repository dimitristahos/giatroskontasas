<script setup lang="ts">
  import text from "@/components/questionaire/components/Text.vue";
  import rating from "@/components/questionaire/components/Rating.vue";
  import multipleChoice from "@/components/questionaire/components/MultipleChoice.vue";
  import slider from "@/components/questionaire/components/Slider.vue";
  import axios from "axios";
  import qs from "qs";

  definePageMeta({
    layout: "questionaire",
  });

  const $route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  const env = runtimeConfig.public;

  const { data } = await axios.post(
    env.onlineFormUrl,
    qs.stringify({
      action: "questionaire_guid",
      guid: $route.query.id,
    })
  );

  if (data.success === false) {
    await navigateTo("/");
  }

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
      name: "fullname",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Email",
      name: "email",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Τηλέφωνο",
      name: "phone",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Ειδικότητα",
      name: "speciality",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Έτος ειδικότητας",
      name: "year_of_specialty",
      type: "text",
      required: true,
      answer: null,
    },
    {
      title: "Νοσοκομείο/Κέντρο Υγείας όπου εργάζομαι",
      name: "clinic",
      type: "text",
      required: true,
      answer: "",
    },
    {
      title: "Επιθυμητό καθαρό κέρδος ανά επίσκεψη",
      name: "price",
      type: "slider",
      min: 20,
      max: 80,
      appendValue: "€",
      answer: 30,
    },
    {
      title: "Ποιες ημέρες είστε διαθέσιμος/η για επισκέψεις;",
      name: "available_days",
      type: "multipleChoice",
      options: ["Καθημερινές", "Σαββατοκύριακα"],
      required: true,
      answer: [],
    },
    {
      title: "Μέσο Μετακίνησης",
      name: "transport",
      type: "multipleChoice",
      options: ["Αυτοκίνητο", "Μηχανάκι", "Δεν διαθέτω μέσο μετακίνησης"],
      required: true,
      answer: [],
    },
    {
      title: "Είστε διαθέσιμος/η για έκτακτα περιστατικά εκτός προγραμματισμένων ραντεβού;",
      name: "available_outside",
      type: "rating",
      options: ["Ναι", "Όχι"],
      required: true,
      answer: "",
    },
    {
      title: "Πώς προτιμάτε να επικοινωνείτε με ασθενείς;",
      name: "communication",
      type: "multipleChoice",
      options: ["Τηλεφωνικά", "Μέσω email", "Μέσω μηνυμάτων"],
      required: true,
      answer: [],
    },
    {
      title: "Ποιες υπηρεσίες προτιμάτε να παρέχετε;",
      name: "services_to_offer",
      type: "multipleChoice",
      options: ["Κατ’ οίκον επισκέψεις", "Τηλεϊατρική (online ραντεβού)"],
      required: true,
      answer: [],
    },
    {
      title: "Σε πόσο χρόνο μπορείτε να αναλάβετε ένα νέο περιστατικό;",
      name: "available_for_new_patient",
      type: "rating",
      options: ["Άμεσα (μέσα σε 1 ώρα)", "Σε λίγες ώρες", "Εντός της ημέρας", "Εντός 2-3 ημερών"],
      required: true,
      answer: "",
    },
    {
      title: "Μπορείτε να παρέχετε ηλεκτρονική συνταγογράφηση;",
      name: "electronic_perscription",
      type: "rating",
      options: ["Ναι", "Όχι"],
      required: true,
      answer: "",
    },
  ]);

  onMounted(() => {
    if (!$route.query.id) {
      window.location.href = "/";
    }
  });
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

    <QuestionaireThankYou v-else :slides="slides" :is-submitted="isSubmitted" />

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
