<template>
  <div class="pagination">
    <v-btn
      :ripple="false"
      icon="custom:arrow-first"
      :disabled="modelValue === 1"
      color="info"
      @click="goToPage(1)"
    />

    <v-btn
      :ripple="false"
      icon="custom:arrow-prev"
      :disabled="modelValue === 1"
      color="info"
      @click="goToPage(modelValue - 1)"
    />

    <div class="numbers">
      <v-btn
        v-for="page in pageNumbers"
        :key="page"
        :ripple="false"
        :color="modelValue === page ? 'primary' : 'info'"
        @click="goToPage(page)"
      >
        {{ page }}
      </v-btn>
    </div>

    <v-btn
      :ripple="false"
      icon="custom:arrow-next"
      :disabled="modelValue === totalPages"
      color="info"
      @click="goToPage(modelValue + 1)"
    />

    <v-btn
      :ripple="false"
      icon="custom:arrow-last"
      :disabled="modelValue === totalPages"
      color="info"
      @click="goToPage(totalPages)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:modelValue']);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));


const pageNumbers = computed(() => {
  const maxVisible = 5;
  let start = Math.max(1, props.modelValue - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages.value, start + maxVisible - 1);

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  emit('update:modelValue', page);
};
</script>
