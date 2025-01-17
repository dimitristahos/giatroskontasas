<template>
    <div class="min-h-screen">
        <header id="header" class="px-4 lg:px-52 sticky top-0 z-50 transition-colors duration-300">
            <nav class="flex justify-between py-4">
                <NuxtLink to="/" class="fw-bold">LOGO</NuxtLink>
                <div class="flex space-x-5">
                    <NuxtLink to="/" class="hover:text-neutral-600">Αρχική</NuxtLink>
                    <NuxtLink to="/" class="hover:text-neutral-600">Σχετικά</NuxtLink>
                    <NuxtLink to="/" class="hover:text-neutral-600">Ενδιαφέρομαι</NuxtLink>
                    <NuxtLink to="/" class="hover:text-neutral-600">Επικοινωνία</NuxtLink>
                </div>
            </nav>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

useHead({
    titleTemplate: '%s - Γιατρός Κοντά σας',
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
            crossorigin: ''
        }
    ]
});

onMounted(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
        if (window.scrollY > 0) {
            header.classList.add("bg-white", "shadow-md");
            header.classList.remove("bg-transparent");
        } else {
            header.classList.add("bg-transparent");
            header.classList.remove("bg-white", "shadow-md");
        }
    };

    document.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
        document.removeEventListener("scroll", handleScroll);
    });
});
</script>


<style>
body {
    font-family: 'Inter', sans-serif;
}

body {
    @apply bg-white text-neutral-900;
}
</style>