<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const isScrolled = ref(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled.value) {
      isScrolled.value = true;
    } else if (window.scrollY === 0 && isScrolled.value) {
      isScrolled.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
  <header
    id="header"
    :class="{
      'bg-white shadow-md': isScrolled,
      'bg-transparent': !isScrolled,
    }"
    class="px-4 lg:px-52 sticky top-0 z-50 transition-colors duration-300"
  >
    <nav class="flex items-center justify-between py-3">
      <NuxtLink to="/" class="fw-bold flex items-center">
        <img src="/images/logo.svg" alt="Γιατρός Κοντά σας Logo" class="h-12 w-auto max-w-full object-contain" />
      </NuxtLink>
      <div class="flex space-x-5 items-center">
        <NuxtLink to="/giatros" class="font-semibold cursor-pointer opacity-80 hover:opacity-100">Γιατροί</NuxtLink>
        <NuxtLink to="/polites" class="font-semibold cursor-pointer opacity-80 hover:opacity-100">Πολίτες</NuxtLink>
        <InterestDialog />
      </div>
    </nav>
  </header>
</template>
