<script setup lang="ts">
  const { data: home } = await useAsyncData(() => queryCollection("content").path("/").first());

  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description,
  });
</script>

<template>
  <div id="home">
    <IndexHero />
    <IndexHeroCards />
    <IndexWhy />
    <IndexWhyCards />
    <IndexGranny class="mb-[1.5rem]" />
    <IndexContact class="pt-[4.5rem]" />
    <IndexQna />
  </div>
</template>
