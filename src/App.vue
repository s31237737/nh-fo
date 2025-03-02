<template>
  <v-app :class="displaySize">
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
