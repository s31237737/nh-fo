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
    <template #prepend>
      <router-link to="/">
        <v-img
          :width="isMobile ? 120 : 130"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
    </template>
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
      <!-- 알림 -->
      <Alarm />

      <!-- 프로필 -->
      <v-btn
        icon
        size="40"
      >
        <v-avatar>
          <img
            width="40"
            src="@/assets/images/profile.png"
          >
        </v-avatar>
        <v-menu
          activator="parent"
          content-class="popover"
        >
          <v-card>
            <v-list :items="items" />
          </v-card>
        </v-menu>
      </v-btn>

      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = !drawer"
      />
    </template>
  </v-app-bar>
</template>

<script setup>
import { inject, ref } from 'vue';

const isMobile = inject('isMobile');
const drawer = ref(false);


// 프로필
 const items = ref([
  {
    title: '업스토어로 이동',
    value: 1,
  },
  {
    title: '로그아웃',
    value: 2,
  },
]);
</script>
