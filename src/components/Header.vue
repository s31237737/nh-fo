<template>
  <!-- 모바일 메뉴 -->
  <GnbDrawer v-model="gnbDrawer" />
  <v-app-bar
    class="header"
    :height="isDesktop ? 80 : 56"
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
          to="About"
        >
          About
        </v-btn>
        <v-btn
          to="Apps"
        >
          APPS
        </v-btn>

        <v-btn @click.stop="closeSearchDrawer">
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
        <v-btn>
          Pub
          <v-menu
            activator="parent"
          >
            <v-card>
              <v-list :items="pubItems" />
            </v-card>
          </v-menu>
        </v-btn>
      </v-btn-toggle>
    </template>
    <template #append>
      <!-- 캘린더 -->
      <v-btn
        v-if="isDesktop"
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
        @click.stop="toggleSearchDrawer"
      />

      <!-- 알림 -->
      <Alarm @click.stop="closeSearchDrawer" />

      <!-- 프로필 -->
      <v-btn
        v-if="isDesktop"
        icon
        density="comfortable"
        @click.stop="closeSearchDrawer"
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
      <v-btn
        v-if="!isDesktop"
        icon="custom:hamburger"
        @click.stop="toggleGnbDrawer"
      />
    </template>
  </v-app-bar>

  <!-- 검색 레이어-->
  <SearchDrawer v-model="searchDrawer" />
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, computed } from 'vue';

const isDesktop = inject('isDesktop');
const searchDrawer = ref(false);
const gnbDrawer = ref(false);

const toggleGnbDrawer = () => {
  gnbDrawer.value = !gnbDrawer.value;
  if (gnbDrawer.value) searchDrawer.value = false;
};
const toggleSearchDrawer = () => {
  searchDrawer.value = !searchDrawer.value;
  if (searchDrawer.value) gnbDrawer.value = false;
};
const closeSearchDrawer = () => {
  gnbDrawer.value = false;
  searchDrawer.value = false;
};


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

// pub
const pubItems = ref([
   {
    title: 'popup',
    value: 1,
    props: {
      to: "PopList",
    },
  },
   {
    title: 'guide',
    value: 2,
    props: {
      to: "Guide",
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
