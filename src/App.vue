<template>
  <v-app :class="displaySize">
    <p
      style="background:red; text-align:center;position: relative;z-index: 99999999999999999;"
    >
      클래스 확인 /{{ displaySize }}
    </p>
    <router-view />
  </v-app>
</template>


<script setup>
import { provide, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { name } = useDisplay();
const displaySize = computed(() => {
  const displayMap = {
    sm: 'mobile',
    md: 'tablet',
    xl: 'desktop',
  };
  return displayMap[name.value] || 'desktop';
});

const isMobile = computed(() => name.value === 'sm');
const isTablet = computed(() => name.value === 'md');
const isDesktop = computed(() => name.value === 'xl');

provide('isMobile', isMobile);
provide('isTablet', isTablet);
provide('isDesktop', isDesktop);

</script>
