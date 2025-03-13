<template>
  <v-app :class="displaySize">
    <router-view />
  </v-app>
</template>


<script setup>
import { provide, computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();
const displaySize = computed(() => {
  const displayMap = {
    sm: 'mobile',
    md: 'tablet',
    lg: 'desktop',
  };
  return display.lgAndUp.value ? "desktop" : displayMap[display.name.value] || "desktop";
});

const isMobile = computed(() => displaySize.value === "mobile");
const isTablet = computed(() => displaySize.value === "tablet");
const isDesktop = computed(() => displaySize.value === "desktop");

provide('isMobile', isMobile);
provide('isTablet', isTablet);
provide('isDesktop', isDesktop);

</script>
