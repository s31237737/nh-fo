<template>
  <v-main class="login">
    <div
      class="loginBg"
    >
      <router-link
        to="/"
        class="logo"
      >
        <v-img
          :width="isDesktop ? 180 : 144"
          alt="NH Nonghyup"
          :src="getImageUrl('logo.png')"
        />
      </router-link>
      <v-img
        :src="getImageUrl('login.png')"
        class="bg"
        alt="로그인 이미지"
      />
    </div>
    <div
      class="loginForm"
    >
      <strong class="title-4-bd">간편하게 로그인하고<br>편리한 앱들을 사용해보세요.</strong>
      <v-btn
        size="x-large"
        color="yellow"
      >
        카카오 간편 로그인
      </v-btn>

      <div>
        <p v-if="!isMobile">
          다른 방법으로 시작하기
        </p>
        <p v-if="isMobile">
          OR
        </p>
      </div>
      <v-btn
        size="large"
        color="info"
      >
        <v-icon icon="custom:microsoft" />MS 간편로그인
      </v-btn>
      <p><v-icon icon="custom:surpport" />최초 비밀번호는 아이디와 동일한 개인번호입니다.</p>
    </div>
  </v-main>
</template>

<script setup>
import { inject } from 'vue';

const isDesktop = inject('isDesktop');
const isMobile = inject('isMobile');

const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
</script>

<route lang="yaml">
meta:
  layout: AuthLayout
</route>
