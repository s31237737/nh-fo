<template>
  <div class="d-flex ga-3 flex-wrap w-75">
    <v-btn
      color="primary"
      @click="alert=true"
    >
      얼럿
    </v-btn>
    <v-btn
      color="primary"
      @click="snackbarOpen01"
    >
      토스트팝업 성공
    </v-btn>
    <v-btn
      color="primary"
      @click="snackbarOpen02"
    >
      토스트팝업 정보
    </v-btn>
    <v-btn
      color="primary"
      @click="snackbarOpen03"
    >
      토스트팝업 오류
    </v-btn>
    <!-- alert -->
    <v-dialog
      v-model="alert"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <span>사용중단</span>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <p class="alert-txt">
            입력하신 정보가 저장되지 않습니다.<br>정말 나가시겠습니까?
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            size="large"
            @click="alert = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- alert -->

    <!-- 팝업에 넣을시에 <v-card-text>내 제일 아래에 -->
    <!-- 페이지에 넣을시에  <div class="page-contents">내 제일 아래에 -->
    <!-- 토스트 팝업 01 -->
    <v-snackbar
      v-model="snackbar01"
      contained
      content-class="toast-pop__success"
    >
      <v-icon
        start
        size="24"
        icon="custom:alert-success"
      />
      {{ snackbarText01 }}
      <template #actions>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="snackbar01 = false"
        />
      </template>
    </v-snackbar>
    <!-- // 토스트 팝업 01-->
    <!-- 토스트 팝업 02 -->
    <v-snackbar
      v-model="snackbar02"
      contained
      content-class="toast-pop"
    >
      <v-icon
        start
        size="24"
        icon="custom:alert"
      />
      {{ snackbarText02 }}
      <template #actions>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="snackbar02 = false"
        />
      </template>
    </v-snackbar>
    <!-- // 토스트 팝업 02-->
    <!-- 토스트 팝업 03 -->
    <v-snackbar
      v-model="snackbar03"
      contained
      content-class="toast-pop__error"
    >
      <v-icon
        start
        size="24"
        icon="custom:alert-error"
      />
      {{ snackbarText03 }}
      <template #actions>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="snackbar03 = false"
        />
      </template>
    </v-snackbar>
    <!-- // 토스트 팝업 02-->
    <v-btn
      v-for="popup in popups"
      :key="popup.name"
      color="primary"
      @click="popOpen(popup.name)"
    >
      {{ popup.label }}
    </v-btn>
  </div>

  <component
    :is="popup.component"
    v-for="popup in popups"
    :key="popup.name"
    v-model="popupVisible[popup.name]"
  />
</template>

<script setup>
import { ref,shallowRef  } from 'vue';

// import PopupAppType01 from '@/pages/popup/PopupAppType01.vue';
// import PopupAppType02 from '@/pages/popup/PopupAppType02.vue';
// import PopupAppType03 from '@/pages/popup/PopupAppType03.vue';
// import PopupAppType04 from '@/pages/popup/PopupAppType04.vue';
// import PopupCategoryTag01 from '@/pages/popup/PopupCategoryTag01.vue';
// import PopupCategoryTag02 from '@/pages/popup/PopupCategoryTag02.vue';
// import PopupCategoryTag03 from '@/pages/popup/PopupCategoryTag03.vue';
// import PopupAppVersion01 from '@/pages/popup/PopupAppVersion01.vue';
// import PopupAppVersion02 from '@/pages/popup/PopupAppVersion02.vue';
// import PopupAppVersion03 from '@/pages/popup/PopupAppVersion03.vue';
// import PopupOftenQuestion01 from '@/pages/popup/PopupOftenQuestion01.vue';
// import PopupOftenQuestion02 from '@/pages/popup/PopupOftenQuestion02.vue';
// import PopupAuthority01 from '@/pages/popup/PopupAuthority01.vue';
// import PopupAuthority02 from '@/pages/popup/PopupAuthority02.vue';
// import PopupAuthority03 from '@/pages/popup/PopupAuthority03.vue';
// import PopupAuthority04 from '@/pages/popup/PopupAuthority04.vue';
// import PopupAuthority05 from '@/pages/popup/PopupAuthority05.vue';
// import PopupDisplay01 from '@/pages/popup/PopupDisplay01.vue';
// import PopupDisplay02 from '@/pages/popup/PopupDisplay02.vue';

const popups = ref([
  // { name: 'PopupAppType01', label: '앱 타입 설정', component: shallowRef(PopupAppType01) },
  // { name: 'PopupAppType02', label: '앱 타입 등록', component: shallowRef(PopupAppType02) },
  // { name: 'PopupAppType03', label: '앱 타입 수정', component: shallowRef(PopupAppType03) },
  // { name: 'PopupAppType04', label: '앱 타입 상세', component: shallowRef(PopupAppType04) },
  // { name: 'PopupCategoryTag01', label: '카테고리 태그 설정', component: shallowRef(PopupCategoryTag01) },
  // { name: 'PopupCategoryTag02', label: '카테고리 태그 등록', component: shallowRef(PopupCategoryTag02) },
  // { name: 'PopupCategoryTag03', label: '카테고리 태그 상세', component: shallowRef(PopupCategoryTag03) },
  // { name: 'PopupAppVersion01', label: '앱 버전 관리', component: shallowRef(PopupAppVersion01) },
  // { name: 'PopupAppVersion02', label: '앱 버전 등록', component: shallowRef(PopupAppVersion02) },
  // { name: 'PopupAppVersion03', label: '앱 버전 상세', component: shallowRef(PopupAppVersion03) },
  // { name: 'PopupOftenQuestion01', label: '자주 묻는 질문', component: shallowRef(PopupOftenQuestion01) },
  // { name: 'PopupOftenQuestion02', label: '자주 묻는 질문 상세', component: shallowRef(PopupOftenQuestion02) },
  // { name: 'PopupAuthority01', label: '직원검색', component: shallowRef(PopupAuthority01) },
  // { name: 'PopupAuthority02', label: '직원검색2', component: shallowRef(PopupAuthority02) },
  // { name: 'PopupAuthority03', label: '권한 범위 설정', component: shallowRef(PopupAuthority03) },
  // { name: 'PopupAuthority04', label: '권한 범위 등록', component: shallowRef(PopupAuthority04) },
  // { name: 'PopupAuthority05', label: '권한 범위 상세', component: shallowRef(PopupAuthority05) },
  // { name: 'PopupDisplay01', label: '앱 검색', component: shallowRef(PopupDisplay01) },
  // { name: 'PopupDisplay02', label: '콘텐츠 순서 설정', component: shallowRef(PopupDisplay02) },
]);


const popupVisible = ref({
  PopupAppType01: false,
  PopupAppType02: false,
  PopupAppType03: false,
  PopupAppType04: false,
  PopupCategoryTag01: false,
  PopupCategoryTag02: false,
  PopupCategoryTag03: false,
  PopupAppVersion01: false,
  PopupAppVersion02: false,
  PopupAppVersion03: false,
  PopupOftenQuestion01: false,
  PopupOftenQuestion02: false,
  PopupAuthority01: false,
  PopupAuthority02: false,
  PopupAuthority03: false,
  PopupAuthority04: false,
  PopupAuthority05: false,
  PopupDisplay01: false,
  PopupDisplay02: false,
});

const popOpen = (name) => {
  popupVisible.value[name] = true;
};


const alert = ref(false);

const snackbar01 = ref(false);
const snackbarText01 = ref('등록이 완료되었습니다.');
const snackbarOpen01 = () => {
  snackbar01.value=true
    return;
}
const snackbar02 = ref(false);
const snackbarText02 = ref('태그는 10개까지 추가 가능합니다. 추가한 태그를 확인하고 다시 진행해 주세요.');
const snackbarOpen02 = () => {
  snackbar02.value=true
    return;
}
const snackbar03 = ref(false);
const snackbarText03 = ref('제한된 크기 10MB가 초과되어, 업로드에 실패하였습니다.');
const snackbarOpen03 = () => {
  snackbar03.value=true
    return;
}
</script>
