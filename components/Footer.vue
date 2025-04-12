<template>
  <div class="p-6">
    <footer class="bg-blue-300 text-black rounded-lg">
      <div class="container mx-auto px-5 py-16 flex flex-wrap">
        <div class="w-full md:w-1/4 flex flex-col items-start">
          <img
            src="/images/logo.svg"
            alt="Γιατρός Κοντά σας Logo"
            class="h-40 w-auto max-w-full object-contain brightness-[0] grayscale"
          />
        </div>

        <div class="w-full md:w-1/4 mt-8 md:mt-0">
          <h2 class="text-3xl font-medium mb-6">Giatroskontasas.gr</h2>
        </div>

        <div class="w-full md:w-1/2 flex flex-wrap justify-between">
          <div class="w-full md:w-1/4 mt-8 md:mt-0">
            <h3 class="font-medium text-lg mb-4">Σχετικά</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/network" class="hover:underline">Το Δίκτυο Γιατρών μας</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:underline">Άρθρα</NuxtLink></li>
              <li><NuxtLink to="/newsletter" class="hover:underline">Newsletter</NuxtLink></li>
            </ul>
          </div>

          <div class="w-full md:w-1/6 mt-8 md:mt-0">
            <h3 class="font-medium text-lg mb-4">Επικοινωνία</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:underline">Email</NuxtLink></li>
              <li><NuxtLink to="/" class="hover:underline">Τηλέφωνο</NuxtLink></li>
            </ul>
          </div>

          <div class="w-full md:w-1/6 mt-8 md:mt-0">
            <h3 class="font-medium text-lg mb-4">Social</h3>
            <ul class="space-y-2">
              <li><a href="#" target="_blank" class="hover:underline">Facebook</a></li>
              <li><a href="#" target="_blank" class="hover:underline">Instagram</a></li>
              <li><a href="#" target="_blank" class="hover:underline">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="container">
        <div class="border-b border-black"></div>

        <div class="mx-auto py-4 flex flex-wrap justify-between items-center">
          <p class="text-sm">Copyright © giatroskontasas</p>
          <NuxtLink to="/politiki-aporitou" class="text-sm hover:underline">Πολιτική Απορρήτου</NuxtLink>
          <a href="#" @click.prevent="scrollToTop" class="flex items-center text-sm hover:underline">
            Πίσω στην κορυφή
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
</script>
