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
          to="CommunityWrite"
        >
          아이디어 작성하기
        </v-btn>
      </div>
    </div>

    <v-sheet class="w-box-flat">
      <v-card
        rounded="0"
        class="community"
      >
        <v-card-item>
          <v-row>
            <v-col cols="auto">
              <template #prepend>
                <v-avatar
                  size="50"
                >
                  <v-img
                    alt="Avatar"
                    :src="getImageUrl('img_avatar12.jpg')"
                  />
                </v-avatar>
              </template>
              <v-card-title>사용자 이름(아이디)</v-card-title>
              <v-card-subtitle>직무 | 작성일자</v-card-subtitle>
            </v-col>
            <v-spacer v-if="!isMobile" />
            <v-col
              md="auto"
              sm="12"
            >
              <v-chip
                pill
                :prepend-avatar="getImageUrl('@temp_img_app_icon03.png')"
                class="community-label"
              >
                사용자가 아이디어 제안한 앱
              </v-chip>
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-text>
          안녕하세요, 총무알리미 사용자 여러분.
          항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.

          1. 사용자 인터페이스(UI) 개선
          앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
          메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습.게 접근할 수 있도록 하였습.게 접근할 수 있도록 하였습니다.
        </v-card-text>
        <v-card-actions>
          <v-row
            align="end"
          >
            <v-btn
              variant="text"
              density="compact"
              prepend-icon="custom:heart"
              color="primary"
              class="like-btn"
            >
              999
            </v-btn>
            <v-btn
              variant="text"
              density="compact"
              prepend-icon="custom:bubble"
              color="primary"
              class="comment-btn"
            >
              999
            </v-btn>
            <v-spacer />
            <v-btn
              color="info"
              variant="flat"
            >
              수정
            </v-btn>
            <v-btn
              color="warning"
              variant="outlined"
            >
              삭제
            </v-btn>
          </v-row>
        </v-card-actions>

        <!-- 확장 -->
        <div class="card-expended">
          댓글, 댓글작성
        </div>

        <!-- 파일첨부 -->
        <div class="card-expended">
          파일첨부
        </div>
      </v-card>
      <v-divider color="secondary" />
      
      <v-card
        rounded="0"
        class="community"
      >
        테스트
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";

const isMobile = inject("isMobile");
//const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

const search = ref("");
const onAppendClick = () => {
  alert('Append icon clicked!');
}
</script>
