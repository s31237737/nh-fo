<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>권한 범위 설정</span>
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

          <template #item.authority="{ item }">
            <div class="ml-m10">
              <v-chip
                color="secondary"
                variant="flat"
              >
                {{ item.authority }}
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
          <!-- <template #bottom>
            <Pagination
              :total-items="dataTableItem.length"
              :items-per-page="itemsPerPage"
              @paging="page = $event.page"
            />
          </template> -->
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

const handleClick = (event, row) => {
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "id", width: '80px'},
  { title: "권한 그룹 코드", key: "appCode", sortable: false, width: '150px'},
  { title: "권한 그룹명", key: "appName", sortable: false, },
  { title: "권한", key: "authority", sortable: false, width: '150px'},
  { title: "사용 상태", key: "status", sortable: false, width: '110px'},
];

const dataTableItem = ref([ {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "모바일",
    status: "사용",
    registrant: "홍길동",
    createdDate: "2025.01.01",
    updatedDate: "2025.02.01",
    lastModifiedDate: "2025.02.15",
    authority: "슈퍼관리자",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "미사용",
    registrant: "김철수",
    createdDate: "2025.01.10",
    updatedDate: "2025.02.05",
    lastModifiedDate: "2025.02.16",
    authority: "비즈니스관리자",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "모바일",
    status: "사용",
    registrant: "이민수",
    createdDate: "2025.01.12",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.10",
    authority: "시스템관리자",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "웹",
    status: "미사용",
    registrant: "박지은",
    createdDate: "2025.01.15",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
    authority: "슈퍼관리자",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "모바일",
    status: "사용",
    registrant: "최영희",
    createdDate: "2025.01.20",
    updatedDate: "2025.02.08",
    lastModifiedDate: "2025.02.14",
    authority: "비즈니스관리자",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "웹",
    status: "미사용",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
    authority: "시스템관리자",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "모바일",
    status: "사용",
    registrant: "홍길동",
    createdDate: "2025.02.01",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
    authority: "슈퍼관리자",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "웹",
    status: "미사용",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
    authority: "비즈니스관리자",
  },
  {
    id: 9,
    appCode: "APP009",
    appName: "앱9",
    appType: "모바일",
    status: "사용",
    registrant: "이민수",
    createdDate: "2025.02.05",
    updatedDate: "2025.02.12",
    lastModifiedDate: "2025.02.19",
    authority: "시스템관리자",
  },
  {
    id: 10,
    appCode: "APP010",
    appName: "앱10",
    appType: "웹",
    status: "미사용",
    registrant: "박지은",
    createdDate: "2025.02.08",
    updatedDate: "2025.02.13",
    lastModifiedDate: "2025.02.18",
    authority: "슈퍼관리자",
  },
]);
</script>
