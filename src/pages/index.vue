<template>
  <v-row>
    <div>
      <p v-if="!isMobile">
        💻 PC 화면입니다!
      </p>
      <p v-else>
        📱 모바일 화면입니다!
      </p>
    </div>
  </v-row>
  <v-row>
    <v-col
      v-for="n in 4"
      :key="n"
      cols="12"
    >
      <v-card height="200" />
    </v-col>
  </v-row>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
