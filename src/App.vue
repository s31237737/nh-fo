<template>
  <v-app>
    <router-view />
    <AppFooter />
  </v-app>
</template>


<script setup>
import { provide } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

provide('isMobile', mobile);
</script>
