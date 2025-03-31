<template>
  <v-container class="inner">
    <!-- 타이틀 -->
    <div class="tit-wrap column">
      <strong class="title-4-bd">[하나로마트 식품안전 일일점검] 가이드</strong>
      <div class="info">
        <span>앱 이름 : 하나로마트 식품안전 일일점검</span>
        <div class="details-bar">
          <span>조회수 : 6</span><!-- 조회수: 999 이상일시 조회수: 999+로 표시  -->
          <span>작성자 : 관리자</span>
        </div>
      </div>
    </div>
    <!-- 첨부파일 -->
    <v-sheet class="w-box">
      <p class="file-total">
        첨부파일 <span class="text-success">{{ fileList.length }}</span>
      </p>
      <ul
        class="file-list download"
      >
        <li
          v-for="(file, index) in fileList"
          :key="index"
        >
          <span
            class="file-download"
            @click="downloadFile(file)"
          >{{ file.name }}</span>
          <em>{{ file.size }}</em>
        </li>
      </ul>
    </v-sheet>
    <!-- 상세내용 -->
    <v-sheet class="w-box">
      <div class="editor-content">
        비디오
      </div>
    </v-sheet>
    <!-- 하단 버튼 -->
    <div class="page-actions">
      <div class="pagination">
        <v-btn
          disabled
          :ripple="false"
          icon="custom:arrow-prev"
          color="info"
        />
        <v-btn
          :ripple="false"
          icon="custom:arrow-next"
          color="info"
        />
      </div>
      <v-spacer />

      <v-btn
        :to="{path: 'News', query: { tab: 3 }}"
        color="info"
        size="x-large"
      >
        목록가기
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
  { name: "File_t_title_1.pdf", size: "10.3MB"},
  { name: "File_title_title_title_title_2.pdf", size: "10.3MB"},
  { name: "File_title_3565.pdf", size: "10.3MB"},
]);

const downloadFile = (files) => {
  console.log(files.name)
};
</script>
