<script setup lang="ts">
  import { defineModel } from "vue";
  import DoctorForm from "./Doctor.vue";
  import CitizenForm from "./Citizen.vue";

  const components: Record<string, Component> = {
    DoctorForm,
    CitizenForm,
  };

  const items = [
    {
      key: "DoctorForm",
      label: "Γιατροί",
    },
    {
      key: "CitizenForm",
      label: "Πολίτες",
    },
  ];

  const submitSuccess = defineModel<boolean>();
</script>

<template>
  <UTabs :items="items" class="w-full">
    <template #item="{ item }">
      <component :is="components[item.key]" v-model="submitSuccess" />
    </template>
  </UTabs>
</template>
