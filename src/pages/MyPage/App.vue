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
            :width="isMobile ? '105': 'auto'"
            density="compact"
            :items="['최근접속순', '가장많은 접속순', '업데이트순', '가나다순']"
          />
          <v-btn
            v-if="!isEditMode"
            color="info"
            @click="isEditMode=true"
          >
            편집
          </v-btn>
        </div>
        <div
          v-if="isEditMode"
          class="action"
        >
          <v-btn
            color="info"
            @click="isEditMode=false"
          >
            편집완료
          </v-btn>
          <v-btn
            :disabled="selection.length === 0"
            color="warning"
            variant="outlined"
            @click="alert=true"
          >
            삭제
          </v-btn>
        </div>
      </div>
      <v-list
        v-model:selected="selection"
        select-strategy="multiple"
        class="app-list"
      >
        <v-list-item
          v-for="(item, index) in useApps"
          :key="index"
          :value="item.value"
        >
          <template #prepend="{ isSelected }">
            <v-list-item-action v-if="isEditMode">
              <v-checkbox-btn
                :model-value="isSelected"
              />
            </v-list-item-action>
            <div class="img">
              <v-img
                :src="getImageUrl(item.image)"
              />
            </div>
          </template>

          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>

          <v-list-item-action>
            <v-btn
              color="info"
              size="small"
            >
              앱 열기
            </v-btn>
          </v-list-item-action>
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
      <v-list
        class="app-list"
      >
        <v-list-item
          v-for="(item, index) in waitingApps"
          :key="index"
        >
          <template #prepend>
            <div class="img">
              <v-img
                :width="50"
                :src="getImageUrl(item.image)"
              />
            </div>
          </template>

          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>

          <v-list-item-action>
            <v-btn
              color="secondary"
              size="small"
              disabled
            >
              신청 대기중
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>

  <!-- 삭제 얼럿 -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
    @after-leave="isDelete = false"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <template v-if="!isDelete">
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">삭제</strong>
          <p class="text-4">
            삭제하시겠습니까?
          </p>
        </template>
        <template v-else>
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">삭제 완료</strong>
          <p class="text-4">
            삭제가 완료되었습니다.
          </p>
        </template>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <template v-if="!isDelete">
          <v-btn
            color="info"
            size="large"
            @click="alert = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="isDelete = true"
          >
            삭제
          </v-btn>
        </template>
        <v-btn
          v-else
          color="primary"
          size="large"
          @click="alert = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject } from "vue";

const isMobile = inject("isMobile");

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};


const isDelete = ref(false);
const alert = ref(false);

// form
const select01 = ref("최근접속순");
const select02 = ref("최근신청순");

const isEditMode = ref(false);

// useApps
const selection = ref([]);
const useApps = ref([
  { value: 'useApps01' ,title: 'IT 일일 점검', image: '@temp_img_app_icon01.png' },
  { value: 'useApps02' ,title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon02.png' },
  { value: 'useApps03' ,title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon03.png' },
  { value: 'useApps04' ,title: 'IT 일일 점검', image: '@temp_img_app_icon04.png' },
  { value: 'useApps05' ,title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon05.png' },
  { value: 'useApps06' ,title: '하나로마트 식품 안전', image: '@temp_img_app_icon06.png' },
  { value: 'useApps07' ,title: 'IT 일일 점검', image: '@temp_img_app_icon07.png' },
  { value: 'useApps08' ,title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon08.png' },
  { value: 'useApps09' ,title: 'NH 푸즈', image: '@temp_img_app_icon09.png' },
]);
// waitingApps
const waitingApps = ref([
  { title: 'IT 일일 점검', image: '@temp_img_app_icon01.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon02.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon03.png' },
  { title: 'IT 일일 점검', image: '@temp_img_app_icon04.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon05.png' },
  { title: '하나로마트 식품 안전', image: '@temp_img_app_icon06.png' },
  { title: 'IT 일일 점검', image: '@temp_img_app_icon07.png' },
  { title: '퇴비비료 생산 및 출고', image: '@temp_img_app_icon08.png' },
  { title: 'NH 푸즈', image: '@temp_img_app_icon09.png' },
]);

</script>
