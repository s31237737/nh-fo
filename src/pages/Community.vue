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
          to="/MyPage/Post/Community"
          :ripple="false"
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

    <v-sheet
      v-if="feedData.length"
      class="w-box feedList"
    >
      <template
        v-for="(feed, index) in feedData"
        :key="index"
      >
        <v-divider
          v-if="index > 0"
          color="secondary"
        />
        <div class="feed">
          <!-- 게시글 -->
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
                    :src="getImageUrl(feed.avartar)"
                  />
                </v-avatar>
                <div class="user-info">
                  <v-card-title>{{ feed.userName }}</v-card-title>
                  <v-card-subtitle>
                    <span>{{ feed.userPart }}</span><span>{{ feed.date }}</span>
                  </v-card-subtitle>
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
                  :prepend-avatar="getImageUrl('@temp_img_app_icon03.png')"
                  class="feed-label"
                >
                  {{ feed.label }}
                </v-chip>
              </v-col>
            </v-row>
            <v-card-text>
              <div :class="['editor-wrap', { expanded: moreExpand }]">
                <div
                  class="editor-content"
                  v-html="feed.content"
                />
              </div>
              <v-btn
                variant="text"
                density="compact"
                class="link-btn"
                color="gray"
                @click="moreExpand = !moreExpand"
              >
                {{ moreExpand ? '접기' : '더보기' }}
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-row
                align="end"
              >
                <v-col>
                  <ButtonLike
                    :initial-liked="false"
                    :initial-likes="999"
                  />
                  <v-btn
                    variant="text"
                    density="compact"
                    prepend-icon="custom:bubble"
                    color="quaternary"
                    class="comment-btn"
                    :ripple="false"
                    @click="feed.showComment = !feed.showComment"
                  >
                    1000
                  </v-btn>
                </v-col>
                <v-spacer v-if="!isMobile" />
                <v-col>
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
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>

          <!-- 댓글 -->
          <div
            v-if="feed.showComment"
            class="feed-comment"
          >
            <v-row
              class="comment-title"
              align="end"
            >
              <span class="count">댓글 6</span>
              <v-spacer />
              <v-btn
                v-if="!writeShow"
                color="info"
                variant="flat"
                :ripple="false"
                @click="writeShow = !writeShow"
              >
                댓글작성
              </v-btn>
            </v-row>

            <!-- 댓글 등록 -->
            <div
              v-if="writeShow"
              class="comment-write"
            >
              <div class="textarea-wrap">
                <div class="userid">
                  김농협
                </div>
                <v-textarea
                  v-model="message"
                  variant="solo"
                  density="compact"
                  placeholder="댓글을 남겨보세요."
                  maxlength="500"
                  rows="1"
                  auto-grow
                  flat
                />
                <div class="edit-btns justify-end">
                  <v-btn
                    variant="text"
                    density="compact"
                    color="quaternary"
                    :ripple="false"
                    @click="writeShow = !writeShow"
                  >
                    취소
                  </v-btn>
                  <v-btn
                    variant="text"
                    density="compact"
                    color="quaternary"
                    :ripple="false"
                    :disabled="!message.trim()"
                  >
                    등록
                  </v-btn>
                </div>
              </div>
            </div>

            <!-- 댓글 목록 -->
            <ul class="comment-list">
              <!-- 1 -->
              <li 
                v-for="comment in comments"
                :key="comment.id"
                class="comment-item"
                :class="{ my : comment.isMine }"
              >
                <div
                  v-if="!comment.editMode"
                  class="comment"
                >
                  <v-row
                    align="center"
                    class="comment-top"
                  >
                    <div class="userid text-tertiary">
                      {{ comment.userId }}
                    </div>
                    <v-spacer />
                    <v-btn
                      variant="text"
                      density="compact"
                      color="quaternary"
                      :ripple="false"
                    >
                      신고하기
                    </v-btn>
                  </v-row>
                  <p class="context text-gray">
                    {{ comment.content }}
                  </p>
                  <div class="tools">
                    <p class="time">
                      <span>{{ comment.date }}</span>
                      <span>{{ comment.time }}</span>
                    </p>
                    <v-btn
                      variant="text"
                      density="compact"
                      color="quaternary"
                      :ripple="false"
                      @click="toggleReply(comment)"
                    >
                      답글쓰기
                    </v-btn>
                    <ButtonLike
                      :initial-liked="false"
                      :initial-likes="comment.likes"
                    />
                  </div>

                  <!-- 내가 작성한 댓글,답글일 경우 노출 -->
                  <div
                    v-if="!comment.editMode && comment.isMine"
                    class="edit-btns"
                  >
                    <v-btn
                      variant="text"
                      density="compact"
                      color="quaternary"
                      :ripple="false"
                      @click="comment.editMode = true"
                    >
                      수정
                    </v-btn>
                    <v-btn
                      variant="text"
                      density="compact"
                      color="quaternary"
                      :ripple="false"
                    >
                      삭제
                    </v-btn>
                  </div>
                </div>

                <!-- 수정하기 -->
                <div
                  v-if="comment.editMode && comment.isMine"
                  class="comment-write"
                >
                  <div class="textarea-wrap">
                    <div class="userid">
                      김농협
                    </div>
                    <v-textarea
                      v-model="message"
                      variant="solo"
                      density="compact"
                      placeholder="댓글을 남겨보세요."
                      maxlength="500"
                      rows="1"
                      auto-grow
                      flat
                    />
                    <div class="edit-btns justify-end">
                      <v-btn
                        variant="text"
                        density="compact"
                        color="quaternary"
                        :ripple="false"
                        @click="cancelEdit(comment)"
                      >
                        취소
                      </v-btn>
                      <v-btn
                        variant="text"
                        density="compact"
                        color="quaternary"
                        :ripple="false"
                        :disabled="!message.trim()"
                      >
                        등록
                      </v-btn>
                    </div>
                  </div>
                </div>

                <!-- 대댓글 -->
                <div
                  v-if="comment.replyMode"
                  class="comment-write"
                >
                  <!-- 🔧 수정됨 -->
                  <div class="textarea-wrap">
                    <div class="userid">
                      김농협
                    </div>
                    <v-textarea
                      v-model="replyMessage"
                      variant="solo"
                      density="compact"
                      placeholder="답글을 남겨보세요."
                      maxlength="500"
                      rows="1"
                      auto-grow
                      flat
                    />
                    <div class="edit-btns justify-end">
                      <v-btn
                        variant="text"
                        density="compact"
                        color="quaternary"
                        @click="comment.replyMode = false"
                      >
                        취소
                      </v-btn>
                      <v-btn
                        variant="text"
                        density="compact"
                        color="quaternary"
                        :disabled="!replyMessage.trim()"
                      >
                        등록
                      </v-btn>
                    </div>
                  </div>
                </div>
                <ul
                  v-if="comment.replies && comment.replies.length"
                  class="depth2 comment-list"
                >
                  <li
                    v-for="reply in comment.replies"
                    :key="reply.id"
                    class="comment-item"
                    :class="{ my: reply.isMine }"
                  >
                    <div
                      v-if="!reply.editMode"
                      class="comment"
                    >
                      <v-row
                        align="center"
                        class="comment-top"
                      >
                        <div class="userid text-tertiary">
                          {{ reply.userId }}
                        </div>
                        <v-spacer />
                        <v-btn
                          variant="text"
                          density="compact"
                          color="quaternary"
                          :ripple="false"
                        >
                          신고하기
                        </v-btn>
                      </v-row>
                      <p class="context text-gray">
                        {{ reply.content }}
                      </p>

                      <div class="tools">
                        <p class="time">
                          <span>{{ reply.date }}</span>
                          <span>{{ reply.time }}</span>
                        </p>
                        <ButtonLike
                          :initial-liked="false"
                          :initial-likes="0"
                        />
                      </div>

                      <!-- 내가 작성한 댓글,답글일 경우 노출 -->
                      <div
                        v-if="reply.isMine"
                        class="edit-btns"
                      >
                        <v-btn
                          variant="text"
                          density="compact"
                          color="quaternary"
                          :ripple="false"
                          @click="reply.editMode = true"
                        >
                          수정
                        </v-btn>
                        <v-btn
                          variant="text"
                          density="compact"
                          color="quaternary"
                          :ripple="false"
                        >
                          삭제
                        </v-btn>
                      </div>
                    </div>
                    
                    <!-- 수정하기 -->
                    <div
                      v-if="reply.editMode && reply.isMine"
                      class="comment-write"
                    >
                      <div class="textarea-wrap">
                        <div class="userid">
                          김농협
                        </div>
                        <v-textarea
                          v-model="message"
                          variant="solo"
                          density="compact"
                          placeholder="댓글을 남겨보세요."
                          maxlength="500"
                          rows="1"
                          auto-grow
                          flat
                        />
                        <div class="edit-btns justify-end">
                          <v-btn
                            variant="text"
                            density="compact"
                            color="quaternary"
                            :ripple="false"
                            @click="cancelEdit(reply)"
                          >
                            취소
                          </v-btn>
                          <v-btn
                            variant="text"
                            density="compact"
                            color="quaternary"
                            :ripple="false"
                            :disabled="!message.trim()"
                          >
                            등록
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul><!--// comment-list -->
          </div><!--// feed-comment -->

          <!-- 파일첨부 -->
          <div
            v-if="feed.showFilelist"
            class="feed-fileList"
          >
            <p class="file-total">
              첨부파일 <span class="text-success">{{ feed.fileList.length }}</span>
            </p>
            <ul
              class="file-list"
            >
              <li
                v-for="(file, index) in feed.fileList"
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
        </div><!--// feed -->
      </template>
    </v-sheet>
    <v-empty-state
      v-else
      text="'검색어' 검색결과가 없습니다."
      icon="custom:warning"
      bg-color="#FEFEFE"
      :height="isDesktop ? '526': '440'"
    />
  </v-container>
</template>

<script setup>
import { ref, inject, reactive } from "vue";

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
const moreExpand = ref(false); //더보기
const writeShow = ref(false); //댓글쓰기
const message = ref('');//v-textarea
const replyMessage = ref('');

const feedData = ref([
  {
    avartar: "img_avatar12.jpg",
    userName: "사용자 이름(아이디)",
    userPart: "직무",
    date: "2025.04.08",
    label: "앱 이름",
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
    <p>
      2. 알림 기능 강화
      알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
      중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
    </p>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <br>
    <p>감사합니다.</p>
    <p>총무알리미 팀 드림</p>`,
    showComment: false,
    showFilelist: true,
    fileList: [
      { name: "File_t_title_1.pdf", size: "10.3MB" },
      { name: "File_title_title_title_title_2.pdf", size: "10.3MB" },
      { name: "File_title_3565.pdf", size: "10.3MB" }
    ]
  },
  {
    avartar: "img_avatar02.jpg",
    userName: "김농협",
    userPart: "직무",
    date: "2025.04.08",
    label: "앱 이름",
    content: 
    `<img src="../src/assets/images/@temp_img_01.png" />
    <p>안녕하세요, 총무알리미 사용자 여러분.<br>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
    <br>
    <p>
      1. 사용자 인터페이스(UI) 개선
      앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
    </p>
    <p>
      2. 알림 기능 강화
      알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
      중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
    </p>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>`,
    showComment: false,
    showFilelist: false,
  }
]);

const downloadFile = (files) => {
  console.log(files.name)
};

const comments = reactive([
  {
    id: 1,
    userId: '김농협1',
    content: '댓글입니다. 댓글이라구요. 댓글이라니까요?',
    date: '2025.04.08',
    time: '11:40',
    likes: 12,
    isMine: true,
    editMode: false,
    replyMode: false,
    replies: [
      {
        id: 11,
        userId: 'depth2 안농협',
        content: 'depth2 댓글입니다. 댓글이라구요. 댓글이라니까요?',
        date: '2025.04.08',
        time: '11:40',
        likes: 0,
        isMine: false,
      },
      {
        id: 12,
        userId: 'depth2 안농협',
        content: 'depth2 댓글입니다. 댓글이라구요. 댓글이라니까요?',
        date: '2025.04.08',
        time: '11:40',
        likes: 0,
        isMine: true,
        editMode: false,
      }
    ]
  },
  {
    id: 2,
    userId: '김농협2',
    content: '2 댓글입니다. 댓글이라구요. 댓글이라니까요?',
    date: '2025.04.08',
    time: '11:40',
    likes: 0,
    isMine: false,
    editMode: false,
    replyMode: false,
    replies: []
  }
]);

const cancelEdit = (item) => {
  item.editMode = false
}

const toggleReply = (comment) => {
  // 🔧 수정됨: 다른 댓글의 replyMode 끄기
  comments.forEach(c => {
    if (c !== comment) c.replyMode = false
  })
  comment.replyMode = !comment.replyMode
}

</script>