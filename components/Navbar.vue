<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0 && !isScrolled.value) {
    isScrolled.value = true;
  } else if (window.scrollY === 0 && isScrolled.value) {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
        <img
          src="/images/logo.svg"
          alt="Γιατρός Κοντά σας Logo"
          class="h-12 w-auto max-w-full object-contain"
        />
      </NuxtLink>
      <div class="flex space-x-5">
        <NuxtLink
          to="/"
          class="cursor-pointer group relative inline-flex h-10 px-5 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
        >
          <div
            class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]"
          >
            Ενδιαφέρομαι
          </div>
          <div
            class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-950 transition duration-500 group-hover:translate-y-0"
          >
            <span
              class="text-neutral-950 absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"
            ></span>
            <span class="z-10">Ενδιαφέρομαι</span>
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
