<script setup>
  const route = useRoute();

  const isScrolled = ref(false);

  const isHomePage = computed(() => route.path === "/");

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
      'backdrop-blur-md bg-white/60 shadow-sm': isScrolled,
      'bg-transparent': !isScrolled,
      fixed: isHomePage,
      sticky: !isHomePage,
    }"
    class="top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <nav class="flex items-center justify-between py-3 container">
      <NuxtLink to="/" class="fw-bold flex items-center">
        <img
          src="/images/logo.svg"
          alt="Γιατρός Κοντά σας Logo"
          class="h-12 w-auto max-w-full object-contain"
          :class="{
            'brightness-[9] grayscale': !isScrolled && isHomePage,
          }"
        />
      </NuxtLink>
      <div class="flex space-x-5 items-center">
        <NuxtLink
          to="/giatros"
          class="font-semibold cursor-pointer opacity-80 hover:opacity-100"
          :class="{
            'text-white': !isScrolled && isHomePage,
          }"
          >Γιατροί</NuxtLink
        >
        <NuxtLink
          to="/polites"
          class="font-semibold cursor-pointer opacity-80 hover:opacity-100"
          :class="{
            'text-white': !isScrolled && isHomePage,
          }"
          >Πολίτες</NuxtLink
        >
        <InterestDialog />
      </div>
    </nav>
  </header>
</template>
