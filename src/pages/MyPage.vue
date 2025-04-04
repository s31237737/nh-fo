<template>
  <v-container class="inner my-page">
    <v-list
      v-model="tab"
      mandatory
      class="my-page-lnb"
    >
      <v-list-item
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
        :class="{ 'bg-success text-white': tab === i }"

        :title="item.text"
        @click="tab = i"
      >
        <template #prepend>
          <v-icon
            :icon="item.icon"
            size="32"
          />
        </template>
      </v-list-item>
    </v-list>

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
</template>
<script setup>
import { ref, watch, shallowRef } from "vue";
import { useRoute, useRouter } from "vue-router";

import MyPageTab01 from "@/pages/MyPageTab01.vue";
import MyPageTab02 from "@/pages/MyPageTab02.vue";
import MyPageTab03 from "@/pages/MyPageTab03.vue";

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
  { icon: "custom:profile", text: "프로필", component: MyPageTab01 },
  { icon: "custom:app", text: "내 앱", component: MyPageTab02 },
  { icon: "custom:post", text: "작성한 게시물",  component: MyPageTab03 },
]);

</script>
