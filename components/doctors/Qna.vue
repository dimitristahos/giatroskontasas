<script setup lang="ts">
const items = [{
  label: 'Πώς μπορώ να γίνω συνεργάτης;',
  defaultOpen: true,
  content: 'Συμπληρώστε τη φόρμα εγγραφής και θα σας ενημερώσουμε για τα επόμενα βήματα.'
}, {
  label: 'Πόσα χρήματα μπορώ να κερδίσω;',
  content: ' Το εισόδημά σας εξαρτάται από τις υπηρεσίες που παρέχετε και τον αριθμό των ραντεβού ή διανομών που ολοκληρώνετε.'
}, {
  label: ' Ποιος μπορεί να γίνει συνεργάτης;',
  content: 'Γιατροί. και διανομείς που θέλουν να συμβάλουν στην υγεία και την εξυπηρέτηση των ασθενών.'
}, {
  label: 'Πώς λαμβάνω πληρωμές;',
  content: 'Οι πληρωμές γίνονται ηλεκτρονικά ανά ασθενή.'
},]
</script>

<template>
    <section class="px-2 lg:px-52 mb-3 py-16 mx-auto lg:text-center max-w-6xl">
      <h2 class="text-4xl font-bold mb-8">Συχνές ερωτήσεις</h2>
      <div class="text-start">
          <UAccordion
              :items="items"
              :ui="{
                  header: {
                      base: 'text-xl font-semibold text-neutral-950',
                  }
              }"
            />
      </div>
    </section>
    <div class="border-b border-neutral-300"></div>
</template>