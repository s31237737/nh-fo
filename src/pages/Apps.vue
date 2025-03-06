<template>
  <div
    class="fill-height"
    style="background:#fff"
  >
    <p v-if="!isMobile">
      💻 PC 화면입니다!
    </p>
    <p v-else>
      📱 모바일 화면입니다!
    </p>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
</script>
