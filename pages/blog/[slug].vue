<template>
    <div class="max-w-4xl mx-auto p-6">
      <NuxtLink to="/blog" class="text-blue-500">← Πίσω στα άρθρα</NuxtLink>
      <h1 class="text-3xl font-bold mt-4 mb-4">{{ post.title }}</h1>
      <img v-if="post.coverImage?.url" :src="post.coverImage.url" class="rounded-lg mb-5 w-4/6" />
      <div v-html="post.content.html" class="prose lg:prose-lg max-w-none"></div>
    </div>
  </template>
  
<script setup lang="ts">
  const route = useRoute()
  const slug = route.params.slug as string
  const post = await getPostBySlug('leomich.hashnode.dev', slug)

  useSeoMeta({
    title: post.title,
    ogTitle: post.title,
    description: post.brief,
    ogDescription: post.brief,
    ogImage: post.coverImage?.url,
    twitterImage: post.coverImage?.url,
    ogType: 'article',
    articlePublishedTime: post.publishedAt,
    ogUrl: `https://giatroskontasas.gr/blog/${slug}`
  })

  useHead({
    link: [
        {
            rel: 'canonical',
            href: `https://giatroskontasas.gr/blog/${slug}`
        }
    ],
    script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.brief,
        "image": post.coverImage?.url,
        "author": {
          "@type": "Organization",
          "name": "Giatros Konta sas"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Giatros Konta sas",
          "logo": {
            "@type": "ImageObject",
            "url": "#"
          }
        },
        "datePublished": post.publishedAt
      })
    }
  ]
  })
</script>
  