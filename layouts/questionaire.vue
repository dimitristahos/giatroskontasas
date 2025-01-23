<script setup>
  useHead({
    titleTemplate: "%s - Γιατρός Κοντά σας",
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        crossorigin: "",
      },
    ],
  });
</script>

<template>
  <div class="min-h-screen bg-orange-300">
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
  body {
    font-family: "Inter", sans-serif;
  }

  body {
    @apply bg-white text-neutral-900;
  }
</style>
