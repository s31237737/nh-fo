<template>
  <v-navigation-drawer
    width="254px"
    class="user-container"
  >
    <!-- 프로필 섹션 -->
    <v-card class="profile-card">
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
          창전6통 | 245678
        </p>
      </div>
    </v-card>

    <div class="d-flex">
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
    <!-- 버튼 섹션 -->

    <!-- 내가 쓰는 앱 -->
    <div class="app-section">
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

      <v-list>
        <v-list-item
          v-for="(app, index) in apps"
          :key="index"
        >
          <template #prepend>
            <v-icon>{{ app.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ app.name }}</v-list-item-title>
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

    <!-- 하단 버튼 -->
    <div class="bottom-actions">
      <v-btn>
        <v-icon left>
          mdi-calendar
        </v-icon> 일정관리
      </v-btn>
      <v-divider
        vertical
        inset
        color="primary"
        class="ma-0"
      />
      <v-btn>
        <v-icon left>
          mdi-alert
        </v-icon> 불편신고
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const apps = ref([
  { name: "공통총무알리미", icon: "mdi-office-building" },
  { name: "퇴비비료생산 및 출고", icon: "mdi-flask-outline" },
  { name: "하나로마트 식품 안전관리", icon: "mdi-cart-outline" },
  { name: "시설순찰일지", icon: "mdi-note-text-outline" },
]);
</script>
