<template>
  <v-toolbar>
    <template v-if="isSetting">
      <v-btn
        size="24"
        icon="custom:arrow-left"
        @click="toggleSetting"
      />
      <v-toolbar-title text="알림설정" />
    </template>
    <template v-else>
      <v-toolbar-title text="알림" />
      <v-btn
        size="24"
        icon="custom:setting"
        @click="toggleSetting"
      />
    </template>
  </v-toolbar>
  <v-divider />

  <template v-if="isSetting">
    <v-card-text class="alarm-setting">
      <p>알림 송신 채널 설정</p>
      <v-switch
        model-value="emailSwitch"
        label="이메일 송신"
        class="switch-flip"
      />
    </v-card-text>
  </template>
  <template v-else>
    <v-card-text v-if="!isAdmin">
      <v-list v-if="notifications.length">
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
        >
          <v-list-item-title :class="{ dot: item.isNew }">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-empty-state
        v-else
        text="알림이 없습니다."
        icon="custom:warning"
        size="40"
      />
    </v-card-text>
  </template>
</template>

<script setup>
defineProps({
  isSetting: Boolean,
  toggleSetting: {
    type: Function,
    default: () => {},
  },
  notifications: {
    type: Array,
    default: () => []  // 기본값을 빈 배열로 설정
  },
  emailSwitch:  {
    type: Boolean,
    default: true
  },
  isAdmin: Boolean,
  activeTab: {
    type: String,
    default: "store",
  },
});
</script>
