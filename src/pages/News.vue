<template>
  <v-sheet
    class="top-banner"
    :height="isDesktop ? '370' : 'auto'"
  >
    <v-container class="inner">
      <v-card>
        <v-card-item>
          <v-card-subtitle>
            새소식 및 도움말
          </v-card-subtitle>
          <v-card-title>
            안녕하세요,<br>무엇을 도와드릴까요?
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              :width="isDesktop ? '498' : '100%'"
              class="search-inp"
              placeholder="검색어를 입력해주세요"
              append-inner-icon="custom:search"
              rounded="pill"
              @click:append-inner="onAppendClick"
            />
          </v-card-text>
          <template #append>
            <v-img
              :width="isDesktop ? '300': '240'"
              src="@/assets/images/img_news_banner.png"
            />
          </template>
        </v-card-item>
      </v-card>
    </v-container>
  </v-sheet>
  <v-container class="inner">
    <section class="board-list">
      <div class="tit-wrap">
        <v-slide-group
          v-model="tab"
          center-active
        >
          <v-slide-group-item
            v-for="(item, i) in tabBtn"
            :key="i"
            v-slot="{ isSelected }"
          >
            <v-btn
              size="large"
              :ripple="false"
              height="44"
              rounded="pill"
              :color="isSelected ? 'primary' : 'info'"
              @click="tab = i"
            >
              {{ item.btn }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <v-window
        v-model="tab"
        class="tab-container"
      >
        <v-window-item>
          One
          <Pagination
            :total-items="dataTableItem.length"
            :items-per-page="itemsPerPage"
            @paging="page = $event.page"
          />
        </v-window-item>

        <v-window-item>
          Two
        </v-window-item>

        <v-window-item>
          Three
        </v-window-item>
        <v-window-item>
          four
        </v-window-item>
      </v-window>
    </section>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";

const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");

const search = ref("");
const onAppendClick = () => {
  alert('Append icon clicked!');
}


const tab = ref(0);
const tabBtn = ref([
  { btn: "새소식" },
  { btn: "자주 묻는 질문" },
  { btn: "Q&A" },
  { btn: "앱 가이드" },
]);



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
