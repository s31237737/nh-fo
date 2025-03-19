<template>
  <section
    class="user-container"
  >
    <!-- 프로필 섹션 -->
    <div class="profile">
      <v-avatar size="60">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="profile"
        />
      </v-avatar>
      <div class="profile-info">
        <h2 class="name">
          김농협님
        </h2>
        <p class="subtitle">
          안녕하세요.
        </p>
        <p class="id">
          <span>창전6통</span>
          <v-divider
            vertical
          />
          <span>245678</span>
        </p>
      </div>
      <div class="btns">
        <v-btn
          size="large"
          color="primary"
          prepend-icon="custom:admin"
        >
          관리자
        </v-btn>
        <v-btn
          size="large"
          color="info"
          prepend-icon="custom:logout"
        >
          로그아웃
        </v-btn>
      </div>
    </div>

    <!-- 내가 쓰는 앱 -->
    <div class="my-app">
      <router-link
        to="/"
        class="link-btn-arrow"
      >
        <span>내가 쓰는 앱</span>
        <v-icon
          icon="custom:arrow-right"
          color="primary"
        />
      </router-link>

      <v-list
        class="app-list"
        border
      >
        <v-list-item
          v-for="(item, index) in myApps"
          :key="index"
        >
          <template #prepend>
            <v-img
              :width="24"
              :src="getImageUrl(item.image)"
            />
          </template>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <template #append>
            <v-btn
              color="info"
              size="small"
            >
              앱 열기
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <!-- 바로가기 버튼 -->
    <v-btn-group
      variant="outlined"
    >
      <v-btn
        :ripple="false"
        to="/"
      >
        <v-icon
          size="x-large"
          icon="custom:schedule"
        />
        <span>일정관리</span>
      </v-btn>

      <v-btn
        :ripple="false"
        to="/"
      >
        <v-icon
          size="x-large"
          icon="custom:report"
        />
        <span>불편신고</span>
      </v-btn>
    </v-btn-group>
  </section>
</template>

<script setup>
import { ref } from "vue";
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
const myApps = ref([
  { name: "공통총무알리미", image: "@temp_img_app_icon01.png" },
  { name: "퇴비비료생산 및 출고", image: "@temp_img_app_icon02.png" },
  { name: "하나로마트 식품 안전관리", image: "@temp_img_app_icon01.png" },
  { name: "시설순찰일지", image: "@temp_img_app_icon02.png" },
]);
</script>
