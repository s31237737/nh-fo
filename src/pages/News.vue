<template>
  <!-- 검색영역 -->
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
  <!-- // 검색영역 -->
  <!-- 탭 영역 -->
  <v-container class="inner">
    <div class="tit-wrap mb-0">
      <v-slide-group
        v-model="tab"
        center-active
      >
        <v-slide-group-item
          v-for="(item, i) in tabItem"
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
            <!-- 검색어 강조 예제 -->
            <span class="text-success">8</span>
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
      <v-btn
        v-if="tab === 2"
        color="info"
        size="large"
        class="ml-auto"
      >
        글쓰기
      </v-btn>
    </div>
    <v-window
      v-model="tab"
      class="tab-container"
    >
      <v-window-item
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
        :transition="false"
      >
        <component :is="item.component" />
      </v-window-item>
    </v-window>
  </v-container>
  <!-- // 탭 영역 -->
</template>

<script setup>
import { ref, watch, shallowRef, inject } from "vue";
import { useRoute, useRouter } from "vue-router";

import NewsTab01 from "@/pages/NewsTab01.vue";
import NewsTab02 from "@/pages/NewsTab02.vue";
import NewsTab03 from "@/pages/NewsTab03.vue";
import NewsTab04 from "@/pages/NewsTab04.vue";

const isDesktop = inject("isDesktop");

const search = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};


// 탭 처리
const route = useRoute();
const router = useRouter();

const tab = ref(route.query.tab ? Number(route.query.tab) : 0);

watch(tab, (newTab) => {
  if (newTab !== Number(route.query.tab)) {
    router.replace({ query: { tab: newTab } });
  }
});

watch(() => route.query.tab, (newTab) => {
  if (newTab !== undefined && Number(newTab) !== tab.value) {
    tab.value = Number(newTab);
  }
});

const tabItem = shallowRef([
  { btn: "새소식", component: NewsTab01 },
  { btn: "자주 묻는 질문", component: NewsTab02 },
  { btn: "Q&A", component: NewsTab03 },
  { btn: "앱 가이드", component: NewsTab04 },
]);
</script>

