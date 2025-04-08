<template>
  <div class="my-app">
    <!-- 사용중인 앱 -->
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
      <v-list
        v-model:selected="selection"
        class="app-list"
      >
        <v-list-item
          v-for="(item, index) in useApps"
          :key="index"
        >
          <template #prepend="{ isSelected }">
            <v-list-item-action>
              <v-checkbox-btn
                :model-value="isSelected"
                density="compact"
              />
            </v-list-item-action>
            <div class="img">
              <v-img
                :width="50"
                :src="getImageUrl(item.image)"
              />
            </div>
          </template>

          <v-list-item-title class="text-body-1 font-weight-medium">
            {{ item.title }}
          </v-list-item-title>

          <v-list-item-subtitle>
            <v-btn
              color="info"
              size="small"
            >
              앱 열기
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-sheet>
    <!-- 신청대기 앱 -->
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

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};

// form
const select01 = ref("최근접속순");
const select02 = ref("최근신청순");

// useApps
const selection = ref([])
const useApps = ref([
  { title: 'IT 일일 점검', image: '@temp_img_app_icon01.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon02.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon03.png' },
  { title: 'IT 일일 점검', image: '@temp_img_app_icon04.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon05.png'},
  { title: '하나로마트 식품 안전', image: '@temp_img_app_icon06.png' },
  { title: 'IT 일일 점검', image: '@temp_img_app_icon07.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon08.png' },
  { title: 'NH 푸즈', image: '@temp_img_app_icon09.png' },
])

</script>
