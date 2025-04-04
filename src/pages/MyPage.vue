<template>
  <v-container class="inner d-flex flex-row">
    <v-tabs
      v-model="tab"
      color="primary"
      direction="vertical"
    >
      <v-tab
        v-for="(item, index) in tabItem"
        :key="index"
        :prepend-icon="item.icon"
        :text="item.text"
        :value="item.value"
      />
    </v-tabs>
    <v-tabs-window
      v-model="tab"
      class="tab-container"
    >
      <v-tabs-window-item
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
        :transition="false"
      >
        <component :is="item.component" />
      </v-tabs-window-item>
    </v-tabs-window>
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
  { icon: "mdi-account", text: "Option 1", component: MyPageTab01 },
  { icon: "mdi-lock", text: "Option 2", component: MyPageTab02 },
  { icon: "mdi-access-point", text: "Option 3",  component: MyPageTab03 },
]);

</script>
