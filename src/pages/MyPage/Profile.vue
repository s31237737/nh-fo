<template>
  <div class="my-profile">
    <!-- 프로필 -->
    <v-sheet>
      <v-btn
        size="100"
        icon="custom:edit-blue"
        class="edit-profile"
        @click="openPopup01 = true"
      >
        <v-avatar size="100">
          <v-img
            src="@/assets/images/img_avatar01.jpg"
            alt="profile"
          />
        </v-avatar>
      </v-btn>
    </v-sheet>
    <!-- 정보 -->
    <v-sheet>
      <dl class="profile-info">
        <dt>이름</dt>
        <dd>김농협</dd>
        <v-divider />
        <dt>소속 사무소</dt>
        <dd>사무소명</dd>
        <v-divider />
        <dt>내 직무</dt>
        <dd>
          <p class="details-bar">
            <span>직무명 1 세부직무명 1</span>
          </p>
          <v-btn
            class="btn-selectJob"
            variant="outlined"
            append-icon="custom:select"
            :ripple="false"
            :width="isDesktop? '387' : '100%'"
            @click="openPopup02 = true"
          >
            직무명
          </v-btn>
        </dd>
        <v-divider />
        <dt>관심 직무</dt>
        <dd>
          <p class="details-bar">
            <span>직무명 1 세부직무명 1</span>
            <span>직무명 1 세부직무명 1</span>
            <span>직무명 1 세부직무명 1</span>
            <span>직무명 1 세부직무명 1</span>
            <span>직무명 1 세부직무명 1</span>
          </p>
          <v-btn
            class="btn-selectJob"
            variant="outlined"
            append-icon="custom:select"
            :ripple="false"
            :width="isDesktop? '387' : '100%'"
            @click="openPopup03 = true"
          >
            직무명
          </v-btn>
        </dd>
        <v-divider />
        <dt>개인우편</dt>
        <dd>nonghyup@gmail.com</dd>
        <v-divider />
        <dt>휴대전화</dt>
        <dd>010-1234-5678</dd>
      </dl>
      <div class="page-actions">
        <v-btn
          color="primary"
          size="x-large"
          @click="alert = true"
        >
          변경사항 저장
        </v-btn>
      </div>
    </v-sheet>
  </div>

  <!-- 프로필 수정 팝업 -->
  <PopupProfileImage v-model="openPopup01" />
  <PopupJobSelect
    v-model="openPopup02"
    title="내 직무선택"
  />
  <PopupJobSelect
    v-model="openPopup03"
    title="관심 직무선택"
  />
  <!-- 변경사항 저장 -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
    @after-leave="isSave = false"
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
        <template v-if="!isSave">
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">변경사항 저장</strong>
          <p class="text-4">
            변경사항을 저장하시겠습니까?
          </p>
        </template>
        <template v-else>
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">저장 완료</strong>
          <p class="text-4">
            변경사항 저장이 완료되었습니다.
          </p>
        </template>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <template v-if="!isSave">
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
            @click="isSave = true"
          >
            확인
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
import { ref, computed, inject } from "vue";
import PopupProfileImage from '@/pages/popup/PopupProfileImage.vue';
import PopupJobSelect from '@/pages/popup/PopupJobSelect.vue';

const isDesktop = inject("isDesktop");

const openPopup01 = ref(false);
const openPopup02 = ref(false);
const openPopup03 = ref(false);
const alert = ref(false);
const isSave = ref(false);

</script>
