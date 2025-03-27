<template>
  <v-container height="200vh">
    <v-select
      ref="selectRef"
      v-model="selectedItem"
      :items="items"
      label="옵션 선택"
      :menu="isMenuOpen"
      @update:menu="isMenuOpen = $event"
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const selectedItem = ref(null);
const items = ref(['옵션 1', '옵션 2', '옵션 3']);
const selectRef = ref(null);
const isMenuOpen = ref(false);

const closeSelectOnScroll = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false; // 셀렉트 닫기
  }
};

onMounted(() => {
  window.addEventListener('scroll', closeSelectOnScroll, true);
});

onUnmounted(() => {
  window.removeEventListener('scroll', closeSelectOnScroll, true);
});
</script>
