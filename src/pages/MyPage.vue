<template>
  <v-container class="inner d-flex flex-row">
    <v-list
      v-model="tab"
      mandatory
    >
      <v-list-item
        v-for="(item, i) in tabItem"
        :key="i"
        :value="i"
        :class="{ 'bg-success text-white': tab === i }"
        :prepend-icon="item.icon"
        :title="item.text"
        @click="tab = i"
      />
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
  { icon: "mdi-account", text: "Option 1", component: MyPageTab01 },
  { icon: "mdi-lock", text: "Option 2", component: MyPageTab02 },
  { icon: "mdi-access-point", text: "Option 3",  component: MyPageTab03 },
]);

</script>
