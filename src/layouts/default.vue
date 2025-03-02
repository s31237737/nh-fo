<template>
  <Header />
  <v-main>
    <router-view />
  </v-main>
  <Footer />
</template>


<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
