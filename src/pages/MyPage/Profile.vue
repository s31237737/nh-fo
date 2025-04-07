<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      lg="3"
      class="flex-none"
    >
      <v-sheet class="pa-4">
        첫 번째 카드
      </v-sheet>
    </v-col>

    <v-col
      cols="12"
      lg="9"
    >
      <v-sheet class="pa-4">
        두 번째 카드
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, inject } from "vue";
</script>
