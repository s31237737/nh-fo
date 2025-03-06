<template>
  <v-btn
    icon
    density="comfortable"
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
            <v-toolbar-title
              text="알림설정"
            />
          </template>
          <template v-else>
            <v-toolbar-title
              text="알림"
            />
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
              v-model="emailSwitch"
              label="이메일 송신"
              class="switch-flip"
            />
          </v-card-text>
        </template>
        <template v-else>
          <!-- 일반 알림 -->
          <v-card-text v-if="!isAdmin">
            <v-list v-if="notifications.length">
              <v-list-item
                v-for="(item, index) in notifications"
                :key="index"
              >
                <v-list-item-title :class="{'dot':item.isNew}">
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
          <!-- // 일반 알림 -->
          <!-- 관리자 알림 -->
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
              <v-window
                v-model="activeTab"
              >
                <v-window-item value="store">
                  <v-list v-if="notifications.length">
                    <v-list-item
                      v-for="(item, index) in notifications"
                      :key="index"
                    >
                      <v-list-item-title :class="{'dot':item.isNew}">
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
                      <v-list-item-title :class="{'dot':item.isNew}">
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
        <!-- // 관리자 알림 -->
        </template>
      </v-card>
    </v-menu>
  </v-btn>
</template>
<script setup>import { ref } from 'vue';
const hasNotification = ref(true); // 알림이 있는지 여부
const isSetting= ref(false); // 설정 버튼 클릭시
const isAdmin= ref(true); // 관리자 권한이 있는지 여부

const activeTab = ref('store'); // 현재 활성화된 탭
const emailSwitch = ref(true); // 이메일 송신 스위치

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

// 알림 설정 토글
const toggleSetting = () => {
  isSetting.value = !isSetting.value;
};
</script>
