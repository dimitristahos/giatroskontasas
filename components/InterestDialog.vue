<script setup lang="ts">
  const isOpen = ref<boolean>(false);
  const submitSuccess = ref<boolean>(false);
</script>

<template>
  <div>
    <UButton class="px-4" label="Ενδιαφέρομαι" color="blue" @click="isOpen = true" />

    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Είμαστε εδώ για να σας βοηθήσουμε
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <IndexContactForm v-if="!submitSuccess" v-model="submitSuccess" />
      </UCard>
    </UModal>
  </div>
</template>
