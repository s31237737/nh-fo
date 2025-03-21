<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>앱 버전 관리</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <v-data-table
          v-model="checked"
          v-model:page="page"
          :headers="dataTableheaders"
          :items="dataTableItem"
          :items-per-page="itemsPerPage"
        >
          <template #top>
            <div class="table-top">
              <div class="control">
                <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
                <div class="control-input">
                  <v-select
                    v-model="itemsPerPage"
                    :items="pageSort"
                    item-title="title"
                    item-value="value"
                    density="compact"
                  />
                </div>
              </div>
              <div class="btns">
                <v-btn
                  size="large"
                  color="warning"
                  variant="outlined"
                  prepend-icon="custom:remove"
                  :disabled="!checked.length"
                >
                  삭제
                </v-btn>
                <v-btn
                  size="large"
                  color="primary"
                >
                  등록
                </v-btn>
              </div>
            </div>
          </template>

          <template #item.addTag="{ item }">
            <div class="d-flex ga-1">
              <v-chip
                v-for="(tag, index) in item.addTag"
                :key="index"
                density="compact"
                color="state_warn"
                class="text-2-md"
              >
                {{ tag }}
              </v-chip>
            </div>
          </template>
          <template #no-data>
            <v-empty-state
              text="검색결과가 없습니다."
              icon="custom:warning"
              size="60"
            />
          </template>
          <template #bottom>
            <Pagination
              :total-items="dataTableItem.length"
              :items-per-page="itemsPerPage"
              @paging="page = $event.page"
            />
          </template>
        </v-data-table>
        <!-- // dialog contents -->
      </v-card-text>
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

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);
const pageSort = ref([
  { title: '10개', value: 10 },
  { title: '20개', value: 20 },
  { title: '30개', value: 30 },
  { title: '50개', value: 50 },
  { title: '100개', value: 100 },
]);
const dataTableheaders = [
  { title: "순서", key: "id", sortable: true, width: '80px'},
  { title: "앱 버전", key: "appVersion", sortable: false,},
  { title: "사용 상태", key: "status", sortable: false, width: '110px'},
  { title: "업데이트 날짜", key: "updatedDate", sortable: false, width: '150px'},
];

const dataTableItem = ref([
  {
    id: 1,
    appVersion: "1.1.1",
    status: "사용",
    updatedDate: "2025.02.01",
  },
  {
    id: 2,
    appVersion: "1.1.2",
    status: "미사용",
    updatedDate: "2025.02.02",
  },
  {
    id: 3,
    appVersion: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    status: "사용",
    updatedDate: "2025.02.03",
  },
  {
    id: 4,
    appVersion: "1.1.4",
    status: "사용",
    updatedDate: "2025.02.04",
  },
  {
    id: 5,
    appVersion: "1.1.5",
    status: "미사용",
    updatedDate: "2025.02.05",
  },
  {
    id: 6,
    appVersion: "1.1.6",
    status: "사용",
    updatedDate: "2025.02.06",
  },
  {
    id: 7,
    appVersion: "1.1.7",
    status: "사용",
    updatedDate: "2025.02.07",
  },
  {
    id: 8,
    appVersion: "1.1.8",
    status: "미사용",
    updatedDate: "2025.02.08",
  },
  {
    id: 9,
    appVersion: "1.1.9",
    status: "미사용",
    updatedDate: "2025.02.08",
  },
  {
    id: 10,
    appVersion: "1.1.10",
    status: "사용",
    updatedDate: "2025.02.08",
  },
  {
    id: 11,
    appVersion: "1.1.11",
    status: "사용",
    updatedDate: "2025.02.08",
  },
  {
    id: 12,
    appVersion: "1.1.12",
    status: "사용",
    updatedDate: "2025.02.09",
  },
  {
    id: 13,
    appVersion: "1.1.13",
    status: "사용",
    updatedDate: "2025.02.09",
  },
  {
    id: 14,
    appVersion: "1.1.14",
    status: "사용",
    updatedDate: "2025.02.09",
  },
  {
    id: 15,
    appVersion: "1.1.15",
    status: "미사용",
    updatedDate: "2025.02.09",
  },
  {
    id: 16,
    appVersion: "1.1.16",
    status: "미사용",
    updatedDate: "2025.02.10",
  },
  {
    id: 17,
    appVersion: "1.1.17",
    status: "미사용",
    updatedDate: "2025.02.17",
  },
  {
    id: 18,
    appVersion: "1.1.18",
    status: "미사용",
    updatedDate: "2025.02.18",
  },
  {
    id: 19,
    appVersion: "1.1.19",
    status: "미사용",
    updatedDate: "2025.02.19",
  },
  {
    id: 20,
    appVersion: "1.1.20",
    status: "사용",
    updatedDate: "2025.02.15",
  },
]);
</script>
