<template>
  <section class="py-16 container">
    <div class="flex flex-wrap justify-between mb-12">
      <h1 class="text-4xl lg:text-5xl mb-5 lg:mb-0 font-semibold max-w-[650px] lg:leading-snug">
        Ο προσωπικός σας γιατρός, πάντα κοντά σας.
      </h1>
      <div>
        <p class="mb-5 max-w-[620px] text-lg opacity-80">
          Η ανάγκη για άμεση και ποιοτική ιατρική φροντίδα αυξάνεται συνεχώς. Η τηλεϊατρική και οι κατ' οίκον ιατρικές
          επισκέψεις προσφέρουν μια γρήγορη, αξιόπιστη και ανθρώπινη λύση, φέρνοντας τον γιατρό κοντά σας, όποτε τον
          χρειάζεστε.
        </p>

        <a
          class="cursor-pointer group relative inline-flex h-10 px-5 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
          ><div
            class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]"
          >
            Ενδιαφέρομαι
          </div>
          <div
            class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-950 transition duration-500 group-hover:translate-y-0"
          >
            <span
              class="text-neutral-950 absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"
            /><span class="z-10">Ενδιαφέρομαι</span>
          </div></a
        >
      </div>
    </div>
    <img src="/public/images/doctor-home-visit-wide.png" alt="" class="rounded-xl w-full max-h-[35rem] object-cover" >
    <div class="mt-16">
      <h2 class="text-3xl font-semibold mb-5">Πως δουλεύει;</h2>
      <p class="max-w-[820px] text-xl opacity-80 leading-relaxed">
        Μέσω της πλατφόρμας μας, έχετε εύκολη πρόσβαση σε εξειδικευμένους γιατρούς, δυνατότητα online ραντεβού και
        εξατομικευμένη φροντίδα στον χώρο σας. Κλείστε γρήγορα το ραντεβού σας, λάβετε την ιατρική υποστήριξη που σας αξίζει
        και νιώστε σιγουριά, γνωρίζοντας ότι είμαστε πάντα δίπλα σας με αξιοπιστία, επαγγελματισμό και φροντίδα.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <!-- STEP 1 -->
        <div class="rounded-lg shadow border border-gray-300 max-w-full">
          <img src="/public/images/polites-step1.png" alt="" class="mb-3 rounded-t-lg w-full" >
          <div class="p-4">
            <h4 class="text-xl font-semibold">Βήμα 1</h4>
            <p>
              Χρειάζεστε ιατρική φροντίδα ή φάρμακα στο σπίτι; Είτε αντιμετωπίζετε ένα ξαφνικό η χρόνιο ιατρικό ζήτημα είτε
              απλά θέλετε να παραλάβετε τα φάρμακά σας χωρίς ταλαιπωρία, η λύση είναι εδώ.
            </p>
          </div>
        </div>

        <!-- STEP 2 -->
        <div class="rounded-lg shadow border border-gray-300 max-w-full">
          <img src="/public/images/polites-step2.png" alt="" class="mb-3 rounded-t-lg w-full" >
          <div class="p-4">
            <h4 class="text-xl font-semibold">Βήμα 2</h4>
            <p>
              Μπαίνετε στην πλατφόρμα και δηλώνετε τα στοιχεία σας. Καταχωρίζετε την τοποθεσία σας, επιλέγετε την υπηρεσία
              που χρειάζεστε – ιατρική επίσκεψη ή παράδοση φαρμάκων – και αφήνετε τα υπόλοιπα σε εμάς.
            </p>
          </div>
        </div>

        <!-- STEP 3 -->
        <div class="rounded-lg shadow border border-gray-300 max-w-full">
          <img src="/public/images/polites-step3.png" alt="" class="mb-3 rounded-t-lg w-full" >
          <div class="p-4">
            <h4 class="text-xl font-semibold">Βήμα 3</h4>
            <p>
              Ο γιατρός ή ο διανομέας έρχεται στην πόρτα σας. Χωρίς αναμονές και μετακινήσεις, λαμβάνετε άμεσα την ιατρική
              φροντίδα ή τα φάρμακά σας με ασφάλεια και αξιοπιστία.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
