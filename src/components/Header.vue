<template>
  <!-- 모바일 메뉴 -->
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    temporary
    floating
  >
    <!-- 내용 추가 -->
  </v-navigation-drawer>

  <v-app-bar :height="isMobile ? 52 : 80">
    <router-link to="/">
      <v-img
        :width="isMobile ? 120 : 130"
        alt="NH Nonghyup"
        src="@/assets/images/logo.png"
      />
    </router-link>

    <template #append>
      <v-btn
        v-if="!isMobile"
        icon="mdi-heart"
      />
      <v-btn
        v-if="!isMobile"
        icon="mdi-magnify"
      />
      <v-btn
        v-if="!isMobile"
        icon="mdi-dots-vertical"
      />
      <v-app-bar-nav-icon
        v-else
        @click="drawer = !drawer"
      />
    </template>
  </v-app-bar>
</template>

<script setup>
import { inject, ref } from 'vue';

const isMobile = inject('isMobile'); // 모바일 여부
const drawer = ref(false); // 네비게이션 드로어 상태
</script>
