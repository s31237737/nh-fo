<template>
  <v-sheet
    class="about-top-bnr"
  >
    <h1>NHUPSTORE top</h1>
  </v-sheet>
  <v-container class="inner about">
    <section>
      <h1>NHUPSTORE</h1>
      <p>
        UPstore는 농축협 현장과 사무실의 경계를 허물어 모바일과 PC에서 바로바로 쓸 수 있는 업무처리 앱들을 모아 놓은 플랫폼입니다. 
        농축협의 일하는 방식을 디지털 중심으로 전환하고, 현장의 민첩성과 본부의 체계성을 유기적으로 연결하는 업무 환경을 지향합니다.
      </p>
    </section>
    <section>
      <h2>주요 디지털 도구</h2>
      <v-row>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>NH 카카오 커넥트</strong>
          <p>카카오톡 채널 기반으로 지역 농축협의 조합원 및 임직원에 대한 그룹별 메시지 전송, 설문조사, 예약 관리 등 커뮤니케이션 관리 업무를 편리하게 지원하는 플랫폼</p>
        </v-col>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>APPS</strong>
          <p>공통/총무 업무 및 농축협 특화 업무 맞춤 지원을 위한 다양한 로우코드 기반 APP</p>
        </v-col>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>BI 시각화 보고서</strong>
          <p>농축협 및 본부, 지역본부의 다양한 데이터를 간편하게 확인할 수 있는 시각화 보고서</p>
        </v-col>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>NH 폼즈</strong>
          <p>우리 농축협의 각종 문서 양식을 디지털화하여 전자서명, 디지털 보관으로 손쉽게 관리</p>
        </v-col>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>NH QR</strong>
          <p>다양한 형사 및 교육 진행 시 출석 체크를 할 수 있는 QR 활용 서비스</p>
        </v-col>
        <v-col
          lg="4"
          md="6"
          sm="12"
        >
          <strong>NH Maps</strong>
          <p>영농 지원을 위한 맞춤형 지도 서비스</p>
        </v-col>
      </v-row>
    </section>
    <section class="full">
      <h2>Brand Logo</h2>
      <p>
        UP STORE 로고의 유연하고 부드럽게 이어지는 곡선은 NH의 변화와 적응을 상징하며, 
        마지막 글자 E는 전문성과 성장을 의미하는 삼각형으로 형상화되어 있습니다. 이는 고객에게 
        더 나은 솔루션을 제공하겠다는 비전을 담아 표현했습니다.
      </p>
      <div>
        <img
          :src="getImageUrl('img_about_logo_01.png')"
          alt=""
        >
        <img
          :src="getImageUrl('img_about_logo_02.png')" 
          alt=""
        >
      </div>
    </section>
    <section>
      <h2>Logo Usage</h2>
      <p>
        적용 환경의 그래픽 요소나 배경색에 따라 공식 로고의 사용이 효과적이지 않거나 
        표현이 불가능할 경우에는 제시된 예와 같이 색상을 조정하여 사용할 수 있습니다.
      </p>
      <v-row>
        <v-col
          md="6"
          sm="12"
        >
          1
        </v-col>
        <v-col
          md="6"
          sm="12"
        >
          2
        </v-col>
        <v-col
          md="6"
          sm="12"
        >
          3
        </v-col>
        <v-col
          md="6"
          sm="12"
        >
          4
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script setup>
import {  } from "vue";

//const isMobile = inject("isMobile");
//const isDesktop = inject("isDesktop");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
</script>
