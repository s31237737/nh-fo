<template>
  <!-- 게시판 리스트 -->

  <!-- 게시글 없을 경우 -->
  <v-empty-state

    :height="isDesktop ? '490': '360'"
    icon="null"
  >
    <template #text>
      <div class="text-2-md text-quaternary">
        작성된 게시물이 없습니다.
      </div>
    </template>
    <template #actions>
      <v-btn
        color="primary"
        size="x-large"
        to="/Community"
      >
        커뮤니티 더보기
      </v-btn>
    </template>
  </v-empty-state>
</template>

<script setup>
import { ref, computed, inject } from "vue";
const isDesktop = inject('isDesktop');

</script>
