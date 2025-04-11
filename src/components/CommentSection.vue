<template>
  <v-row
    class="comment-title"
    align="end"
  >
    <span class="count">댓글 {{ totalCommentCount }}</span>
    <v-spacer />
    <v-btn
      v-if="!writeShow"
      color="info"
      variant="flat"
      :ripple="false"
      @click="emitWriteToggle"
    >
      댓글작성
    </v-btn>
  </v-row>

  <!-- 댓글작성 등록 -->
  <div
    v-if="writeShow"
    class="comment-write"
  >
    <div class="textarea-wrap">
      <div class="comment-id">
        김농협
      </div>
      <v-textarea
        v-model="localMessage"
        variant="solo"
        density="compact"
        placeholder="댓글을 남겨보세요."
        maxlength="500"
        rows="1"
        auto-grow
        flat
      />
      <div class="comment-btns">
        <v-btn
          variant="text"
          density="compact"
          color="quaternary"
          :ripple="false"
          @click="emitWriteToggle"
        >
          취소
        </v-btn>
        <v-btn
          variant="text"
          density="compact"
          color="quaternary"
          :ripple="false"
          :disabled="!localMessage.trim()"
        >
          등록
        </v-btn>
      </div>
    </div>
  </div>

  <!-- 댓글 목록 -->
  <div
    v-if="comments.length"
    class="commentList"
  >
    <div
      v-for="(comment, index) in comments"
      :key="comment.id"
      class="commentList-item"
    >
      <!-- 댓글 (내가 쓴 글에는 'mine' 클래스 붙임/이하 같음) -->
      <div
        class="comment-area"
        :class="{ mine: comment.isMine }"
      >
        <!-- 수정 -->
        <div
          v-if="comment.editMode"
          class="comment-write"
        >
          <div class="textarea-wrap">
            <div class="comment-id">
              김농협
            </div>
            <v-textarea
              v-model="localMessage"
              variant="solo"
              density="compact"
              placeholder="댓글을 남겨보세요."
              maxlength="500"
              rows="1"
              auto-grow
              flat
            />
            <div class="comment-btns">
              <v-btn
                variant="text"
                density="compact"
                color="quaternary"
                :ripple="false"
                @click="$emit('cancel-edit', comment)"
              >
                취소
              </v-btn>
              <v-btn
                variant="text"
                density="compact"
                color="quaternary"
                :disabled="!localMessage.trim()"
                :ripple="false"
              >
                등록
              </v-btn>
            </div>
          </div>
        </div>

        <!-- 내용 -->
        <div
          v-else
          class="comment"
        >
          <v-row
            align="center"
            class="comment-top"
          >
            <div class="comment-id text-tertiary">
              {{ comment.userId }}
            </div>
            <v-spacer />
            <v-btn
              v-if="!comment.isMine"
              variant="text"
              density="compact"
              color="quaternary"
              :ripple="false"
              @click="ReportComplete = true"
            >
              신고하기
            </v-btn>
          </v-row>
          <p class="context text-gray">
            {{ comment.content }}
          </p>
          <div class="tools">
            <p class="stamp">
              <span>{{ comment.date }}</span>
              <span>{{ comment.time }}</span>
            </p>
            <v-btn
              variant="text"
              density="compact"
              color="quaternary"
              :ripple="false"
              @click="$emit('toggle-reply', comment)"
            >
              답글쓰기
            </v-btn>
            <ButtonLike
              :initial-liked="false"
              :initial-likes="comment.likes"
            />
          </div>
          <div
            v-if="comment.isMine"
            class="comment-btns"
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
      </div>

      <!-- 대댓글 작성 -->
      <div
        v-if="comment.replyMode"
        class="comment-write depth2"
      >
        <div class="textarea-wrap">
          <div class="comment-id">
            김농협
          </div>
          <v-textarea
            v-model="localReplyMessage"
            variant="solo"
            density="compact"
            placeholder="답글을 남겨보세요."
            maxlength="500"
            rows="1"
            auto-grow
            flat
          />
          <div class="comment-btns">
            <v-btn
              variant="text"
              density="compact"
              color="quaternary"
              :ripple="false"
              @click="comment.replyMode = false"
            >
              취소
            </v-btn>
            <v-btn
              variant="text"
              density="compact"
              color="quaternary"
              :disabled="!localReplyMessage.trim()"
              :ripple="false"
            >
              등록
            </v-btn>
          </div>
        </div>
      </div>
      
      <!-- 대댓글 영역 -->
      <template
        v-for="reply in comment.replies"
        :key="reply.id"
      >
        <div
          class="comment-area depth2"
          :class="{ mine: reply.isMine }"
        >
          <!-- 수정 -->
          <div
            v-if="reply.editMode"
            class="comment-write"
          >
            <div class="textarea-wrap">
              <div class="comment-id">
                김농협
              </div>
              <v-textarea
                v-model="localMessage"
                variant="solo"
                density="compact"
                placeholder="댓글을 남겨보세요."
                maxlength="500"
                rows="1"
                auto-grow
                flat
              />
              <div class="comment-btns">
                <v-btn
                  variant="text"
                  density="compact"
                  color="quaternary"
                  :ripple="false"
                  @click="$emit('cancel-edit', reply)"
                >
                  취소
                </v-btn>
                <v-btn
                  variant="text"
                  density="compact"
                  color="quaternary"
                  :disabled="!localMessage.trim()"
                  :ripple="false"
                >
                  등록
                </v-btn>
              </div>
            </div>
          </div>

          <!-- 내용 -->
          <div
            v-else
            class="comment"
          >
            <v-row
              align="center"
              class="comment-top"
            >
              <div class="comment-id text-tertiary">
                {{ reply.userId }}
              </div>
              <v-spacer />
              <v-btn
                v-if="!reply.isMine"
                variant="text"
                density="compact"
                color="quaternary"
                :ripple="false"
                @click="ReportComplete2 = true"
              >
                신고하기
              </v-btn>
            </v-row>
            <p class="context text-gray">
              {{ reply.content }}
            </p>
            <div class="tools">
              <p class="stamp">
                <span>{{ reply.date }}</span>
                <span>{{ reply.stamp }}</span>
              </p>
              <ButtonLike
                :initial-liked="false"
                :initial-likes="reply.likes || 0"
              />
            </div>
            <div
              v-if="reply.isMine"
              class="comment-btns"
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
        </div>
      </template>

      <v-divider
        v-if="index < comments.length - 1"
        color="secondary"
      />
    </div>
  </div>
  <v-empty-state
    v-else
    text="'등록된 댓글이 없습니다."
    icon="false"
    bg-color="#FEFEFE"
    :height="isDesktop ? '81': '59'"
  />


  <!-- alert(sample) -->
  <!-- 신고완료 -->
  <v-dialog
    v-model="ReportComplete"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="ReportComplete = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <v-icon icon="custom:complete" />
        <strong class="title-5-bd">신고완료</strong>
        <p class="text-4">
          댓글 신고완료 되었습니다.<br>
          관리자가 검토 후<br>빠른 시간안에 처리하겠습니다.
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          size="large"
          @click="ReportComplete = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
  <!-- 신고버튼 다시 누르면 -->
  <v-dialog
    v-model="ReportComplete2"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="ReportComplete2 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <v-icon icon="custom:complete" />
        <strong class="title-5-bd">신고완료</strong>
        <p class="text-4">
          이미 신고하신 댓글입니다.<br>
          관리자가 검토 후<br>빠른 시간안에 처리하겠습니다.
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          size="large"
          @click="ReportComplete2 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
const props = defineProps({
  comments: { 
    type: Array, 
    required: true 
  },
  writeShow: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  replyMessage: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'update:message',
  'update:replyMessage', 
  'toggle-reply', 
  'cancel-edit', 
  'write-toggle'
])

const isDesktop = inject("isDesktop");

//alert
const ReportComplete = ref(false);
const ReportComplete2 = ref(false);

const localMessage = computed({
  get: () => props.message || '',
  set: (val) => emit('update:message', val)
})

const localReplyMessage = computed({
  get: () => props.replyMessage,
  set: (val) => emit('update:replyMessage', val)
})

const emitWriteToggle = () => emit('write-toggle')

const getTotalCommentCount = (comments) => {
  return comments.reduce((total, comment) => {
    return total + 1 + comment.replies.length
  }, 0)
}

const totalCommentCount = computed(() => getTotalCommentCount(props.comments))
</script>
