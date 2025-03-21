 <!--
    개발 : v-date-input을 사용했다가 날짜포멧 수정 이슈가 있어
          예전의 v-text-field + v-date-picker로 변경함
          DateInp, DateRangeInp에 v-date-input 코드 남겨둠
  -->

<template>
  <v-menu
    v-model="menu"
    offset-y
    :close-on-content-click="false"
  >
    <template #activator="{ props }">
      <div class="date-wrap">
        <v-text-field
          v-bind="props"
          :model-value="formattedDate"
          :label="label"
          prepend-inner-icon="custom:calendar"
          readonly
          :placeholder="placeholder"
          :width="width"
        />
        <v-btn
          color="secondary"
          @click="setToday"
        >
          TODAY
        </v-btn>
      </div>
    </template>
    <v-date-picker
      :model-value="modelValue"
      :width="width"
      @update:model-value="updateDate"
    >
      <template #actions>
        <v-btn
          text
          color="primary"
          @click="cancelDatePicker"
        >
          취소
        </v-btn>
        <v-btn
          text
          :disabled="!modelValue"
          @click="menu = false"
        >
          선택 완료
        </v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Date,
    default: () => new Date(),
  },
  label: {
    type: String,
    default: '',
  },
  width: {
    type: [Number, String],
    default: '300',
  },
  placeholder: {
    type: String,
    default: 'YYYY.MM.DD',
  },
});

const emit = defineEmits(['update:modelValue']);

const menu = ref(false);  // 메뉴 상태

// 날짜 포맷 함수
const formatDate = (date, format) => {
  if (!date) return null;

  const d = new Date(date);

  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};

// computed로 포맷된 날짜를 계산
const formattedDate = computed(() => {
  return formatDate(props.modelValue, 'MM/DD/YYYY') ?? '';
});

// 날짜 업데이트
const updateDate = (newDate) => {
  emit('update:modelValue', newDate);
};

// 오늘 날짜 설정
const setToday = () => {
  const today = new Date();
  emit('update:modelValue', today);
};

// 메뉴 닫기 (취소 버튼 클릭 시)
const cancelDatePicker = () => {
  menu.value = false;
  setToday();
};
</script>
