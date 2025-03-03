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

  <v-app-bar :height="isMobile ? 52 : 80">
    <template #prepend>
      <router-link to="/">
        <v-img
          :width="isMobile ? 120 : 130"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
    </template>
    <template #append>
      <v-btn
        v-if="!isMobile"
        icon="mdi-heart"
      />
      <!-- 로그인 연장 팝업 -->
      <v-btn
        size="small"
        text="로그인 연장 팝업"
        @click="loginPop = true"
      />
      <v-dialog
        v-model="loginPop"
        class="popup-sm"
      >
        <v-card>
          <v-card-title>
            <span>로그인 연장</span>
            <v-btn
              icon="custom:close"
              density="comfortable"
              variant="text"
              @click="loginPop = false"
            />
          </v-card-title>

          <v-card-text>
            <p class="text-2">
              $60$초 후 자동 로그아웃 됩니다.<br>계속 사용하려면 로그인을 연장해주세요.
            </p>
            <p class="text-1-md mt-5">
              남은 시간 : $60$초
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="secondary"
              size="large"
              @click="loginPop = false"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              size="large"
            >
              로그인 연장
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- // 로그인 연장 팝업 -->
      <!-- 로그인연장 -->
      <div class="login-session">
        <span class="timer">
          <v-icon
            size="32"
          >
            custom:clock
          </v-icon>
          {{ timeLeftFormatted }}
        </span>
        <v-btn
          size="small"
          variant="outlined"
          @click="onExtendClick"
        >
          연장
        </v-btn>
      </div>
      <!-- 알림 -->
      <Alarm />

      <!-- 프로필 -->
      <v-btn
        icon
        size="40"
      >
        <v-avatar>
          <img
            width="40"
            src="@/assets/images/profile.png"
          >
        </v-avatar>
        <v-menu
          activator="parent"
          content-class="popover"
        >
          <v-card>
            <v-list :items="items" />
          </v-card>
        </v-menu>
      </v-btn>

      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = !drawer"
      />
    </template>
  </v-app-bar>
</template>

<script setup>
import { inject, ref, onMounted, computed } from 'vue';

const isMobile = inject('isMobile');
const drawer = ref(false);

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

const loginPop = ref(false);

// 프로필
 const items = ref([
  {
    title: '업스토어로 이동',
    value: 1,
  },
  {
    title: '로그아웃',
    value: 2,
  },
]);
</script>
