<template>
  <v-navigation-drawer
    floating
    temporary
    width="320"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card class="gnb-drawer">
      <v-card-title>
        <!-- 캘린더 -->
        <v-btn
          v-if="!isDesktop"
          icon="custom:calendar"
          density="comfortable"
        />
        <!-- 닫기 -->
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup>

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>
