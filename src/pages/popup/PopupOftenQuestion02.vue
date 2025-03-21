<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>자주 묻는 질문 상세</span>
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
            <tr>
              <th style="width: 10%">
                등록자
              </th>
              <td style="width: 40%">
                김농협
              </td>
              <th style="width: 10%">
                등록일
              </th>
              <td style="width: 40%">
                2025.09.09
              </td>
            </tr>
            <tr>
              <th>
                유형
              </th>
              <td>앱 사용 시 자주 묻는 질문</td>
              <th>
                공개여부
              </th>
              <td>
                공개
              </td>
            </tr>
            <tr>
              <th>
                질문
              </th>
              <td colspan="3">
                자주 묻는 질문 제목입니다.
              </td>
            </tr>
            <tr>
              <th>
                내용
              </th>
              <td colspan="3">
                <p>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.<br>
                  자주 묻는 질문 내용입니다. 자주 묻는 질문 내용입니다.
                </p>
              </td>
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
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
