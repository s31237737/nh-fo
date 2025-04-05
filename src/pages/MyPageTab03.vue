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
            @click="mySubTab = i"
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


import MySubTab01 from "@/pages/MySubTab01.vue";
import MySubTab02 from "@/pages/MySubTab02.vue";
import MySubTab03 from "@/pages/MySubTab03.vue";

const isDesktop = inject("isDesktop");

const search = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};


// 탭 처리
const route = useRoute();
const router = useRouter();

const mySubTab = ref(route.query.mySubTab ? Number(route.query.mySubTab) : 0);

watch(mySubTab, (newTab) => {
  if (newTab !== Number(route.query.mySubTab)) {
    router.replace({ query: { mySubTab: newTab } });
  }
});

watch(() => route.query.mySubTab, (newTab) => {
  if (newTab !== undefined && Number(newTab) !== mySubTab.value) {
    mySubTab.value = Number(newTab);
  }
});

const tabItem = shallowRef([
  { btn: "Q&A", component: MySubTab01 },
  { btn: "아이디어 제안", component: MySubTab02 },
  { btn: "불편신고", component: MySubTab03 },
]);
</script>

