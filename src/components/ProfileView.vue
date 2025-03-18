<template>
  <v-app-bar flat

    permanent
    class="profile-container"
  >
    <!-- 프로필 섹션 -->
    <v-card class="profile-card">
      <v-avatar size="60">
        <v-img
          src="https://randomuser.me/api/portraits/women/1.jpg"
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

    <!-- 버튼 섹션 -->
    <v-btn
      class="manage-btn"
      color="black"
      block
    >
      <v-icon left>
        mdi-account-cog
      </v-icon> 관리자
    </v-btn>
    <v-btn
      class="logout-btn"
      color="white"
      variant="outlined"
      block
    >
      <v-icon left>
        mdi-logout
      </v-icon> 로그아웃
    </v-btn>

    <!-- 내가 쓰는 앱 -->
    <div class="app-section">
      <h3 class="section-title">
        내가 쓰는 앱
      </h3>
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
              variant="outlined"
              size="small"
            >
              앱 열기
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <!-- 하단 버튼 -->
    <v-row class="bottom-actions">
      <v-col cols="6">
        <v-btn block>
          <v-icon left>
            mdi-calendar
          </v-icon> 일정관리
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block>
          <v-icon left>
            mdi-alert
          </v-icon> 불편신고
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const apps = ref([
  { name: "공통총무알리미", icon: "mdi-office-building" },
  { name: "퇴비비료생산 및 출...", icon: "mdi-flask-outline" },
  { name: "하나로마트 식품 안...", icon: "mdi-cart-outline" },
  { name: "시설순찰일지", icon: "mdi-note-text-outline" },
]);
</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
}

.profile-info {
  flex-grow: 1;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.subtitle {
  font-size: 14px;
  color: gray;
}

.id {
  font-size: 12px;
  color: darkgray;
}

.manage-btn {
  margin-top: 10px;
}

.logout-btn {
  margin-top: 5px;
}

.app-section {
  margin-top: 20px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.bottom-actions {
  margin-top: 20px;
}
</style>
