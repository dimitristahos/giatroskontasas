<template>
    <div class="px-4 py-10 max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold mb-3">Άρθρα Υγείας</h1>
      <p class="opacity-60 mb-8 max-w-[520px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quos debitis voluptas alias, deserunt et dolorum illum quo obcaecati nam amet voluptate fugiat ab tempore!</p>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="block rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden"
        >
          <article class="h-full flex flex-col">
            <header>
              <img
                v-if="post.coverImage?.url"
                :src="post.coverImage.url"
                :alt="post.title"
                class="w-full h-48 object-cover"
                loading="lazy"
              />
            </header>
  
            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
                <p class="text-gray-600 text-sm">{{ post.brief }}</p>
              </div>
              <div class="mt-4 text-sm text-gray-400">
                {{ formatDate(post.publishedAt) }}
              </div>
            </div>
          </article>
        </NuxtLink>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
  const posts = await getAllPosts('leomich.hashnode.dev')
  
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }
  
  useSeoMeta({
    title: 'Blog',
    description: 'Διαβάστε άρθρα σχετικά με θέματα υγείας',
    ogTitle: 'Blog – Γιατρός Κοντά σας',
    ogDescription: 'Διαβάστε άρθρα σχετικά με θέματα υγείας',
    ogUrl: '#',
  })
</script>
  