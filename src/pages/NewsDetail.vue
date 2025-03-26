<template>
  <v-container class="inner">
    <div class="tit-wrap column">
      <strong class="title-4-bd">[공지] NH총무알리비 서비스 앱 개선 공지 (24.6.20(목) 18:00~24:00)</strong>
      <span class="date">2024.06.13</span>
    </div>
    <div class="page-actions">
      <div class="pagination">
        <v-btn
          :ripple="false"
          icon="custom:arrow-prev"
          color="info"
        />
        <v-btn
          :ripple="false"
          icon="custom:arrow-next"
          color="info"
        />
      </div>
      <v-spacer />

      <v-btn
        to="News"
        color="info"
        size="large"
      >
        목록가기
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");
</script>
