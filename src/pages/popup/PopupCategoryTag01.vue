<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>카테고리 태그 설정</span>
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
          @click:row="handleClick"
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

const handleClick = (event, row) => {
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "id", width: '80px'},
  { title: "카테고리 코드", key: "appCode", sortable: false, width: '150px'},
  { title: "카테고리명", key: "appName", sortable: false, width: '150px'},
  { title: "등록 태그", key: "addTag", sortable: false, },
  { title: "사용 상태", key: "status", sortable: false, width: '110px'},
  { title: "추천 상태", key: "recomInfo", sortable: false, width: '110px'},
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "C01",
    appName: "테스트 앱 1",
    addTag: ["모바일1", "모바일2"],
    status: "사용",
    registrant: "홍길동",
    recomInfo: "미사용",
    updatedDate: "2025.02.01",
    lastModifiedDate: "2025.02.15",
  },
  {
    id: 2,
    appCode: "C02",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "김철수",
    recomInfo: "미사용",
    updatedDate: "2025.02.05",
    lastModifiedDate: "2025.02.16",
  },
  {
    id: 3,
    appCode: "C03",
    appName: "앱3",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "이민수",
   recomInfo: "미사용",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.10",
  },
  {
    id: 4,
    appCode: "C04",
    appName: "앱4",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "박지은",
    recomInfo: "미사용",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "C05",
    appName: "앱5",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "최영희",
    recomInfo: "미사용",
    updatedDate: "2025.02.08",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "C06",
    appName: "앱6",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "정호준",
    recomInfo: "미사용",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "C07",
    appName: "앱7",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "홍길동",
    recomInfo: "미사용",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "C08",
    appName: "앱8",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "김철수",
    recomInfo: "미사용",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
  {
    id: 9,
    appCode: "C09",
    appName: "앱9",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "이민수",
    recomInfo: "미사용",
    updatedDate: "2025.02.12",
    lastModifiedDate: "2025.02.19",
  },
  {
    id: 10,
    appCode: "C10",
    appName: "앱10",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "박지은",
    recomInfo: "미사용",
    updatedDate: "2025.02.13",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 11,
    appCode: "C11",
    appName: "앱11",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "최영희",
    recomInfo: "미사용",
    updatedDate: "2025.02.14",
    lastModifiedDate: "2025.02.20",
  },
  {
    id: 12,
    appCode: "C12",
    appName: "앱12",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "정호준",
    recomInfo: "미사용",
    updatedDate: "2025.02.15",
    lastModifiedDate: "2025.02.19",
  },
  {
    id: 13,
    appCode: "C13",
    appName: "앱13",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "홍길동",
    recomInfo: "미사용",
    updatedDate: "2025.02.16",
    lastModifiedDate: "2025.02.21",
  },
  {
    id: 14,
    appCode: "C14",
    appName: "앱14",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "김철수",
    recomInfo: "미사용",
    updatedDate: "2025.02.17",
    lastModifiedDate: "2025.02.22",
  },
  {
    id: 15,
    appCode: "C15",
    appName: "앱15",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "이민수",
    recomInfo: "미사용",
    updatedDate: "2025.02.18",
    lastModifiedDate: "2025.02.23",
  },
  {
    id: 16,
    appCode: "C16",
    appName: "앱16",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "박지은",
    recomInfo: "미사용",
    updatedDate: "2025.02.19",
    lastModifiedDate: "2025.02.24",
  },
  {
    id: 17,
    appCode: "C17",
    appName: "앱17",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "최영희",
    recomInfo: "미사용",
    updatedDate: "2025.02.21",
    lastModifiedDate: "2025.02.25",
  },
  {
    id: 18,
    appCode: "C18",
    appName: "앱18",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "정호준",
    recomInfo: "미사용",
    updatedDate: "2025.02.23",
    lastModifiedDate: "2025.02.26",
  },
  {
    id: 19,
    appCode: "C19",
    appName: "앱19",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "홍길동",
    recomInfo: "미사용",
    updatedDate: "2025.02.26",
    lastModifiedDate: "2025.02.27",
  },
  {
    id: 20,
    appCode: "C20",
    appName: "앱20",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "김철수",
    recomInfo: "미사용",
    updatedDate: "2025.02.29",
    lastModifiedDate: "2025.03.01",
  },
  {
    id: 21,
    appCode: "C21",
    appName: "앱21",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "이민수",
    recomInfo: "미사용",
    updatedDate: "2025.03.02",
    lastModifiedDate: "2025.03.03",
  },
  {
    id: 22,
    appCode: "C22",
    appName: "앱22",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "박지은",
    recomInfo: "미사용",
    updatedDate: "2025.03.03",
    lastModifiedDate: "2025.03.04",
  },
  {
    id: 23,
    appCode: "C23",
    appName: "앱23",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "최영희",
    recomInfo: "미사용",
    updatedDate: "2025.03.04",
    lastModifiedDate: "2025.03.05",
  },
  {
    id: 24,
    appCode: "C24",
    appName: "앱24",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "정호준",
   recomInfo: "미사용",
    updatedDate: "2025.03.05",
    lastModifiedDate: "2025.03.06",
  },
  {
    id: 25,
    appCode: "C25",
    appName: "앱25",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "홍길동",
    recomInfo: "미사용",
    updatedDate: "2025.03.06",
    lastModifiedDate: "2025.03.07",
  },
  {
    id: 26,
    appCode: "C26",
    appName: "앱26",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "김철수",
    recomInfo: "미사용",
    updatedDate: "2025.03.07",
    lastModifiedDate: "2025.03.08",
  },
  {
    id: 27,
    appCode: "C27",
    appName: "앱27",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "이민수",
    recomInfo: "미사용",
    updatedDate: "2025.03.08",
    lastModifiedDate: "2025.03.09",
  },
  {
    id: 28,
    appCode: "C28",
    appName: "앱28",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "박지은",
    recomInfo: "미사용",
    updatedDate: "2025.03.09",
    lastModifiedDate: "2025.03.10",
  },
  {
    id: 29,
    appCode: "C29",
    appName: "앱29",
    addTag: ["태그명1", "태그명2", "태그명3"],
    status: "사용",
    registrant: "최영희",
    recomInfo: "미사용",
    updatedDate: "2025.03.10",
    lastModifiedDate: "2025.03.11",
  },
  {
    id: 30,
    appCode: "C30",
    appName: "앱30",
    addTag: ["태그명1", "태그명2"],
    status: "미사용",
    registrant: "정호준",
    recomInfo: "미사용",
    updatedDate: "2025.03.11",
    lastModifiedDate: "2025.03.12",
  }
]);
</script>
