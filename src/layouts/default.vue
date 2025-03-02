<template>
  <Header />
  <v-main>
    <div>
      <p v-if="!isMobile">
        💻 PC 화면입니다!
      </p>
      <p v-else>
        📱 모바일 화면입니다!
      </p>
    </div>
    <router-view />
  </v-main>
  <Footer />
</template>


<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
