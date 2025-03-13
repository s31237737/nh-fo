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

            href="https://github.com/vuetifyjs/vuetify/"

            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            title="Vuetify on GitHub"
            color="#2872F2"
          />
        </v-col>
        <v-col
          md="6"
          sm="12"
        >
          <v-card
            append-icon="mdi-open-in-new"

            href="https://github.com/vuetifyjs/vuetify/"

            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            title="Vuetify on GitHub"
            color="#68C4E8"
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
