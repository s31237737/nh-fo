<template>
  <v-app-bar v-if="!isMobile">
    <v-container>
      <router-link to="/">
        <v-img
          :width="130"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>
    </v-container>
  </v-app-bar>
  <template v-else>
    <v-app-bar>
      <router-link to="/">
        <v-img
          :width="130"
          alt="NH Nonghyup"
          src="@/assets/images/logo.png"
        />
      </router-link>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <!--  -->
    </v-navigation-drawer>
  </template>
</template>

<script setup>
import { inject, ref } from 'vue';
const isMobile = inject('isMobile');

const drawer = ref(null)
</script>
