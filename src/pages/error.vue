<template>
  <v-main class="error">
    <v-img
      alt="error image"
      :src="getImageUrl('error.png')"
    />
    <div class="error-title">
      <strong class="title-2-bd">오류 타이틀</strong>
      <p class="title-5-bd">
        오류 서브 타이틀
      </p>
    </div>
    <div
      class="error-context text-4"
    >
      오류 내용
    </div>
  </v-main>
</template>

<script setup>
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
</script>

<route lang="yaml">
meta:
  layout: AuthLayout
</route>
