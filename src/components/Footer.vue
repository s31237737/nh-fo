<template>
  <v-footer :height="!isMobile ? 100 : 140">
    <div class="inner">
      <router-link to="/">
        <v-img
          :width="!isMobile ? 140 : 100"
          alt="NH Nonghyup"
          src="@/assets/images/footer_logo.png"
        />
      </router-link>

      <div class="info">
        <router-link to="Privacy">
          개인정보 처리 방침
        </router-link>
        <p class="copy">
          © 2025 NH. All right reserved.
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
