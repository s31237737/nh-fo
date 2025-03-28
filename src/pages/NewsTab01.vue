<template>
  <!-- 게시판 리스트 -->
  <v-list class="board-list">
    <template
      v-for="(item, index) in paginatedItems"
      :key="item.id"
    >
      <!-- 리스트 아이템 -->
      <v-list-item :to="item.link">
        <!-- 공지 아이콘 -->
        <template #prepend>
          <v-icon
            v-if="item.notice"
            icon="custom:fix"
          />
        </template>
        <!-- 제목 -->
        <v-list-item-title>
          <strong>{{ item.title }} <span class="text-success">검색한 단어</span></strong>
          <!-- 검색어 강조 예제 -->
          <!-- <span class="text-success">파란글씨</span> -->
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
              v-if="item.attachment"
              icon="custom:attachment"
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
    v-model="page"
    :total-items="boardItem.length"
    :items-per-page="itemsPerPage"
  />
</template>

<script setup>
import { ref, computed } from "vue";

const page = ref(1);
const itemsPerPage = ref(10);
const paginatedItems = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  return boardItem.value.slice(start, start + itemsPerPage.value);
});

const boardItem = ref([
  {
    id: 1,
    title: "새소식 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공",
    notice: true,
    attachment: true,
    date: "YYYY.MM.DD hh:mm",
    views: 1000,
    link: "NewsDetail"
  },
  {
    id: 2,
    title: "[공지] 공지사항 최상단 고정",
    notice: true,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 3,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
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
  {
    id: 5,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: false,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 6,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 7,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 8,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 9,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: false,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 10,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 11,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 12,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 13,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: false,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 14,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 15,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 16,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 17,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: false,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 18,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 19,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 20,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 21,
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    notice: false,
    attachment: true,
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 22,
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 23,
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    notice: false,
    attachment: false,
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 24,
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
    link: ""
  },
]);

</script>
