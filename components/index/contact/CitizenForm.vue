<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import { z } from "zod";
  import axios from "axios";
  import qs from "qs";

  type Schema = z.output<typeof schema>;

  const runtimeConfig = useRuntimeConfig();
  const env = runtimeConfig.public;

  const schema = z.object({
    firstName: z.string().min(3, "Must be at least 3 characters"),
    lastName: z.string().min(3, "Must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Must be at least 10 characters"),
    message: z.string().optional(),
  });

  const state = reactive({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
  });

  const token = ref();
  const loading = ref(false);

  const submit = async (event: FormSubmitEvent<Schema>) => {
    loading.value = true;
    try {
      const response = await axios.post(
        env.onlineFormUrl,
        qs.stringify({
          action: "insert_online_form",
          type: "politis",
          ...event.data,
          cf_turnstile_response: token.value,
        })
      );

      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const showTurnstile = ref(false);

  watch(state, () => {
    if (!showTurnstile.value) {
      showTurnstile.value = true;
    }
  });
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="submit">
    <div class="grid gap-4 lg:gap-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        <UFormGroup label="Όνομα*" name="firstName" eager-validation>
          <UInput v-model="state.firstName" />
        </UFormGroup>

        <UFormGroup label="Επώνυμο*" name="lastName" eager-validation>
          <UInput v-model="state.lastName" />
        </UFormGroup>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        <UFormGroup label="Email*" name="email" eager-validation>
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Τηλέφωνο*" name="phone" eager-validation>
          <UInput v-model="state.phone" />
        </UFormGroup>
      </div>
      <UFormGroup label="Μήνυμα" name="message" eager-validation>
        <UTextarea v-model="state.message" />
      </UFormGroup>
    </div>

    <div v-if="showTurnstile" class="mt-6">
      <NuxtTurnstile v-model="token" />
    </div>

    <div class="mt-6 flex justify-end">
      <UButton
        :loading="loading"
        type="submit"
        :ui="{ rounded: 'rounded-full' }"
        size="lg"
        label="Ενδιαφέρομαι"
        color="black"
      />
    </div>
  </UForm>
</template>
