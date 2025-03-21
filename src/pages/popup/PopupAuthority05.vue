<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>권한 범위 상세</span>
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
              <th style="width: 20%;">
                권한
              </th>
              <td>
                일반 관리자
              </td>
            </tr>
            <tr>
              <th style="width: 20%;">
                권한 그룹명
              </th>
              <td>
                게시물 관리자
              </td>
            </tr>
            <tr>
              <th style="width: 20%;">
                권한 그룹 코드
              </th>
              <td>AG01</td>
            </tr>
            <tr>
              <th style="width: 20%;">
                권한 범위
              </th>
              <td>
                <p class="text-2-md">
                  앱 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions1"
                    :key="index"
                  >{{ option }}</span>
                </div>
                <p class="text-2-md mt-4">
                  사용신청 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions2"
                    :key="index"
                  >{{ option }}</span>
                </div>
                <p class="text-2-md mt-4">
                  권한 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions3"
                    :key="index"
                  >{{ option }}</span>
                </div>
                <p class="text-2-md mt-4">
                  게시판 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions4"
                    :key="index"
                  >{{ option }}</span>
                </div>
                <p class="text-2-md mt-4">
                  전시 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions5"
                    :key="index"
                  >{{ option }}</span>
                </div>
                <p class="text-2-md mt-4">
                  약관 관리
                </p>
                <div class="d-flex ga-5">
                  <span
                    v-for="(option, index) in chkOptions6"
                    :key="index"
                  >{{ option }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <th style="width: 20%;">
                사용 상태
              </th>
              <td>
                사용
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

const chkOptions1 = ref(['조회', '등록', '수정', '삭제', '알림송신']);
const chkOptions2 = ref(['조회', '추가', '승인', '알림송신']);
const chkOptions3 = ref(['조회', '등록', '수정', '삭제', '알림송신']);
const chkOptions4 = ref(['조회', '등록', '수정', '삭제', '알림송신']);
const chkOptions5 = ref(['조회', '등록', '수정', '삭제', '알림송신']);
const chkOptions6 = ref(['조회', '등록', '수정', '삭제', '알림송신']);

</script>
