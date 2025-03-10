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
const dialog = ref(false); // 모바일에서 다이얼로그 관리

const notifications = ref([
  { title: "알림 1", date: "2025-09-30 09:38", isNew: true },
  { title: "알림 2", date: "2025-09-30 09:38", isNew: true },
]);

const toggleSetting = () => {
  isSetting.value = !isSetting.value;
};
</script>
