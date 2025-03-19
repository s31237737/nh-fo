<template>
  <section
    class="user-container"
  >
    <!-- 프로필 섹션 -->
    <div class="profile">
      <v-btn
        size="60"
        icon="custom:edit-blue"
        class="edit-profile"
      >
        <v-avatar size="60">
          <v-img
            src="@/assets/images/profile.png"
            alt="profile"
          />
        </v-avatar>
      </v-btn>

      <p class="greetings">
        <span><strong>김농협</strong>님</span> <span>안녕하세요.</span>
      </p>
      <p class="info">
        <span>창전6통</span>
        <v-divider
          vertical
        />
        <span>245678</span>
      </p>
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
        v-if="myApps.length > 0"
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
      <v-empty-state

        justify="start"
        :icon="null"
      >
        <template #title>
          <div class="text-3-md">
            NH 업스토어만의,<br>다양한 앱을 사용해보세요.
          </div>
        </template>
        <template #actions>
          <v-btn
            color="primary"
            size="large"
            to="Apps"
          >
            APPs 보러가기
          </v-btn>
        </template>
      </v-empty-state>
    </div>

    <!-- 바로가기 버튼 -->
    <v-btn-group
      variant="outlined"
    >
      <v-btn
        :ripple="false"
      >
        <v-icon
          size="x-large"
          icon="custom:schedule"
        />
        <span>일정관리</span>
      </v-btn>

      <v-btn
        :ripple="false"
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
