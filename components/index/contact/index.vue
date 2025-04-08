<script setup lang="ts">
  const submitSuccess = ref<boolean>(false);
</script>

<template>
  <div id="interest-form">
    <!-- Contact Us -->
    <div class="relative bg-[url('/public/images/dr-form-bg.jpg')] bg-cover bg-center bg-black/50 bg-blend-multiply">
      <div class="py-10 container">
        <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div class="mt-4 md:mb-12 max-w-2xl">
              <h1 class="mb-4 font-semibold text-neutral-100 text-4xl lg:text-5xl">Είμαστε εδώ για να σας βοηθήσουμε</h1>
              <p class="text-neutral-200">
                Ενδιαφέρεστε για να συμμετέχετε στην ομάδα μας ή να εξυπηρετηθείτε; Συμπληρώστε τα στοιχεία σας και βοηθήστε
                μας να προσαρμοσίμουμε τις υπηρεσίες μας στις ανάγκες σας.
              </p>
            </div>
          </div>

          <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto min-h-[580px]">
            <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
              <IndexContactForm v-if="!submitSuccess" v-model="submitSuccess" />

              <div v-else class="inset-0 z-50 flex items-center justify-center">
                <div class="p-8 text-center max-w-md w-full">
                  <UIcon name="i-heroicons-check-circle" class="mx-auto text-green-500 mb-4" size="64" />
                  <h2 class="text-2xl font-bold text-gray-800 mb-4">Ευχαριστούμε!</h2>
                  <p class="text-gray-600 mb-6">Λάβαμε την μυνημά σας. Θα επιστρέψουμε σύντομα.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
