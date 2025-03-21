<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>앱 버전 상세</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <v-table-row>
          <tbody>
            <tr
              v-for="(row, index) in tableData"
              :key="index"
            >
              <th style="width: 10%;">
                {{ row.label }}
              </th>
              <td v-html="row.value" />
            </tr>
          </tbody>
        </v-table-row>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="tertiary"
          size="large"
          variant="outlined"
          @click="emit('update:modelValue', false)"
        >
          목록
        </v-btn>
        <v-spacer />
        <v-btn
          color="warning"
          size="large"
          variant="outlined"
          prepend-icon="custom:remove"
        >
          삭제
        </v-btn>
        <v-btn
          color="tertiary"
          size="large"
          variant="outlined"
          prepend-icon="custom:edit"
        >
          수정
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

const tableData = ref([
  { label: '앱 버전', value: '0.1 ver' },
  { label: '업데이트 내용', value:
   `<p>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
      1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
    </p>`
   },
  { label: '사용 상태', value: '사용' },
]);

</script>
