<template>
  <v-footer :height="!isMobile ? 100 : 140">
    <div class="inner">
      <router-link to="/">
        <v-img
          width="144"
          alt="NH UP STORE"
          src="@/assets/images/footer_logo.png"
        />
      </router-link>

      <div class="info">
        <router-link to="/Privacy">
          개인정보 처리 방침
        </router-link>
        <p class="copy">
          ©CopyRight 2025. NONGHYUP ALL Rights Reserved.
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script setup>
import { inject } from 'vue';

const isMobile = inject('isMobile');
</script>
