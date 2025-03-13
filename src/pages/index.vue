<template>
  <v-main class="main">
    <v-container
      class="inner"
    >
      <v-row>
        <v-col
          md="6"
          sm="12"
        >
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://github.com/vuetifyjs/vuetify/"
            max-width="344"
            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            title="Vuetify on GitHub"
          />
        </v-col>
        <v-col
          md="6"
          sm="12"
        >
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://github.com/vuetifyjs/vuetify/"
            max-width="344"
            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            title="Vuetify on GitHub"
          />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
const isTablet = inject('isTablet');
const isDesktop = inject('isDesktop');
</script>
<route lang="yaml">
meta:
  layout: MainLayout
</route>
