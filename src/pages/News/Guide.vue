<template>
  <!-- 게시판 리스트 -->
  <v-list
    v-if="boardItem.length > 0"
    class="board-list"
  >
    <template
      v-for="(item, index) in paginatedItems"
      :key="item.id"
    >
      <!-- 리스트 아이템 -->
      <v-list-item :to="item.link">
        <!-- 넘버 -->
        <template #prepend>
          <span>{{ item.id }}</span>
        </template>
        <!-- 제목 -->
        <v-list-item-title>
          <strong>
            {{ item.title }}
          <!-- 검색어 강조 예제 -->
          <!-- <span class="text-success">파란글씨</span> -->
          </strong>
        </v-list-item-title>
        <!-- 날짜 및 조회수 -->
        <v-list-item-subtitle>
          <div class="info">
            <span>{{ item.date }}</span>
            <span>
              <v-icon icon="custom:view" />
              {{ item.views > 999 ? '999+' : item.views }}
            </span>
          </div>
          <!-- 아이콘 -->
          <div class="files">
            <v-icon
              v-if="item.guide"
              icon="custom:guide"
            />
            <v-icon
              v-if="item.video"
              icon="custom:video"
            />
          </div>
        </v-list-item-subtitle>
      </v-list-item>
      <!-- 리스트 구분선 -->
      <v-divider
        v-if="index < paginatedItems.length - 1"
        color="secondary"
      />
    </template>
  </v-list>

  <!-- 페이지네이션 -->
  <Pagination
    v-if="boardItem.length > 0"
    v-model="page"
    :total-items="boardItem.length"
    :items-per-page="itemsPerPage"
  />

  <!-- 검색어 없을 경우 -->
  <v-empty-state
    v-else
    :height="isDesktop ? '526': '440'"
    text="‘농협' 검색결과가 없습니다."
    icon="custom:warning"
    size="60"
  />
</template>

<script setup>
import { ref, computed, inject } from "vue";
const isDesktop = inject('isDesktop');

//Pagination
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedItems = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  return boardItem.value.slice(start, start + itemsPerPage.value);
});

const boardItem = ref([
  {
    id: 1,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 1000,
    link: "/AppGuideDetail"
  },
  {
    id: 2,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
    video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 3,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 4,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 5,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 6,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
    video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 7,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 8,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 9,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 10,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
    video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 11,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 12,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 13,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 14,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
    video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 15,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 16,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 17,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 18,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
    video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 19,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 20,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 21,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    guide: true,
    video: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 22,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: true,
      video: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 23,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    guide: false,
    video: true,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 24,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    guide: false,
    video: true,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
]);

</script>
