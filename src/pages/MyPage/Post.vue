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
            <!-- 게시글 수 -->
            <span class="text-success">8</span>
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
      <v-btn
        v-if="mySubTab === 2 && boardLength > 0"
        color="info"
        size="large"
        class="ml-auto"
        @click="openPopup = true"
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
        <router-view @update:board-length="boardLength = $event" />
      </v-window-item>
    </v-window>
  </v-container>
  <!-- // 탭 영역 -->
  <!-- 불편신고 팝업 -->
  <PopupReportIssue v-model="openPopup" />
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import PopupReportIssue from "@/pages/popup/PopupReportIssue.vue";


const openPopup = ref(false);

// 탭 처리
const route = useRoute();
const router = useRouter();

const mySubTab = ref(0);
const boardLength = ref(0);//퍼블용

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
<route>
{ redirect: '/MyPage/Post/Qna'}
</route>
