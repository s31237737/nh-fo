<template>
  <v-app-bar
    v-if="!isMobile"
    height="80"
  >
    <router-link to="/">
      <v-img
        :width="130"
        alt="NH Nonghyup"
        src="@/assets/images/logo.png"
      />
    </router-link>
    <template #append>
      <v-btn icon="mdi-heart" />

      <v-btn icon="mdi-magnify" />

      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
  <template v-else>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      floating
    >
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar
      height="52"
    >
      <router-link to="/">
        <v-img
          :width="120"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>

      <template #append>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </v-app-bar>
  </template>
</template>

<script setup>
import { inject, ref } from 'vue';
const isMobile = inject('isMobile');

const drawer = ref(null)
</script>
