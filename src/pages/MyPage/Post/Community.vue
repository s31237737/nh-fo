<template>
  <!-- 게시판 리스트 -->
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
                size="60"
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
            <div :class="['editor-wrap', { expanded: moreItems[index] }]">
              <div class="editor-content">
                <img :src="getImageUrl('@temp_img_01.png')">
                <br>
                <br>
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
                </p>
              </div>
            </div>
            <v-btn
              variant="text"
              density="compact"
              class="link-btn"
              color="gray"
              @click="toggleExpand(index)"
            >
              {{ moreItems[index] ? '접기' : '더보기' }}
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
                  to="/CommunityWrite"
                >
                  수정
                </v-btn>
                <v-btn
                  color="warning"
                  variant="outlined"
                  :ripple="false"
                  @click="alert = true"
                >
                  삭제
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>

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

        <!-- 댓글 -->
        <div
          v-if="feed.showComment"
          class="feed-comment"
        >
          <CommentSection
            v-model:message="message"
            v-model:reply-message="replyMessage"
            :comments="comments"
            :write-show="writeShow"
            @toggle-reply="toggleReply"
            @cancel-edit="cancelEdit"
            @write-toggle="() => (writeShow = !writeShow)"
          />
        </div>
      </div><!--// feed -->
    </template>
  </v-sheet>

  <!-- 게시글 없을 경우 -->
  <v-empty-state
    v-else
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


  <!-- alert(sample) -->
  <!-- 삭제 얼럿 -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
    @after-leave="isDelete = false"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <template v-if="!isDelete">
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">삭제</strong>
          <p class="text-4">
            삭제하시겠습니까?
          </p>
        </template>
        <template v-else>
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">삭제 완료</strong>
          <p class="text-4">
            삭제가 완료되었습니다.
          </p>
        </template>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <template v-if="!isDelete">
          <v-btn
            color="info"
            size="large"
            @click="alert = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="isDelete = true"
          >
            삭제
          </v-btn>
        </template>
        <v-btn
          v-else
          color="primary"
          size="large"
          @click="alert = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject, reactive } from "vue";

const isMobile = inject("isMobile");
const isDesktop = inject('isDesktop');
const getImageUrl = (imageName) => {
  return new URL(`../../../assets/images/${imageName}`, import.meta.url).href;
};

const isDelete = ref(false);
const alert = ref(false);

const moreItems = ref({});
const toggleExpand = (index) => {
  moreItems.value[index] = !moreItems.value[index]
}

const feedData = ref([
  {
    avartar: "img_avatar12.jpg",
    userName: "사용자 이름(아이디)",
    userPart: "직무",
    date: "2025.04.08",
    label: "앱 이름",
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
    showComment: false,
    showFilelist: false,
  }
]);

const downloadFile = (files) => {
  console.log(files.name)
};


/* 댓글 */
const writeShow = ref(false); //댓글쓰기
const message = ref('');//v-textarea
const replyMessage = ref('');//대댓글
const comments = reactive([
  {
    id: 1,
    userId: '김농협1',
    content: '댓글입니다. 댓글이라구요. 댓글이라니까요?',
    date: '2025.04.08',
    time: '11:40',
    likes: 12,
    isMine: false,//내가 작성한 글 표시
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
        isMine: false,//내가 작성한 글 표시
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
      },
      {
        id: 13,
        userId: 'depth2 안농협',
        content: 'depth2 댓글입니다. 댓글이라구요. 댓글이라니까요?',
        date: '2025.04.08',
        time: '11:40',
        likes: 0,
        isMine: false,
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
    isMine: true,
    editMode: false,
    replyMode: false,
    replies: []
  }
]);

const cancelEdit = (item) => {
  item.editMode = false
}

const toggleReply = (comment) => {
  comment.replyMode = !comment.replyMode
}
</script>
