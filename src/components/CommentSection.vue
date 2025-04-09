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

  <!-- 댓글 등록 -->
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
  <ul class="comment-list">
    <li
      v-for="(comment, index) in comments"
      :key="comment.id"
      class="comment-item"
    >
      <!-- 댓글 영역 -->
      <div
        class="comment-area"
        :class="{ mine: comment.isMine }"
      >
        <!-- 내용 -->
        <div
          v-if="!comment.editMode"
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
              @click="comment.editMode = true"
            >
              수정
            </v-btn>
            <v-btn
              variant="text"
              density="compact"
              color="quaternary"
            >
              삭제
            </v-btn>
          </div>
        </div>

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
                @click="$emit('cancel-edit', comment)"
              >
                취소
              </v-btn>
              <v-btn
                variant="text"
                density="compact"
                color="quaternary"
                :disabled="!localMessage.trim()"
              >
                등록
              </v-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- 대댓글 영역 -->
      <div
        v-if="comment.replyMode || comment.replies.length > 0"
        class="reply-area"
      > 
        <!-- 대댓글 작성 -->
        <div
          v-if="comment.replyMode"
          class="comment-write"
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
                @click="comment.replyMode = false"
              >
                취소
              </v-btn>
              <v-btn
                variant="text"
                density="compact"
                color="quaternary"
                :disabled="!localReplyMessage.trim()"
              >
                등록
              </v-btn>
            </div>
          </div>
        </div>

        <!-- 대댓글 목록 -->
        <ul
          v-if="comment.replies.length"
          class="comment-list"
        >
          <li
            v-for="reply in comment.replies"
            :key="reply.id"
            class="comment-item"
            :class="{ mine: reply.isMine }"
          >
            <!-- 내용 -->
            <div
              v-if="!reply.editMode"
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
                  @click="reply.editMode = true"
                >
                  수정
                </v-btn>
                <v-btn
                  variant="text"
                  density="compact"
                  color="quaternary"
                >
                  삭제
                </v-btn>
              </div>
            </div>

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
                    @click="$emit('cancel-edit', reply)"
                  >
                    취소
                  </v-btn>
                  <v-btn
                    variant="text"
                    density="compact"
                    color="quaternary"
                    :disabled="!localMessage.trim()"
                  >
                    등록
                  </v-btn>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <v-divider
        v-if="index < comments.length - 1"
        color="secondary"
      />
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
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
