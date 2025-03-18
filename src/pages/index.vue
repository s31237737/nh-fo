<template>
  <v-main class="main">
    <v-container class="inner">
      <div
        v-if="isDesktop"
        class="user"
      >
        김농협님 안녕하세요.
      </div>

      <div class="content">
        <!-- 콘텐츠 배너 -->
        <div class="slider recomm-app-banner">
          <v-carousel
            v-model="currentSlide"
            :cycle="isAppPlay"
            height="258"
          >
            <v-carousel-item
              v-for="(item, index) in appBanner"
              :key="index"
            >
              <v-card
                :ripple="false"
                :to="item.link"
                :style="{ backgroundImage: item.type === 'image' ? 'url(' + getImageUrl(item.image) + ')' : '' }"
              >
                <v-card-item>
                  <v-card-subtitle v-if="item.category">
                    {{ item.category }}
                  </v-card-subtitle>
                  <v-card-title v-if="item.title">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text v-if="item.description">
                    {{ item.description }}
                  </v-card-text>
                  <template #append>
                    <v-img
                      v-if="item.type && item.type === 'app'"
                      max-width="100"
                      height="100"
                      :src="getImageUrl(item.image)"
                    />
                  </template>
                </v-card-item>
              </v-card>
            </v-carousel-item>
          </v-carousel>
          <SliderControls
            v-if="appBanner.length >= 2"
            :current-slide="currentSlide"
            :autoplay="isAppPlay"
            :slide="appBanner"
            @update:current-slide="currentSlide = $event"
            @update:autoplay="isAppPlay = $event"
          />
        </div>
        <!-- // 콘텐츠 배너 -->
        <!-- 최신 새소식 -->
        <div class="notice-banner">
          <v-icon
            icon="custom:notice"
            size="small"
          />
          <v-carousel
            direction="vertical"
            :cycle="isNoticePlay"
            height="20"
            @mouseenter="isNoticePlay = false"
            @mouseleave="isNoticePlay = true"
          >
            <v-carousel-item
              v-for="(item, index) in notice"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.news }}
              </router-link>
            </v-carousel-item>
          </v-carousel>
        </div>
        <!-- // 최신 새소식 -->
        <!-- 추천 앱 영역 -->
        <section class="recomm-app">
          <div class="tit-wrap align-center">
            <strong class="title-1">
              이런 앱은 어떠세요?
            </strong>
            <router-link
              to="/"
              class="link-btn-arrow"
            >
              <span>더보러가기</span>
              <v-icon icon="custom:arrow-right" />
            </router-link>
            <v-slide-group
              v-model="recomm"
              center-active
            >
              <v-slide-group-item
                v-for="(item, i) in recommBtn"
                :key="i"
                v-slot="{ isSelected }"
              >
                <v-btn
                  size="large"
                  :ripple="false"
                  height="44"
                  rounded="pill"
                  :color="isSelected ? 'primary' : 'info'"
                  @click="recomm = i"
                >
                  {{ item.btn }}
                </v-btn>
              </v-slide-group-item>
            </v-slide-group>
          </div>

          <v-carousel
            v-if="isDesktop"
            v-model="recomm"
            height="440"
            :cycle="isRecommPlay"
            @mouseenter="isRecommPlay = false"
            @mouseleave="isRecommPlay = true"
          >
            <v-carousel-item
              v-for="(group, index) in 4"
              :key="index"
            >
              <div class="recomm-box">
                <v-hover
                  v-for="(item, idx) in recommApps.slice(index * 3, (index + 1) * 3)"
                  :key="idx"
                  v-slot="{ isHovering, props }"
                >
                  <v-card
                    :ripple="false"
                    to="/"
                    v-bind="props"
                  >
                    <v-img
                      :src="getImageUrl(item.image)"
                      cover
                    >
                      <div
                        v-if="isHovering"
                        class="hovering"
                      >
                        <v-card-item>
                          <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                          <v-card-title v-html="item.title" />
                          <v-card-text>{{ item.description }}</v-card-text>
                        </v-card-item>
                      </div>
                      <v-card-item>
                        <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                        <v-card-title v-html="item.title" />
                        <v-btn
                          color="primary"
                          size="small"
                        >
                          앱 열기
                        </v-btn>
                      </v-card-item>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
            </v-carousel-item>
          </v-carousel>
          <template
            v-for="(group, index) in 4"
            v-else
            :key="index"
          >
            <div
              v-show="recomm === index"
              class="recomm-box"
            >
              <v-card
                v-for="(item, idx) in recommApps.slice(index * 3, (index + 1) * 3)"
                :key="idx"
                :ripple="false"
                to="/"
              >
                <v-img
                  :src="getImageUrl(item.image)"
                  cover
                >
                  <v-card-item>
                    <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                    <v-card-title v-html="item.title" />
                    <v-btn
                      color="primary"
                      size="small"
                    >
                      앱 열기
                    </v-btn>
                  </v-card-item>
                </v-img>
              </v-card>
            </div>
          </template>
        </section>

        <!-- // 추천 앱 영역 -->
        <!-- 커뮤니티 영역 -->
        <section class="community">
          <div class="tit-wrap">
            <strong class="title-1">
              더 좋은 서비스를 위한<br>커뮤니티를 만들어주세요.
            </strong>
            <v-btn
              color="info"
              size="large"
            >
              아이디어 제안하기
            </v-btn>
          </div>
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                to="/"
                color="#D1E2FF"
                height="390"
              >
                <v-card-text>
                  <p class="title-4">
                    농산물 출하관리 앱 덕분에 업무 효율이 200% 늘었습니다.
                  </p>
                  <p class="text-2">
                    하나로마트 식품전문 일일점검
                  </p>
                  <v-spacer />
                  <div class="icon-text">
                    <v-icon
                      size="x-large"
                      icon="custom:full-heart"
                    />
                    <span>982</span>
                  </div>
                  <div class="author bg">
                    <span>지원1팀</span>
                    <v-divider vertical />
                    <span>김농협 대리</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                to="/"
                color="#3B424E"
                height="390"
                class="white"
              >
                <v-card-text>
                  <p class="title-4">
                    QR 코드를 활용해서 쉽게 간편하게 제품 스캔이 가능해요
                  </p>
                  <p class="text-2">
                    농산물 출하관리
                  </p>
                  <v-spacer />
                  <div class="icon-text">
                    <v-icon
                      size="x-large"
                      icon="custom:full-heart"
                    />
                    <span>982</span>
                  </div>
                  <div class="author bg">
                    <span>지원1팀</span>
                    <v-divider vertical />
                    <span>김농협 대리</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="12"
              lg="4"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  lg="12"
                >
                  <v-card
                    to="/"
                    color="coolgray"
                    height="187"
                  >
                    <v-card-text>
                      <p class="title-5 line-clamp2">
                        퇴비 비료를 효율적으로 관리할 수 있는 기능이 있으면 좋을
                        것 같아요!
                      </p>
                      <v-spacer />
                      <div class="author">
                        <span>지원1팀</span>
                        <v-divider vertical />
                        <span>김농협 대리</span>
                        <v-icon icon="custom:arrow-right" />
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  lg="12"
                >
                  <v-card
                    to="/"
                    color="coolgray"
                    height="187"
                  >
                    <v-card-text>
                      <p class="title-5 line-clamp2">
                        농협 업스토어 덕분에 편리한 업무 할 수 있어 즐겁습니다
                        :D
                      </p>
                      <v-spacer />
                      <div class="author">
                        <span>지원1팀</span>
                        <v-divider vertical />
                        <span>김농협 대리</span>
                        <v-icon icon="custom:arrow-right" />
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-card
                to="/"
                color="coolgray"
                height="136"
              >
                <v-card-text>
                  <p class="title-5 line-clamp">
                    농협 입사한 선임이라면 지금 바로 사용해보세요! 정말 좋아요
                  </p>
                  <v-spacer />
                  <div class="author">
                    <span>지원1팀</span>
                    <v-divider vertical />
                    <span>김농협 대리</span>
                    <v-icon icon="custom:arrow-right" />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-card
                to="/"
                color="coolgray"
                height="136"
              >
                <v-card-text>
                  <p class="title-5 line-clamp">
                    QR 코드를 활용해서 쉽고 간편하게 제품 스캔이 가능 해요
                  </p>
                  <v-spacer />
                  <div class="author">
                    <span>지원1팀</span>
                    <v-divider vertical />
                    <span>김농협 대리</span>
                    <v-icon icon="custom:arrow-right" />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>
        <!-- // 커뮤니티 영역 -->
        <!-- quickLink -->
        <section class="quick-links">
          <v-row>
            <v-col
              v-for="(item, index) in quickLinks"
              :key="index"
              md="6"
              sm="12"
            >
              <v-card
                :subtitle="item.subtitle"
                :title="item.title"
                :color="item.color"
                :to="item.to"
              >
                <template #append>
                  <v-icon
                    size="54"
                    :icon="item.appendIcon"
                  />
                </template>
              </v-card>
            </v-col>
          </v-row>
        </section>
        <!-- // quickLink -->
      </div>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject, ref } from "vue";

const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");

const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

//콘텐츠 배너
const appBanner = ref([
  {
    category: "앱타입 노출",
    title: "로그인 화면 확인용 링크",
    description: "관리자에 등록된 간단설명 문구 (최대 30자 노출)",
    image: "@temp_img_app_icon01.png",
    link: "Login",
    type: "app"
  },
  {
    category: "앱타입 노출",
    title: "관리자에 등록된 배너 제목",
    description: "도시와 농촌이 상생하는 미래식품 연구개발 및 농산물 안전 관리 서비스",
    image: "@temp_img_app_icon02.png",
    link: "/",
    type: "app"
  },
  {
    title: "일이삼사오육칠팔구십일이삼사오",
    image: "@temp_img_app_icon01.png",
    link: "/",
    type: "app"
  },
  {
    category: "앱타입 노출",
    title: "배너 제목 (최대 15자 노출)",
    image: "@temp_img_app_icon02.png",
    link: "/",
    type: "app"
  },
  {
    title: "콘텐츠 유형 이미지",
    description: "type추가하여 구분",
    image: "@temp_img_app_banner.png",
    link: "/",
    type: "image"
  },
]);

const isAppPlay = ref(true);
const currentSlide = ref(0);
const autoplay = ref(true);

// 최신 새소식
const isNoticePlay= ref(true);
const notice = ref([
  {
    news: "관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공 관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공 관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공",
    link: "/",
  },
  { news: "최대글자수 초과 시 ...처리", link: "/" },
  { news: "선택 시 해당 새소식 상세페이지로 이동", link: "/" },
  { news: "제일 마지막 글 노출 후 다시 첫번째글로 루핑", link: "/" },
  {
    news: "새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식",
    link: "/",
  },
]);

// 추천 앱
const recomm = ref(0);
const isRecommPlay = ref(true);
const recommBtn = ref([
  { btn: "직무 추천" },
  { btn: "인기 앱 추천" },
  { btn: "많이 사용되는 앱" },
  { btn: "만족도가 높은 앱" },
]);


const recommApps = ref([
  {
    image: "@temp_main_app card_01.jpg",
    category: "금융",
    title: "NH QR",
    description: "도시와 농촌이 상생하는 사회를 위한 미래성장 가능한 식품 연구개발 및 농산물 안전 관리 서비스."
  },
  {
    image: "@temp_main_app card_02.jpg",
    category: "예약",
    title: "우리 농축협<br>예약관리",
    description: "농축협의 예약을 간편하게 관리하고 이용할 수 있는 서비스."
  },
  {
    image: "@temp_main_app card_03.jpg",
    category: "관리",
    title: "관리자 및 책임자<br>현황 관리",
    description: "도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스 도시와 농촌이 상생하는 사회..."
  },
  {
    image: "@temp_main_app card_04.jpg",
    category: "쇼핑",
    title: "농협몰",
    description: "신선한 농산물을 온라인에서 간편하게 구매할 수 있는 공식 쇼핑몰."
  },
  {
    image: "@temp_main_app card_05.jpg",
    category: "건강",
    title: "스마트 건강 관리",
    description: "건강 데이터 분석을 통해 맞춤형 건강 관리 솔루션 제공."
  },
  {
    image: "@temp_main_app card_06.jpg",
    category: "교육",
    title: "농업 교육 센터",
    description: "농업인들을 위한 전문 교육 과정 제공 및 온라인 강의 지원."
  },
  {
    image: "@temp_main_app card_01.jpg",
    category: "결제",
    title: "NH Pay",
    description: "빠르고 안전한 결제 시스템, 다양한 금융 서비스를 한곳에서."
  },
  {
    image: "@temp_main_app card_02.jpg",
    category: "지도",
    title: "농업 지도 시스템",
    description: "농업 관련 지도를 제공하여 최적의 재배 환경을 분석할 수 있는 서비스."
  },
  {
    image: "@temp_main_app card_03.jpg",
    category: "물류",
    title: "스마트 물류 관리",
    description: "농산물 물류를 최적화하고 실시간으로 추적할 수 있는 시스템."
  },
  {
    image: "@temp_main_app card_04.jpg",
    category: "보험",
    title: "농업 보험 서비스",
    description: "농작물 및 가축 보험을 간편하게 가입하고 관리할 수 있는 서비스."
  },
  {
    image: "@temp_main_app card_05.jpg",
    category: "지원",
    title: "정부 보조금 조회",
    description: "농업 보조금 및 지원금을 간편하게 조회하고 신청할 수 있는 서비스."
  },
  {
    image: "@temp_main_app card_06.jpg",
    category: "재무",
    title: "농업 재무 분석",
    description: "농업 재무 데이터를 분석하여 효율적인 운영 전략을 제공하는 서비스."
  }
]);

// quickLink
const quickLinks = ref([
  {
    appendIcon: "custom:faq",
    subtitle: "자주 묻는 질문을 찾아보세요.",
    title: "자주 묻는 질문",
    color: "success",
    to: "/",
  },
  {
    appendIcon: "custom:app-guide",
    subtitle: "앱 사용방법이 궁금하신가요?",
    title: "앱 가이드",
    color: "sky",
    to: "/",
  },
]);
</script>

<route lang="yaml">
meta:
  layout: MainLayout
</route>
