<template>
  <v-main class="about">
    <v-sheet
      class="about-top-bnr"
    >
      <h1>About</h1>
    </v-sheet> 
    <v-container class="inner">
      <!-- NHUPSTORE -->
      <section>
        <h1>
          <img
            :src="getImageUrl('img_about_logo_03.png')"
            alt="NHUPSTORE"
          >
        </h1>
        <p class="text-3">
          UPstore는 농축협 현장과 사무실의 경계를 허물어 모바일과 PC에서 바로바로 쓸 수 있는 업무처리 앱들을 모아 놓은 플랫폼입니다.<br>
          농축협의 일하는 방식을 디지털 중심으로 전환하고, 현장의 민첩성과 본부의 체계성을 유기적으로 연결하는 업무 환경을 지향합니다.
        </p>
      </section>

      <!-- 주요 디지털 도구 -->
      <section>
        <h2>주요 디지털 도구</h2>
        <v-row class="type-block line">
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>NH 카카오 커넥트</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_01.png')"
                />
              </v-card-title>
              <v-card-text>
                카카오톡 채널 기반으로 지역 농축협의 조합원 및 임직원에 대한 그룹별 메시지 전송, 설문조사, 예약 관리 등 커뮤니케이션 관리 업무를 편리하게 지원하는 플랫폼
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>APPS</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_02.png')"
                />
              </v-card-title>
              <v-card-text>
                공통/총무 업무 및 농축협 특화 업무 맞춤 지원을 위한 다양한 로우코드 기반 APP
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>BI 시각화 보고서</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_03.png')"
                />
              </v-card-title>
              <v-card-text>
                농축협 및 본부, 지역본부의 다양한 데이터를 간편하게 확인할 수 있는 시각화 보고서
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>NH 폼즈</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_04.png')"
                />
              </v-card-title>
              <v-card-text>
                우리 농축협의 각종 문서 양식을 디지털화하여 전자서명, 디지털 보관으로 손쉽게 관리
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>NH QR</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_05.png')"
                />
              </v-card-title>
              <v-card-text>
                다양한 형사 및 교육 진행 시 출석 체크를 할 수 있는 QR 활용 서비스
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            md="6"
            sm="12"
          >
            <v-card>
              <v-card-title>
                <strong>NH Maps</strong>
                <v-img
                  width="60"
                  :src="getImageUrl('img_about_icon_06.png')"
                />
              </v-card-title>
              <v-card-text>
                영농 지원을 위한 맞춤형 지도 서비스
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Brand Logo -->
      <section class="full">
        <div class="inner">
          <h2>Brand Logo</h2>
          <p class="text-3">
            UP STORE 로고의 유연하고 부드럽게 이어지는 곡선은 NH의 변화와 적응을 상징하며, <br v-if="!isTablet">
            마지막 글자 E는 전문성과 성장을 의미하는 삼각형으로 형상화되어 있습니다. <br v-if="isDesktop">이는 고객에게 더 나은 솔루션을 제공하겠다는 비전을 담아 표현했습니다.
          </p>
          <div class="img-wrap">
            <div>
              <img
                width="784"
                :src="getImageUrl('img_about_logo_01.png')"
                alt=""
              >
              <p>Brand Logo</p>
            </div>
            <div>
              <img
                width="210"
                :src="getImageUrl('img_about_logo_02.png')" 
                alt=""
              >
              <p>Symbol</p>
            </div>
          </div>
          <div class="btns">
            <v-btn
              size="x-large"
              color="success"
            >
              AI 다운로드
            </v-btn>
            <v-btn
              size="x-large"
              color="success"
            >
              JPEG 다운로드
            </v-btn>
          </div>
        </div>
      </section>

      <!-- Logo Usage -->
      <section>
        <h2>Logo Usage</h2>
        <p class="text-2">
          적용 환경의 그래픽 요소나 배경색에 따라 공식 로고의 사용이 효과적이지 않거나<br>
          표현이 불가능할 경우에는 제시된 예와 같이 색상을 조정하여 사용할 수 있습니다.
        </p>
        <v-row class="type-block">
          <v-col
            md="6"
            sm="12"
          >
            <v-card>
              <img
                :width="isDesktop ? 456 : 260"
                :src="getImageUrl('img_about_logo_05.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="b-black">
              <img
                :width="isDesktop ? 456 : 260"
                :src="getImageUrl('img_about_logo_04.png')"
                alt=""
              >
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Color -->
      <section>
        <h2>Color</h2>
        <v-row class="type-block text">
          <v-col
            md="6"
            sm="12"
          > 
            <v-card class="b-blue">
              <em>UP Blue</em>
              <span>#2872F2</span>
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="b-green">
              <em>UP Green</em>
              <span>#78CB00</span>
            </v-card>
          </v-col>
          <v-col
            md="6"             
            sm="12"
          >
            <v-card class="b-black">
              <em>UP Black</em>
              <span>#000000</span>
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="b-white">
              <em>UP White</em>
              <span>#FFFFFF</span>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Logo Symbol -->
      <section>
        <h2>Logo Symbol</h2>
        <p class="text-2">
          적용 환경의 그래픽 요소나 배경색에 따라 공식 로고의 사용이 효과적이지 않거나<br>
          표현이 불가능할 경우에는 제시된 예와 같이 색상을 조정하여 사용할 수 있습니다.
        </p>
        <v-row class="type-block">
          <v-col
            md="6"
            sm="12"
          > 
            <v-card>
              <img
                :width="isDesktop ? 134 : 80"
                :src="getImageUrl('img_about_logo_06.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="b-black">
              <img
                :width="isDesktop ? 134 : 80"
                :src="getImageUrl('img_about_logo_06.png')"
                alt=""
              >
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Don't -->
      <section>
        <h2>Don't</h2>
        <ul>
          <li>임의로 늘리거나 각도를 조절하지 않습니다.</li>
          <li>Drop Shadow, Outer Glow, Inner Glow 등의 효과를 사용하지 않습니다.</li>
          <li>컬러 활용 시, 그라데이션을 사용하지 않습니다.</li>
          <li>복잡한 배경 위에 사용하지 않습니다.</li>
        </ul>
        <v-row class="type-block gellary">
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="icon">
              <img
                :src="getImageUrl('img_about_01.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="icon">
              <img
                :src="getImageUrl('img_about_02.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="icon">
              <img
                :src="getImageUrl('img_about_03.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card class="icon">
              <img
                :src="getImageUrl('img_about_04.png')"
                alt=""
              >
            </v-card>
          </v-col>
        </v-row>
      
        <v-row class="type-block gellary">
          <v-col
            md="6"
            sm="12"
          >
            <v-card>
              <img
                :src="getImageUrl('img_about_05.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          > 
            <v-card>
              <img
                :src="getImageUrl('img_about_06.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <v-card>
              <img
                :src="getImageUrl('img_about_07.png')"
                alt=""
              >
            </v-card>
          </v-col>
          <v-col
            md="6"
            sm="12"
          > 
            <v-card>
              <img
                :src="getImageUrl('img_about_08.png')"
                alt=""
              >
            </v-card>
          </v-col>
        </v-row> 
      </section>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject } from "vue";

//const isMobile = inject("isMobile");
const isDesktop = inject("isDesktop");
const isTablet = inject("isTablet");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
</script>
<route lang="yaml">
  meta:
    layout: MainLayout
  </route>