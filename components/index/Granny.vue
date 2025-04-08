<template>
  <section class="mb-5 container">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <h3 class="text-lg font-medium text-green-900">Γιατρός Κοντά Σας</h3>
        <h2 class="text-2xl lg:text-4xl font-semibold text-gray-900 leading-relaxed max-w-[500px] mb-3 lg:mb-8">
          Ο δικός σας σύμμαχος στην υγεία και τη φροντίδα
        </h2>
        <p class="max-w-[450px] leading-relaxed">
          Αυτός που κρατά τα χέρια μας στις στιγμές του φόβου και μας καθοδηγεί προς την υγεία και την ευτυχία.
        </p>
      </div>
      <div class="mt-10 lg:mt-0 ms-auto relative w-[600px] h-[630px]">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg border-s-4 border-t-4 border-s-[#5E7B6F] border-t-[#5E7B6F]"
        >
          <source src="/public/videos/videogran.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>
