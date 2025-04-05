<template>
  <!-- 게시판 리스트 -->

  <!-- 검색어 없을 경우 -->
  <v-empty-state
    :height="isDesktop ? '526': '440'"
    text="‘농협' 검색결과가 없습니다."
    icon="custom:warning"
    size="60"
  />
</template>

<script setup>
import { ref, computed, inject } from "vue";
const isDesktop = inject('isDesktop');

</script>
