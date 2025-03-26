<template>
  <v-navigation-drawer
    :model-value="modelValue"
    location="top"
    :width="!isMobile? '60' : '56'"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-container
      class="inner"
    >
      <v-text-field
        v-model="search"
        :width="!isMobile? '300' : '100%'"
        class="search-inp"
        placeholder="앱과 앱가이드를 검색해보세요"
        append-inner-icon="custom:search"
        rounded="pill"
        @click:append-inner="onAppendClick"
      />
      <v-btn
        icon="custom:close"
        density="comfortable"
        @click="emit('update:modelValue', false)"
      />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const isMobile = inject('isMobile');

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
// 검색
const search = ref('');

const router = useRouter();
const onAppendClick = () => {
  emit('update:modelValue', false);
  router.push('Apps');
}
const emit = defineEmits(['update:modelValue']);
</script>
