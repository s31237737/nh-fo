<template>
  <div>
    <v-btn
      icon
      density="comfortable"
      @click="!isDesktop ? (dialog = true) : null"
    >
      <v-badge
        v-if="hasNotification"
        content="99"
      >
        <v-icon
          icon="custom:alarm"
          density="comfortable"
        />
      </v-badge>
      <v-icon
        v-else
        icon="custom:alarm"
        density="comfortable"
      />
    </v-btn>

    <!-- 데스크탑: v-menu -->
    <v-menu
      v-if="isDesktop"
      activator="parent"
      :close-on-content-click="false"
    >
      <v-card
        class="alarm"
        scrollable
      >
        <NotificationContent
          :is-setting="isSetting"
          :toggle-setting="toggleSetting"
          :notifications="notifications"
          :email-switch="emailSwitch"
          :is-admin="isAdmin"
          :active-tab="activeTab"
          @update:model-value="updateEmailSwitch"
        />
      </v-card>
    </v-menu>

    <!-- 모바일: v-dialog -->
    <v-dialog
      v-model="dialog"
      transition="slide-x-animation"
      fullscreen
    >
      <v-card
        class="alarm"
        scrollable
      >
        <NotificationContent
          :is-setting="isSetting"
          :toggle-setting="toggleSetting"
          :notifications="notifications"
          :email-switch="emailSwitch"
          :is-admin="isAdmin"
          :active-tab="activeTab"
          @update:model-value="updateEmailSwitch"
        />
        <v-card-actions>
          <v-btn
            block
            @click="dialog = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inject } from 'vue';
const isDesktop = inject('isDesktop');

const hasNotification = ref(true);
const isSetting = ref(false);
const isAdmin = ref(true);
const activeTab = ref("store");
const emailSwitch = ref(true);
const dialog = ref(false);

const notifications = ref([
  {
    title: '알림 내용은 최대 2줄까지 제공 최대 글자 수 초과 시 닷(...) 처리 알림 내용은 최대 2줄까지',
    date: '2025-09-30 09:38',
    isNew: true,
  },
  {
    title: '업스토어 신규 앱 출시에 따라 땡땡땡땡 앱 업데이트 버전이 출시되었습니다. 지금 바로',
    date: '2025-09-30 09:38',
    isNew: true,
  },
  {
    title: '신규가입이 완료되었습니다.',
    date: '2025-09-30 09:38',


  },
  {
    title: 'NH QR 앱 사용 신청이 수락되었습니다.',
    date: '2025-09-30 09:38',
  },
  {
    title: '사용중이신 [앱 이름] 앱이 업데이트 되었습니다. : 댓글기능 개선, 작성 입력 시 오류 최소화',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
]);


const toggleSetting = () => {
  isSetting.value = !isSetting.value;
};
</script>
