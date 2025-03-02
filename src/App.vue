<template>
  <v-app :class="displaySize">
    <Header />
    <div>
      <p v-if="!isMobile">
        💻 PC 화면입니다!
      </p>
      <p v-else>
        📱 모바일 화면입니다!
      </p>
    </div>
    <router-view />
    <Footer />
  </v-app>
</template>


<script setup>
import { provide, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
provide('isMobile', mobile);
const isMobile = computed(() => mobile.value);
const displaySize = computed(() => {
  return mobile.value ? 'mobile' : 'desktop';
});

</script>
