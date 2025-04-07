<template>
  <div class="my-app">
    <v-sheet>
      <div class="tit-wrap">
        <strong class="title-5-bd">
          사용중인 앱
        </strong>
        <v-select
          v-model="select"
          density="compact"
          :items="['전체', '상태1', '상태2']"
        />
      </div>
    </v-sheet>
    <v-sheet>
      <div class="tit-wrap">
        <strong class="title-5-bd">
          신청대기 앱
        </strong>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
</script>
