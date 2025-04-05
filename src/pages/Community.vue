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
          to="/CommunityWrite"
        >
          아이디어 작성하기
        </v-btn>
      </div>
    </div>

    <v-sheet class="w-box feedList">
      <template
        v-for="(item, index) in commData"
        :key="index"
      >
        <v-divider
          v-if="index > 0"
          color="secondary"
        />
        <div class="feed">
          <v-card
            rounded="0"
            class="feed-item"
          >
            <v-row class="feed-item-tit">
              <v-col cols="auto">
                <v-avatar
                  size="50"
                >
                  <v-img
                    alt="Avatar"
                    :src="getImageUrl(item.avatar)"
                  />
                </v-avatar>
                <div class="user-info">
                  <v-card-title>{{ item.userName }}</v-card-title>
                  <v-card-subtitle><span>{{ item.userPart }}</span><span>{{ item.date }}</span></v-card-subtitle>
                </div>
              </v-col>
              <v-spacer v-if="!isMobile" />
              <v-col
                cols="auto"
                md="auto"
                sm="12"
              >
                <v-chip
                  pill
                  :prepend-avatar="getImageUrl(item.labelImg)"
                  class="feed-label"
                >
                  {{ item.label }}
                </v-chip>
              </v-col>
            </v-row>
            <v-card-text>
              <div
                class="editor-content"
                v-html="item.content"
              />
              <v-btn
                variant="text"
                density="compact"
                class="link-btn"
                color="gray"
              >
                더보기
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-row
                align="end"
              >
                <v-btn
                  variant="text"
                  density="compact"
                  :prepend-icon="isLiked ? 'custom:heart-active' : 'custom:heart'"
                  color="quaternary"
                  class="like-btn"
                  :ripple="false"
                  @click="toggleLike"
                >
                  999
                </v-btn>
                <v-btn
                  variant="text"
                  density="compact"
                  prepend-icon="custom:bubble"
                  color="quaternary"
                  class="comment-btn"
                  :ripple="false"
                >
                  999
                </v-btn>
                <v-spacer />
                <v-btn
                  color="info"
                  variant="flat"
                  :ripple="false"
                >
                  수정
                </v-btn>
                <v-btn
                  color="warning"
                  variant="outlined"
                  :ripple="false"
                >
                  삭제
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>

          <!-- 댓글 -->
          <div class="feed-comment">
            <v-row
              class="feed-comment-tit"
              align="end"
            >
              <span>댓글 6</span>
              <v-spacer />
              <v-btn
                color="info"
                variant="flat"
                :ripple="false"
                disabled
              >
                댓글작성
              </v-btn>
            </v-row>

            <div class="feed-textarea">
              <div class="commentId">
                김농협
              </div>
              <v-textarea
                id="inp-content"
                no-resize
                maxlength="1000"
                placeholder="댓글을 남겨보세요."
              />
              <div class="feed-textarea-btns">
                <v-btn
                  variant="text"
                  density="compact"
                  :ripple="false"
                >
                  취소
                </v-btn>
                <v-btn
                  variant="text"
                  density="compact"
                  :ripple="false"
                >
                  등록
                </v-btn>
              </div>
            </div>
          </div>

          <!-- 파일첨부 -->
          <div
            v-if="item.showFilelist"
            class="feed-fileList"
          >
            <p class="file-total">
              첨부파일 <span class="text-success">{{ item.fileList.length }}</span>
            </p>
            <ul
              class="file-list"
            >
              <li
                v-for="(file, index) in item.fileList"
                :key="index"
              >
                <span
                  class="file-download"
                  @click="downloadFile(file)"
                >{{ file.name }}</span>
                <em>{{ file.size }}</em>
              </li>
            </ul>
          </div>
        </div>
      </template>
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

/* 작성글 */
const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const commData = ref([
  {
    avatar: "img_avatar12.jpg",
    userName: "사용자 이름(아이디)",
    userPart: "직무",
    date: "2025.04.03",
    labelImg: "@temp_img_app_icon03.png",
    label: "사용자가 아이디어 제안한 앱",
    content:
    `<p>안녕하세요, 총무알리미 사용자 여러분.</p>
    <br>
    <p>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
    <br>
    <p>
      1. 사용자 인터페이스(UI) 개선
      앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
    </p>
    <br>
    <p>
      2. 알림 기능 강화
      알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
      중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
    </p>
    <br>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <br>
    <p>감사합니다.</p>
    <p>총무알리미 팀 드림</p>
    `,
  },
  {
    avatar: "img_avatar02.jpg",
    userName: "사용자 이름(아이디)",
    userPart: "직무",
    date: "2025.04.03",
    labelImg: "@temp_img_app_icon03.png",
    label: "사용자가 아이디어 제안한 앱",
    content:
    `
    <p>안녕하세요, 총무알리미 사용자 여러분.</p>
    <br>
    <p>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
    <br>
    <p>
      1. 사용자 인터페이스(UI) 개선
      앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
    </p>
    <br>
    <p>
      2. 알림 기능 강화
      알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
      중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
    </p>
    <br>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <br>
    <p>감사합니다.</p>
    <p>총무알리미 팀 드림</p>
    `,
    showFilelist: true,
    fileList: [
      { name: "File_t_title_1.pdf", size: "10.3MB"},
      { name: "File_title_title_title_title_2.pdf", size: "10.3MB"},
      { name: "File_title_3565.pdf", size: "10.3MB"},
    ]
  }
]);
</script>
