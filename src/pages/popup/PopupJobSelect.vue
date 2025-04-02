<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <p>직무 선택</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text class="fit-content">
        <!-- dialog contents -->
        
        <v-list
          v-model:selected="settingsSelection"
          select-strategy="multiple"
          class="checklist"
          rounded="lg"
        >
          <v-list-item
            v-for="item in settingsItems"
            :key="item.value"
            :title="item.title"
            :value="item.value"
            :disabled="item.disabled"
          >
            <template #append="{ isSelected }">
              <v-list-item-action start>
                <v-checkbox-btn
                  :model-value="isSelected"
                  :ripple="false"
                />
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>

        <!--// dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
        >
          초기화
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          적용
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['update:modelValue']);

  const settingsSelection = ref([]);
  const settingsItems = [
    { value: 'job1', title: '직군명 1', disabled: true },
    { value: 'job2', title: '직군명 2' },
    { value: 'job3', title: '직군명 3' },
    { value: 'job4', title: '직군명 4' },
    { value: 'job5', title: '직군명 5' },
    { value: 'job6', title: '직군명 6' },
    { value: 'job7', title: '직군명 7' },
    { value: 'job8', title: '직군명 8' },
    { value: 'job9', title: '직군명 9' },
    { value: 'job10', title: '직군명 10' },
  ]
</script>
