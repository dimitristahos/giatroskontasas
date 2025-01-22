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
    <IndexGranny class="mb-[6rem]" />
    <IndexContact />
    <IndexQna />
  </div>
</template>
