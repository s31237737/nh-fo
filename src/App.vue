<template>
  <v-app :class="displaySize">
    <div>
      <p v-if="!isMobile">
        💻 PC 화면입니다!
      </p>
      <p v-else>
        📱 모바일 화면입니다!
      </p>
    </div>
    <router-view />
    <AppFooter />
  </v-app>
</template>


<script setup>
import { provide, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
provide('isMobile', mobile);

const displaySize = computed(() => {
  return mobile.value ? 'mobile' : 'desktop';
});

</script>
