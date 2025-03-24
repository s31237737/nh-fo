<template>
  <div
    v-if="!isMobile"
    class="data-header"
  >
    <span class="title">제목</span>
    <span class="date">작성일</span>
    <span class="views">조회수</span>
  </div>
  <v-list class="data-board">
    <template
      v-for="(item, index) in tableItem"
      :key="item.id"
    >
      <v-list-item>
        <template #prepend>
          <v-icon
            v-if="item.notice"
            color="indigo"
            icon="mdi-map-marker"
          />
        </template>
        <v-list-item-title>
          <span>{{ item.title }}</span>
          <v-icon
            v-if="item.attachment"
            color="indigo"
            icon="mdi-attachment"
          />
        </v-list-item-title>

        <template #append>
          <span class="date">{{ item.date }}</span>
          <span class="views">{{ item.views }}</span>
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
    title: "공지사항 1",
    notice: true,
    attachment: true,
    date: "2025.03.24",
    views: 123,
  },
  {
    id: 2,
    title: "공지사항 2",
    notice: false,
    attachment: true,
    date: "2025.03.23",
    views: 456,
  },
  {
    id: 3,
    title: "공지사항 3",
    notice: true,
    attachment: false,
    date: "2025.03.22",
    views: 789,
  },
  {
    id: 4,
    title: "공지사항 4",
    notice: false,
    attachment: false,
    date: "2025.03.21",
    views: 101,
  },
]);

</script>
