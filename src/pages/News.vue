<template>
  <v-sheet
    class="top-banner"
    :height="isDesktop ? '370' : 'auto'"
  >
    <v-container class="inner">
      <v-card>
        <v-card-item>
          <v-card-subtitle>
            새소식 및 도움말
          </v-card-subtitle>
          <v-card-title>
            안녕하세요,<br>무엇을 도와드릴까요?
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              :width="isDesktop ? '498' : '100%'"
              class="search-inp"
              placeholder="검색어를 입력해주세요"
              append-inner-icon="custom:search"
              rounded="pill"
              @click:append-inner="onAppendClick"
            />
          </v-card-text>
          <template #append>
            <v-img
              :width="isDesktop ? '300': '240'"
              src="@/assets/images/img_news_banner.png"
            />
          </template>
        </v-card-item>
      </v-card>
    </v-container>
  </v-sheet>
  <v-container class="inner">
    <section class="board-list">
      <div class="tit-wrap">
        <v-slide-group
          v-model="tab"
          center-active
        >
          <v-slide-group-item
            v-for="(item, i) in tabBtn"
            :key="i"
            v-slot="{ isSelected }"
          >
            <v-btn
              size="large"
              :ripple="false"
              height="44"
              rounded="pill"
              :color="isSelected ? 'primary' : 'info'"
              @click="tab = i"
            >
              {{ item.btn }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <!-- 일반 div로 탭 콘텐츠 구현 -->
      <div class="tab-container">
        <div v-if="tab === 0">
          <NewsTab01 />
        </div>
        <div v-else-if="tab === 1">
          <NewsTab02 />
        </div>
        <div v-else-if="tab === 2">
          <NewsTab03 />
        </div>
        <div v-else-if="tab === 3">
          <NewsTab04 />
        </div>
      </div>
    </section>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";
import NewsTab01 from "@/pages/NewsTab01.vue";
import NewsTab02 from "@/pages/NewsTab02.vue";
import NewsTab03 from "@/pages/NewsTab03.vue";
import NewsTab04 from "@/pages/NewsTab04.vue";

const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");

const search = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};

const tab = ref(0);
const tabBtn = ref([
  { btn: "새소식" },
  { btn: "자주 묻는 질문" },
  { btn: "Q&A" },
  { btn: "앱 가이드" },
]);
</script>

<style scoped>
.tab-container > div {
  display: none;
}

.tab-container > div:nth-child(1) {
  display: block;
}
</style>
