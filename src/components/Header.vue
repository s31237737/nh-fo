<template>
  <v-app-bar
    class="header"
    :height="isDesktop ? 80 : 52"
  >
    <template #prepend>
      <router-link to="/">
        <v-img
          :width="isDesktop ? 180 : 144"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
      <v-btn-toggle
        v-if="isDesktop"
        class="gnb"
        color="success"
        density="comfortable"
      >
        <v-btn
          to=""
        >
          About
        </v-btn>
        <v-btn
          to="Apps"
        >
          APPS
        </v-btn>

        <v-btn>
          새소식 및 도움말
          <v-menu
            activator="parent"
          >
            <v-card>
              <v-list :items="gnbItems" />
            </v-card>
          </v-menu>
        </v-btn>
        <v-btn
          to=""
        >
          커뮤니티
        </v-btn>
        <v-btn
          to="Guide"
        >
          Pub
        </v-btn>
      </v-btn-toggle>
    </template>
    <template #append>
      <!-- 캘린더 -->
      <v-btn
        icon="custom:calendar"
        density="comfortable"
      />
      <!-- 로그인연장 -->
      <div
        v-if="isDesktop"
        class="login-session"
      >
        <span class="timer">
          <v-icon
            size="small"
          >
            custom:clock
          </v-icon>
          {{ timeLeftFormatted }}
        </span>

        <v-btn
          color="primary"
          size="small"
          variant="flat"
          @click="onExtendClick"
        >
          연장
        </v-btn>
      </div>
      <!-- 검색 -->
      <v-btn
        icon="custom:search"
        density="comfortable"
        @click.stop="drawer = !drawer"
      />

      <!-- 알림 -->
      <Alarm />

      <Notification
        :has-notification="true"
        :notification-count="99"
        :is-admin="true"
        :email-switch="emailSwitch"
        :icon="'custom:alarm'"
        :notifications="notifications"
        @update:email-switch="emailSwitch = $event"
      />

      <!-- 프로필 -->
      <v-btn
        v-if="isDesktop"
        icon
        density="comfortable"
      >
        <v-avatar size="32">
          <v-img
            src="@/assets/images/profile.png"
          />
        </v-avatar>
        <v-menu
          activator="parent"
        >
          <v-card>
            <v-list :items="profileItems" />
          </v-card>
        </v-menu>
      </v-btn>

      <!-- 모바일 메뉴 버튼-->
      <v-app-bar-nav-icon
        v-if="!isDesktop"
        density="comfortable"
      />
    </template>
  </v-app-bar>
  <!-- 모바일 메뉴 -->
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    temporary
    floating
    width="60"
  >
    <v-container
      class="inner"
    >
      <v-text-field
        v-model="search"
        width="300"
        class="search-inp"
        placeholder="앱과 앱가이드를 검색해보세요"
        append-inner-icon="custom:search"
        rounded="pill"
        @click:append-inner="onAppendClick"
      />
      <v-btn
        icon="custom:close"
        density="comfortable"
        @click="drawer = false"
      />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, computed } from 'vue';

const notifications = ref([
  {
    title: '새로운 알림이 있습니다!',
    date: '2025-09-30 09:38',
    isNew: true,
  },
  {
    title: '업데이트 알림',
    date: '2025-09-30 09:38',
    isNew: false,
  },
]);
const isMobile = inject('isMobile');
const isTablet = inject('isTablet');
const isDesktop = inject('isDesktop');
const drawer = ref(null);
const emailSwitch = ref(true);

// 검색
const search = ref('');
const onAppendClick = () => {
  alert('Append icon clicked!');
}

// 남은 시간을 초 단위로 관리
const remainingTime = ref(5 * 60);
// 남은 시간을 "분:초" 형식으로 반환하는 계산된 속성
const timeLeftFormatted = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

onMounted(() => {
  const intervalId = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value -= 1;
    }
  }, 1000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

// 시간 연장
const onExtendClick = () => {
  remainingTime.value += 60 * 60;
};

// gnb
const gnbItems = ref([

  {
    title: '새소식',
    value: 1,
    props: {
      to: "",
    },
  },
   {
    title: '자주 묻는 질문',
    value: 2,
    props: {
      to: "",
    },
  },
  {
    title: 'Q&A',
    value: 3,
    props: {
      to: "",
    },
  },
  {
    title: '앱 가이드',
    value: 4,
    props: {
      to: "",
    },
  },
]);
// 프로필
const profileItems = ref([
  {
    title: '마이페이지',
    value: 1,
     props: {
      to: "mypage",
    },
  },
  {
    title: '관리자 페이지',
    value: 2,
    props: {
      appendIcon: 'custom:new-window',
    },
  },
  {
    title: '로그아웃',
    value: 3,
  },
]);
</script>
