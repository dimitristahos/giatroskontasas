<script setup lang="ts">
  import { defineModel } from "vue";
  import type { FormSubmitEvent } from "#ui/types";
  import { z } from "zod";
  import axios from "axios";
  import qs from "qs";

  type Schema = z.output<typeof schema>;

  const runtimeConfig = useRuntimeConfig();
  const env = runtimeConfig.public;

  const schema = z.object({
    firstName: z.string().min(3, "Πρέπει να έχει τουλάχιστον 3 χαρακτήρες"),
    lastName: z.string().min(3, "Πρέπει να έχει τουλάχιστον 3 χαρακτήρες"),
    email: z.string().email("Μη έγκυρη διεύθυνση email"),
    phone: z.string().min(10, "Πρέπει να έχει τουλάχιστον 10 χαρακτήρες"),
    specialty: z.string().min(2, "Πρέπει να έχει τουλάχιστον 2 χαρακτήρες"),
    message: z.string().optional(),
  });

  z.setErrorMap((issue: z.ZodIssueOptionalMessage, ctx: z.ErrorMapCtx) => {
    if (issue.code === "invalid_type" && issue.received === "undefined") {
      return { message: "Το πεδίο είναι υποχρεωτικό" };
    }
    return { message: ctx.defaultError };
  });

  const submitSuccess = defineModel<boolean>();

  const state = reactive({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    specialty: undefined,
    message: undefined,
  });

  const token = ref();
  const loading = ref(false);

  const submit = async (event: FormSubmitEvent<Schema>) => {
    loading.value = true;
    try {
      await axios.post(
        env.onlineFormUrl,
        qs.stringify({
          action: "insert_online_form",
          type: "giatros",
          ...event.data,
          cf_turnstile_response: token.value,
        })
      );

      submitSuccess.value = true;
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
      <UFormGroup label="Ειδικότητα*" name="specialty" eager-validation>
        <UInput v-model="state.specialty" />
      </UFormGroup>
      <UFormGroup label="Μήνυμα" name="message" eager-validation>
        <UTextarea v-model="state.message" />
      </UFormGroup>
    </div>

    <div v-if="showTurnstile" class="mt-6">
      <NuxtTurnstile v-model="token" />
    </div>

    <div class="mt-6 flex justify-end">
      <UButton :loading="loading" type="submit" size="lg" label="Ενδιαφέρομαι" color="blue" class="px-4" />
    </div>
  </UForm>
</template>
