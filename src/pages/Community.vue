<template>
  <v-sheet
    class="top-banner"
    :height="isDesktop ? '370' : 'auto'"
  >
    <v-container class="inner">
      <v-card>
        <v-card-item>
          <v-card-subtitle>
            커뮤니티
          </v-card-subtitle>
          <v-card-title>
            앱에 대한 아이디어를<br>자유롭게 제안해 보세요!
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              :width="isDesktop ? '498' : '100%'"
              class="search-inp"
              placeholder="작성자, 앱이름, 글 내용을 검색할 수 있어요 "
              append-inner-icon="custom:search"
              rounded="pill"
              @click:append-inner="onAppendClick"
            />
          </v-card-text>
          <template #append>
            <v-img
              :width="isDesktop ? '300': '240'"
              src="@/assets/images/img_community_banner.png"
            />
          </template>
        </v-card-item>
      </v-card>
    </v-container>
  </v-sheet>
  <v-container class="inner">
    <div class="tit-wrap">
      <div class="btns">
        <v-btn
          color="info"
          size="large"
        >
          내가 작성한 아이디어
        </v-btn>
        <v-btn
          color="info"
          size="large"
        >
          아이디어 작성하기
        </v-btn>
      </div>
    </div>
    <p>미작업</p>
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
</script>
