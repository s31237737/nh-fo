<template>
  <!-- 모바일 메뉴 -->
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    temporary
    floating
  >
    <!-- 내용 추가 -->
  </v-navigation-drawer>

  <v-app-bar
    class="header"
    :height="!isMobile ? 80 : 52"
  >
    <template #prepend>
      <router-link to="/">
        <v-img
          :width="!isMobile ? 180 : 144"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
      <v-btn-toggle
        v-if="!isMobile"
        class="gnb"
        color="secondary"
      >
        <v-btn
          variant="plain"
          to=""
        >
          About
        </v-btn>
        <v-btn
          variant="plain"
          to="Apps"
        >
          APPS
        </v-btn>
        <v-btn
          variant="plain"
        >
          지원 및 도움말

          <v-menu
            activator="parent"
            content-class="popover"
          >
            <v-card>
              <v-list>
                <v-list-item to="">
                  자주 묻는 질문
                </v-list-item>
                <v-list-item to="">
                  공지사항
                </v-list-item>
                <v-list-item to="">
                  Q&amp;A
                </v-list-item>
                <v-list-item to="">
                  앱가이드
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </v-btn>
        <v-btn
          variant="plain"
          to=""
        >
          커뮤니티
        </v-btn>
      </v-btn-toggle>
    </template>
    <template #append>
      <!-- 로그인연장 -->
      <div
        v-if="!isMobile"
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
      />
      <v-text-field
        v-if="false"
        v-model="search"
        width="300"
        class="search-inp"
        placeholder="앱과 앱가이드를 검색해보세요"
        append-inner-icon="custom:search"
        @click:append-inner="onAppendClick"
      />
      <!-- 알림 -->
      <Alarm />

      <!-- 프로필 -->
      <v-btn
        v-if="!isMobile"
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
          content-class="popover"
          attach=".v-app-bar"
          transition="false"
        >
          <v-card>
            <v-list :items="items" />
          </v-card>
        </v-menu>
      </v-btn>

      <!-- 모바일 메뉴 버튼-->
      <v-app-bar-nav-icon
        v-if="isMobile"
        density="comfortable"
        @click="drawer = !drawer"
      />
    </template>
  </v-app-bar>
</template>

<script setup>
import { inject, ref, onMounted, computed } from 'vue';

const isMobile = inject('isMobile');
const drawer = ref(false);

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
  setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value -= 1;
    }
  }, 1000); // 1초마다 갱신
});

// 시간 연장
const onExtendClick = () => {
  remainingTime.value += 60 * 60;
};

// 프로필
const items = ref([
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
