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
            :to="item.link"
            @click="onTabChange(i)"
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
        to="/QnaWrite"
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
        <router-view />
      </v-window-item>
    </v-window>
  </v-container>
  <!-- // 탭 영역 -->
</template>

<script setup>
import { ref, watch, inject } from "vue";
import { useRoute, useRouter } from "vue-router";


const isDesktop = inject("isDesktop");

const search = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};


// 탭 처리
const route = useRoute();
const router = useRouter();

const tab = ref(0);
const tabItem = ref([
  { btn: "새소식", link: "/News/Notice" },
  { btn: "자주 묻는 질문", link: "/News/Faq" },
  { btn: "Q&A", link: "/News/Qna" },
  { btn: "앱 가이드", link: "/News/Guide" },
]);

watch(
  () => route.path,
  (newPath) => {
    const idx = tabItem.value.findIndex((item) => newPath.startsWith(item.link));
    if (idx !== -1 && tab.value !== idx) {
      tab.value = idx;
    }
  },
  { immediate: true }
);

watch(
  () => tab.value,
  (newTab) => {
    if (tabItem.value[newTab]) {
      router.push(tabItem.value[newTab].link).catch((err) => {
        console.error("Router push error:", err);
      });
    }
  }
);

function onTabChange(newTab) {
  if (tabItem.value[newTab]) {
    router.push(tabItem.value[newTab].link).catch((err) => {
      console.error("Router push error:", err);
    });
  } else {
    console.error("Invalid tab index:", newTab);
  }
}

</script>

