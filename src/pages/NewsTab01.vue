<template>
  <div
    v-if="!isMobile"
    class="data-header"
  >
    <span class="title">제목</span>
    <span>작성일</span>
    <span>조회수</span>
  </div>
  <v-list class="data-board">
    <template
      v-for="(item, index) in tableItem"
      :key="item.id"
    >
      <v-list-item :to="item.link">
        <template #prepend>
          <v-icon
            v-if="item.notice"
            icon="custom:fix"
          />
        </template>
        <v-list-item-title>
          <span>{{ item.title }}</span>
          <!-- 검색어 강조시 활용 -->
          <!-- <strong class="text-success">파란글씨</strong> -->
          <v-icon
            v-if="item.attachment"
            icon="custom:attachment"
          />
        </v-list-item-title>

        <template #append>
          <span>{{ item.date }}</span>
          <span>{{ item.views }}</span>
        </template>
      </v-list-item>
      <v-divider
        v-if="index < tableItem.length - 1"
        color="secondary"
      />
    </template>
  </v-list>
  <Pagination
    :total-items="tableItem.length"
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

const tableItem = ref([
  {
    id: 1,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: true,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: "/"
  },
  {
    id: 2,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 3,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: true,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 4,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
]);

</script>
