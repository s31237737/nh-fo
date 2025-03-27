<template>
  <v-container>
    <v-select
      ref="selectRef"
      v-model="selectedItem"
      :items="items"
      label="옵션 선택"
      menu-icon=""
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const selectedItem = ref(null);
const items = ref(['옵션 1', '옵션 2', '옵션 3']);
const selectRef = ref(null);

const closeSelectOnScroll = () => {
  if (selectRef.value) {
    selectRef.value.isMenuActive = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', closeSelectOnScroll, true);
});

onUnmounted(() => {
  window.removeEventListener('scroll', closeSelectOnScroll, true);
});
</script>
