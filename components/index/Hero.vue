<template>
  <div class="relative min-h-[60vh] lg:min-h-[80vh] flex items-center overflow-hidden">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source
        src="/videos/0-02-05-a80b481efbd1829300e26e913c82b8a14d26689a6dc6a84497e2c9ac912fb7df_1dc6e94e4c2b2a.mp4"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

    <!-- Content -->
    <div class="relative z-20 flex flex-col lg:flex-row justify-between lg:items-center container">
      <!-- Left Section -->
      <div class="lg:w-1/2 lg:text-left">
        <h1 class="text-3xl lg:text-6xl font-semibold text-white !leading-tight mb-5 lg:mb-0">
          Ο προσωπικός σας <br >
          γιατρός, πάντα κοντά σας.
        </h1>
        <p class="text-xl text-gray-200 mb-8 lg:leading-relaxed max-w-[550px] mt-6">
          Η υγεία σας είναι προτεραιότητά μας. Βρείτε Γιατρούς που νοιάζονται, κλείστε ραντεβού εύκολα και λάβετε τη φροντίδα
          που αξίζετε.
        </p>
        <div class="flex gap-4 mb-12 lg:mb-0">
          <a
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
              />
              <span class="z-10">Ενδιαφέρομαι</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
