<template>
  <v-container class="inner">
    <div class="tit-wrap mb-0">
      <v-slide-group
        v-model="mySubTab"
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
        v-if="mySubTab === 2"
        color="info"
        size="large"
        class="ml-auto"
      >
        불편신고 작성하기
      </v-btn>
    </div>
    <v-window
      v-model="mySubTab"
      class="tab-container"
      :touch="false"
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

const mySubTab = ref(0);

const tabItem = ref([
  { btn: "Q&A", link: "/MyPage/Post/Qna" },
  { btn: "아이디어 제안", link: "/MyPage/Post/Community" },
  { btn: "불편신고", link: "/MyPage/Post/ReportIssue" },
]);

watch(
  () => route.path,
  (newPath) => {
    const idx = tabItem.value.findIndex((item) => newPath.startsWith(item.link));
    if (idx !== -1 && mySubTab.value !== idx) {
      mySubTab.value = idx;
    }
  },
  { immediate: true }
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

