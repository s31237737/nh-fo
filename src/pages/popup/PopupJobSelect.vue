<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <p>{{ title }}</p>
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
          class="checklist"
        >
          <v-list-item
            v-for="item in settingsItems"
            :key="item.value"
            :title="item.title"
            :value="item.value"
            :disabled="item.disabled"
            rounded
          >
            <template #append="{ isSelected }">
              <v-list-item-action end>
                <v-checkbox-btn
                  :model-value="isSelected"
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
          @click="resetSelection"
        >
          초기화
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          @click="emit('update:modelValue', false)"
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
     title: {
      type: String,
      default: '직무 선택',
    },
  });
  const emit = defineEmits(['update:modelValue']);

  const settingsSelection = ref(['job1','job2']);
  const settingsItems = [
    { value: 'job1', title: '총무', disabled: true },
    { value: 'job2', title: '기획', disabled: true },
    { value: 'job3', title: '판매'},
    { value: 'job4', title: '구매' },
    { value: 'job5', title: '영농지도' },
    { value: 'job6', title: '조합원 관리' },
    { value: 'job7', title: '마트' },
    { value: 'job8', title: '기타' },
  ]

  function resetSelection() {
    settingsSelection.value = settingsItems
      .filter(item => item.disabled)
      .map(item => item.value);
  }
</script>
