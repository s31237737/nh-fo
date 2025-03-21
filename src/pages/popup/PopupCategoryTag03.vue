<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>카테고리 태그 상세</span>
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
              <th style="width: 25%;">
                카테고리명
              </th>
              <td>
                카테고리명
              </td>
            </tr>
            <tr>
              <th style="width: 25%;">
                카테고리 코드
              </th>
              <td>C001</td>
            </tr>
            <tr>
              <th style="width: 25%;">
                태그명
              </th>
              <td>
                <div class="d-flex ga-2 flex-wrap">
                  <v-chip
                    v-for="(tag, index) in tags"
                    :key="index"
                    density="compact"
                    color="state_warn"
                    class="text-2-md"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </td>
            </tr>
            <tr>
              <th style="width: 25%;">
                카테고리 사용 상태
              </th>
              <td>
                사용
              </td>
            </tr>
            <tr>
              <th style="width: 25%;">
                추천 정보 사용 상태
              </th>
              <td>
                미사용
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

const tags = ref(['태그명1', '태그명2', '태그명3', '태그명4', '태그명5', '태그명6', '태그명7', '태그명8', '태그명9']);
</script>
