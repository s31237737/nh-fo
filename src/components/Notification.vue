<template>
  <v-btn
    icon
    density="comfortable"
  >
    <v-badge
      v-if="hasNotification"
      :content="notificationCount"
    >
      <v-icon
        :icon="icon"
        density="comfortable"
      />
    </v-badge>
    <v-icon
      v-else
      :icon="icon"
      density="comfortable"
    />
    <v-menu
      activator="parent"
      :close-on-content-click="false"
    >
      <v-card
        class="alarm"
        scrollable
      >
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
              :model-value="emailSwitch"
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
                <v-list-item-title :class="{ 'dot': item.isNew }">
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
          <template v-else>
            <v-chip-group
              v-model="activeTab"
              variant="outlined"
              class="popover-tab"
              selected-class="selected"
              mandatory
            >
              <v-chip
                size="small"
                value="store"
              >
                업스토어 알림
              </v-chip>
              <v-chip
                size="small"
                value="admin"
              >
                관리자 알림
              </v-chip>
            </v-chip-group>
            <v-card-text>
              <v-window v-model="activeTab">
                <v-window-item value="store">
                  <v-list v-if="notifications.length">
                    <v-list-item
                      v-for="(item, index) in notifications"
                      :key="index"
                    >
                      <v-list-item-title :class="{ 'dot': item.isNew }">
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
                </v-window-item>
                <v-window-item value="admin">
                  <v-list v-if="notifications.length">
                    <v-list-item
                      v-for="(item, index) in notifications"
                      :key="index"
                    >
                      <v-list-item-title :class="{ 'dot': item.isNew }">
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
                </v-window-item>
              </v-window>
            </v-card-text>
          </template>
        </template>
      </v-card>
    </v-menu>
  </v-btn>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
  hasNotification: Boolean,
  notificationCount: {
    type: Number,
    default: 0
  },
  isAdmin: Boolean,
  icon: {
    type: String,
    default: 'custom:alarm'
  },
  notifications: {
    type: Array,
    default: () => []
  },
  emailSwitch: Boolean
});

defineEmits(['update:emailSwitch']);

const isSetting = ref(false);
const activeTab = ref('store');

const toggleSetting = () => {
  isSetting.value = !isSetting.value;
};
</script>
