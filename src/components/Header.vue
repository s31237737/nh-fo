<template>
  <v-app-bar :height="!isMobile ? 100 : 130">
    <v-container>
      <router-link to="/">
        <v-img
          :width="130"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
