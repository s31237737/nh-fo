<template>
  <div class="inner">
    <!-- <popup /> -->

    <v-row>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          @click="alert1 = true"
        >
          로그인 연장
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          @click="alert2 = true"
        >
          페이지 나가기
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          @click="alert3 = true"
        >
          삭제 게시글
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          @click="alert4 = true"
        >
          앱 사용 신청
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          @click="alert5 = true"
        >
          앱 사용 중지
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="blue"
          @click="dialog1 = true"
        >
          popup sample
        </v-btn>
      </v-col>
    <!-- <v-col cols="auto">
        <v-btn
          size="small"
          color="blue"
          @click="dialog2 = true"
        >
          불편신고사항 접수하기
        </v-btn>
      </v-col> -->
    </v-row>
    
    <!-- popup-sm(alert) -->
    <!-- 로그인 연장 -->
    <v-dialog
      v-model="alert1"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert1 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">로그인 연장</strong>
          <p class="text-4">
            로그인 연장을 원하지 않으실 경우<br>
            자동으로 로그아웃됩니다.
          </p>
          <p
            class="text-4-bd mt-2"
          >
            남은 시간 : 60초
          </p>
        <!-- // dialog contents -->
        </v-card-text>               
        <v-card-actions>
          <v-btn
            color="info"
            size="large"
            @click="alert1 = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
          >
            로그인 연장
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 아이콘: warning -->
    <v-dialog
      v-model="alert2"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert2 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">페이지를 나가시겠습니까?</strong>
          <p class="text-4">
            변경사항이 저장되지 않을 수 있습니다.
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="info"
            size="large"
            @click="alert2 = true"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
          >
            나가기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-dialog
      v-model="alert3"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert3 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">관리자 삭제 게시글</strong>
          <p class="text-4">
            관리자에 의해 삭제된 게시글입니다.
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            size="large"
            @click="alert3 = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 아이콘: complete -->
    <v-dialog
      v-model="alert4"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert4 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">앱 사용 신청 완료</strong>
          <p class="text-4">
            [앱이름] 사용 신청이 완료되었습니다.
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            size="large"
            @click="alert4 = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="alert5"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="alert5 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">앱 사용중지 안내</strong>
          <p class="text-4">
            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            size="large"
            @click="alert5 = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- popup(default) -->
    <!-- sample -->
    <v-dialog
      v-model="dialog1"
      class="popup"
    >
      <v-card>
        <v-card-title>
          <p>팝업 타이틀</p>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog1 = false"
          />
        </v-card-title>
        <v-card-text>
          <!-- dialog contents -->
          팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트
        <!--// dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="info"
            size="large"
            @click="dialog1 = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="alert4 = true"
          >
            등록
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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


  const dialog1 = ref(false);
  //const dialog2 = ref(false);

  const alert1 = ref(false);
  const alert2 = ref(false);
  const alert3 = ref(false);
  const alert4 = ref(false);
  const alert5 = ref(false);
</script>
