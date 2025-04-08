<template>
  <v-container class="inner my-page">
    <v-list
      v-if="isDesktop"
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
        :to="item.link"
        @click="onTabChange(i)"
      >
        <template #prepend>
          <v-icon
            :icon="item.icon"
            size="32"
          />
        </template>
      </v-list-item>
    </v-list>
    <v-tabs
      v-else
      v-model="tab"
    >
      <v-tab
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
        :to="item.link"
        :text="item.text"
        @click="onTabChange(i)"
      />
    </v-tabs>

    <v-window
      v-model="tab"
      class="tab-container"
    >
      <v-window-item
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
      >
        <router-view />
      </v-window-item>
    </v-window>
  </v-container>
</template>
<script setup>
import { ref, watch, inject } from "vue";
import { useRoute, useRouter } from "vue-router";

const isDesktop = inject('isDesktop');

// 탭 처리
const route = useRoute();
const router = useRouter();
const tab = ref(0);

const tabItem = ref([
  { icon: "custom:profile", text: "프로필", link: "/MyPage/Profile" },
  { icon: "custom:app", text: "내 앱", link: "/MyPage/App"  },
  { icon: "custom:post", text: "작성한 게시물",  link: "/MyPage/Post"  },
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
