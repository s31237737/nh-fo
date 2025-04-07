<template>
  <div class="my-app">
    <v-sheet class="w-box">
      <div class="tit-wrap">
        <strong class="title-5-bd">
          사용중인 앱
        </strong>
        <div class="btns">
          <v-select
            v-model="select01"
            density="compact"
            :items="['최근접속순', '가장많은 접속순', '업데이트순', '가나다순']"
          />
          <v-btn
            color="info"
          >
            편집
          </v-btn>
        </div>
      </div>
    </v-sheet>
    <v-sheet class="w-box">
      <div class="tit-wrap">
        <strong class="title-5-bd">
          신청대기 앱
        </strong>
        <div class="btns">
          <v-select
            v-model="select02"
            density="compact"
            :items="['최근신청순', '가나다순']"
          />
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";

// form
const select01 = ref("최근접속순");
const select02 = ref("최근신청순");
</script>
