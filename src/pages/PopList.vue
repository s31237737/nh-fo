<template>
  <div class="inner">
    <!-- sample -->
    sample
    <div class="d-flex flex-wrap align-center ga-2 mt-1 mb-7">
      <v-btn
        size="small"
        color="success"
        @click="alertDefault = true"
      >
        sample-alert
      </v-btn>
      <v-btn
        size="small"
        color="success"
        @click="dialogDefault = true"
      >
        sample-popup
      </v-btn>
    </div>

    <!-- dialog: alert -->
    alert
    <div class="d-flex flex-wrap  align-center ga-2 mt-1 mb-7">
      <v-btn
        size="small"
        color="primary"
        @click="alert01 = true"
      >
        페이지 나가기
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        @click="alert02 = true"
      >
        관리자 게시글 삭제
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        @click="alert03 = true"
      >
        앱 사용 신청 완료
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        @click="alert04 = true"
      >
        로그인 연장
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        @click="alert05 = true"
      >
        공유하기 링크 복사
      </v-btn>
      <!-- <v-btn
        size="small"
        color="primary"
        @click="alert06 = true"
      >
        모바일로 앱 열기
      </v-btn> -->
      <v-btn
        size="small"
        color="primary"
        @click="alert07 = true"
      >
        변경사항 저장
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        @click="alert08 = true"
      >
        삭제 얼럿
      </v-btn>
    </div>

    <!-- dialog -->
    dialog
    <div class="d-flex flex-wrap align-center ga-2 mt-1 mb-7">
      <v-btn
        v-for="popup in popups"
        :key="popup.name"
        color="primary"
        @click="popup.name === 'PopupAppsImages' ? openPopupHandler(0) : popOpen(popup.name)"
      >
        {{ popup.label }}
      </v-btn>
    </div>
  </div>

  <!-- popups -->
  <!-- (sample) popup -->
  <v-dialog
    v-model="dialogDefault"
    class="popup"
  >
    <v-card>
      <v-card-title>
        <div class="popup-title">
          <p>팝업 타이틀</p>
        </div>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialogDefault = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        팝업텍스트
        <!--// dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="dialogDefault = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          @click="alertDefault = true"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- (sample) popup : alert -->
  <v-dialog
    v-model="alertDefault"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alertDefault = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <v-icon icon="custom:complete" />
        <strong class="title-5-bd">alert title</strong>
        <p class="text-4">
          alert text<br>alert text
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="alertDefault = false"
        >
          cancel
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          primary
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 페이지 나가기 -->
  <v-dialog
    v-model="alert01"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert01 = false"
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
          @click="alert01 = false"
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

  <!-- 관리자 게시글 삭제 -->
  <v-dialog
    v-model="alert02"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert02 = false"
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
          @click="alert02 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 앱 사용 신청 완료 -->
  <v-dialog
    v-model="alert03"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert03 = false"
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
          @click="alert03 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 로그인 연장 -->
  <v-dialog
    v-model="alert04"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert04 = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
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
          @click="alert04 = false"
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

  <!-- 공유하기 링크 복사 완료 -->
  <v-dialog
    v-model="alert05"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert05 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <strong class="title-5-bd">링크 복사 완료</strong>
        <p class="text-4">
          링크가 클립보드에 복사되었습니다.
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          size="large"
          @click="alert05 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- QR 링크 -->
  <!-- <v-dialog
    v-model="alert06"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert06 = false"
        />
      </v-card-title>

      <v-card-text>
        <strong class="title-5-bd">휴대전화로 $앱 이름 앱 이름앱 이름앱 이름앱 이름$ 열기</strong>
        <p class="text-4">
          휴대전화로 아래 QR코드를 비추어<br>표시되는 링크를 눌러보세요.<br>$앱 이름 앱 이름앱 이름앱 이름앱 이름$을<br>바로 사용할 수 있어요.
        </p>
        <v-img
          class="qrImg"
          :src="getImageUrl(alertQr.img)"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          size="large"
          @click="alert06 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog> -->

  <!-- 변경사항 저장 -->
  <v-dialog
    v-model="alert07"
    class="popup-sm"
    @after-leave="isSave = false"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert07 = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <template v-if="!isSave">
          <v-icon icon="custom:warning" />
          <strong class="title-5-bd">변경사항 저장</strong>
          <p class="text-4">
            변경사항을 저장하시겠습니까?
          </p>
        </template>
        <template v-else>
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">저장 완료</strong>
          <p class="text-4">
            변경사항 저장이 완료되었습니다.
          </p>
        </template>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <template v-if="!isSave">
          <v-btn
            color="info"
            size="large"
            @click="alert07 = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="isSave = true"
          >
            확인
          </v-btn>
        </template>
        <v-btn
          v-else
          color="primary"
          size="large"
          @click="alert07 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 삭제 얼럿 -->
  <v-dialog
    v-model="alert08"
    class="popup-sm"
    @after-leave="isDelete = false"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert08 = false"
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
            @click="alert08 = false"
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
          @click="alert08 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- popup -->
  <component
    :is="popup.component"
    v-for="popup in popups"
    :key="popup.name"
    v-model="popupVisible[popup.name]"
    v-bind="popup.props || {}"
  />
</template>

<script setup>
import { ref,shallowRef  } from 'vue';

  //sample
  const alertDefault = ref(false);
  const dialogDefault = ref(false);

  const alert01 = ref(false);
  const alert02 = ref(false);
  const alert03 = ref(false);
  const alert04 = ref(false);
  const alert05 = ref(false);
  // const alert06 = ref(false);
  // const alertQr = ref({ img: '@temp_img_QR.png'});
  const isSave = ref(false);
  const alert07 = ref(false);
  const isDelete = ref(false);
  const alert08 = ref(false);



  import PopupReportIssue from '@/pages/popup/PopupReportIssue.vue';
  import PopupJobSelect from '@/pages/popup/PopupJobSelect.vue';
  import PopupAppsImages from '@/pages/popup/PopupAppsImages.vue';
  import PopupProfileImage from '@/pages/popup/PopupProfileImage.vue';

  // qr팝업
  // const getImageUrl = (imageName) => {
  //   return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  // };

  //동영상 팝업(AppsGuideDetail, AppsDetail 참고)
  //const openPopup = ref(false);
  const sliders = ref([
    {
      image: '@temp_img_02.png',
      link: "https://www.youtube-nocookie.com/embed/FepuXV72_hQ",
      player: true,
      isPlaying: false,
    },
  ]);
  const selectedIndex = ref(null);
  const openPopupHandler = (index = 0) => {
    if (index < 0 || index >= sliders.value.length) {
      return;
    }

    selectedIndex.value = index;
    popupVisible.value.PopupAppsImages = true;
  };

  //팝업
  const popups = ref([
    { name: 'PopupReportIssue', label: '불편사항 신고하기', component: shallowRef(PopupReportIssue) },
    { name: 'PopupJobSelect', label: '직무 선택', component: shallowRef(PopupJobSelect) },
    {
      name: 'PopupAppsImages',
      label: '동영상 튜토리얼 모달',
      component: shallowRef(PopupAppsImages),
      props: { sliders, selectedIndex }
    },
    { name: 'PopupProfileImage', label: '프로필 이미지 변경', component: shallowRef(PopupProfileImage) },
  ]);

  const popupVisible = ref({
    PopupReportIssue: false,
    PopupJobSelect: false,
    PopupAppsImages: false,
    PopupProfileImage: false,
  });

  const popOpen = (name) => {
    popupVisible.value[name] = true;
  };
</script>
