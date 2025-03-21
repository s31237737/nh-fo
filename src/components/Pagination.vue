<template>
  <div class="pagination">
    <v-btn
      :ripple="false"
      icon="custom:arrow-first"
      :disabled="currentPage === 1"
      density="compact"
      @click="goToPage(1)"
    />

    <v-btn
      :ripple="false"
      icon="custom:arrow-left"
      :disabled="currentPage === 1"
      density="compact"
      @click="goToPage(currentPage - 1)"
    />

    <div class="numbers">
      <v-btn
        v-for="page in pageNumbers"
        :key="page"
        :ripple="false"
        variant="text"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </v-btn>
    </div>

    <v-btn
      :ripple="false"
      icon="custom:arrow-right"
      :disabled="currentPage === totalPages"
      density="compact"
      @click="goToPage(currentPage + 1)"
    />

    <v-btn
      :ripple="false"
      icon="custom:arrow-last"
      :disabled="currentPage === totalPages"
      density="compact"
      @click="goToPage(totalPages)"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['paging']);

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

const currentPage = ref(props.currentPage);

watch(() => props.itemsPerPage, () => {
  currentPage.value = 1;
   emit('paging', { page: currentPage.value });
});

const pageNumbers = computed(() => {
  const pageLimit = 5; // 최대 페이지 번호 수
  let startPage = Math.max(1, currentPage.value - Math.floor(pageLimit / 2));
  let endPage = Math.min(totalPages.value, currentPage.value + Math.floor(pageLimit / 2));

  if (endPage - startPage < pageLimit - 1) {
    if (startPage === 1) {
      endPage = Math.min(totalPages.value, startPage + pageLimit - 1);
    } else {
      startPage = Math.max(1, endPage - pageLimit + 1);
    }
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i); // 페이지 번호 배열 생성
});

const goToPage = (page) => {
  if (page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;

  currentPage.value = page;
  emit('paging', { page: currentPage.value });
};
</script>
