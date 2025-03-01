<template>
  <v-app>
    <router-view :class="displaySize" />
    <AppFooter />
  </v-app>
</template>



<script setup>
import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const { name } = useDisplay();

const displaySize = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'xs';
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
      return 'lg';
    case 'xl':
      return 'xl';
  }
  return undefined;
});

import { onMounted } from 'vue'

  const { mobile } = useDisplay()

  onMounted(() => {
    console.log(mobile.value) // false
  })
</script>
