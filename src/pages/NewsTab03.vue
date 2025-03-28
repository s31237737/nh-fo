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
          <v-chip
            class="flag"
            :color="item.status === '답변완료' ? 'success' : 'tertiary'"
            variant="tonal"
          >
            {{ item.status }}
          </v-chip>
          <strong>
            {{ item.title }}
          <!-- 검색어 강조 예제 -->
          <!-- <span class="text-success">파란글씨</span> -->
          </strong>
        </v-list-item-title>
        <!-- 날짜 및 조회수 등 -->
        <v-list-item-subtitle>
          <div class="info">
            <span>{{ item.author }}</span>
            <span>{{ item.date }}</span>
            <span>{{ item.release }}</span>
            <span>
              <v-icon icon="custom:view" />
              {{ item.views > 999 ? '999+' : item.views }}
            </span>
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
import { ref, computed } from "vue";

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
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협",
    release: "공개",
    date: "2025.03.24",
    views: 1000,
    link: "NewsDetail"
  },
  {
    id: 2,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 3,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 4,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 5,
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 6,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 7,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 8,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 9,
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 10,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 11,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 12,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 13,
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 14,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 15,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 16,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 17,
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 18,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 19,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 20,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
  {
    id: 21,
    status: "답변완료",
    title: "앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.24",
    views: 123,
    link: ""
  },
  {
    id: 22,
    status: "미답변",
    title: "[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "공개",
    date: "2025.03.23",
    views: 456,
    link: ""
  },
  {
    id: 23,
    status: "답변완료",
    title: "개인정보 처리방침 개정 예정 안내 (시행일: 2024년 9월 23일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.22",
    views: 789,
    link: ""
  },
  {
    id: 24,
    status: "미답변",
    title: "웹사이트 이용약관 개정 안내 (시행일: 2024년 10월 5일)",
    author: "김농협농협",
    release: "비공개",
    date: "2025.03.21",
    views: 101,
    link: ""
  },
]);

</script>
