<template>
  <v-footer :height="!isMobile ? 100 : 130">
    <v-container>
      <router-link to="/">
        <v-img
          :width="130"
          alt="NH Nonghyup"
          src="@/assets/images/footer_logo.png"
        />
      </router-link>

      <div class="info">
        <router-link to="/">
          <p>개인정보 처리 방침</p>
        </router-link>
        <p class="copy">
          © 2014 LG Electronics. All rights reserved.
        </p>
      </div>
    </v-container>
  </v-footer>
  <div>
    <p v-if="!isMobile">
      💻 PC 화면입니다!
    </p>
    <p v-else>
      📱 모바일 화면입니다!
    </p>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
