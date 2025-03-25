<template>
  <v-tabs
    v-model="tab"
  >
    <v-tab :value="1">
      Landscape
    </v-tab>
    <v-tab :value="2">
      City
    </v-tab>
    <v-tab :value="3">
      Abstract
    </v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item
      v-for="n in 3"
      :key="n"
      :value="n"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="i in 6"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img
              :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
              :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
              height="205"
              cover
            />
          </v-col>
        </v-row>
      </v-container>
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
