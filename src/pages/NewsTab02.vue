<template>
  <v-tabs
    v-model="tab"
  >
    <v-tab :value="1">
      앱 사용 질문
    </v-tab>
    <v-tab :value="2">
      업스토어 이용 질문
    </v-tab>
    <v-tab :value="3">
      기타
    </v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item
      v-for="n in 3"
      :key="n"
      :value="n"
    >
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="i in 10"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        />
      </v-expansion-panels>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRouter } from 'vue-router';

const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");

 const tab = ref(null);

</script>
