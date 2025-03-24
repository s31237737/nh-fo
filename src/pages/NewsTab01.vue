<template>
  <v-list class="system-board">
    <v-list-item>
      <template #prepend>
        <v-avatar>
          <v-icon
            color="indigo"
            icon="mdi-map-marker"
          />
        </v-avatar>
      </template>
      <v-list-item-title>
        <span>앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?</span>
      </v-list-item-title>
        <v-icon
          color="indigo"
          icon="mdi-map-marker"
        />

      <template #append>
       <span>2025.01.01</span>
       <span>12</span>
      </template>
    </v-list-item>
  </v-list>
  <Pagination
    :total-items="dataTableItem.length"
    :items-per-page="itemsPerPage"
    @paging="page = $event.page"
  />
</template>

<script setup>
import { ref, inject } from "vue";

const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");


const page = ref(1);
const itemsPerPage = ref(10);

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "YYYY.MM.DD",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.16",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "이민수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.10",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "박지은",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "최영희",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "박지은",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "최영희",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "박지은",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "최영희",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "박지은",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "최영희",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
]);

</script>
