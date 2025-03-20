<template>
  <v-row>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="primary"
        @click="alert01 = true"
      >
        로그인 연장
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="primary"
        @click="alert02 = true"
      >
        페이지 나가기
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="primary"
        @click="alert03 = true"
      >
        삭제 게시글
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="primary"
        @click="alert04 = true"
      >
        앱 사용 신청
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="primary"
        @click="alert05 = true"
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
          @click="alert01 = false"
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
          @click="alert02 = false"
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
          @click="alert03 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 아이콘: complete -->
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
          @click="alert04 = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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
          @click="alert05 = false"
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
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue';

const dialog1 = ref(false);
const dialog2 = ref(false);

const alert01 = ref(false);
const alert02 = ref(false);
const alert03 = ref(false);
const alert04 = ref(false);
const alert05 = ref(false);
</script>
