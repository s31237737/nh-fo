<template>
  
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
const isTablet = inject('isTablet');
const isDesktop = inject('isDesktop');
</script>
<route lang="yaml">
meta:
  layout: MainLayout
</route>
