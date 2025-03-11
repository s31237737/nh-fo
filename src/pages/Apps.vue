<template>
  <!-- <v-carousel
    :show-arrows="false"
    height="400"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
  <v-container
    class="inner"
  >
    <!-- 앱: 전체 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          앱 전체 리스트
        </strong>
      </div>
      <div class="apps-list-top">
        <div class="select-group">
          select group
        </div>
        <div class="sort-group">
          sort btns
        </div>
      </div>
      <div class="tit-form">
        <div class="selection-group">
          <v-select
            v-model="select"
            density="default"
            label="앱 타입"
            :items="['전체', '타입1', '타입2']"
          />
        </div>
        <div class="toggle-btns">
          toggle
        </div>
      </div>
      <!-- 앱 목록  -->
      <div class="apps-list">
        <v-row
          v-if="cardData.length"
        >
          <v-col
            v-for="(card, index) in cardData"
            :key="index"
            cols="4"
          >
            <v-card
              :ripple="false"
              :to="card.link"
              class="appcard"
            >
              <div class="d-flex">
                <div>
                  <v-img
                    class="thumnail"
                    :src="card.imageSrc"
                    alt="앱 아이콘"
                    cover
                  />
                </div>
                <!-- 배지 (최대 3개) -->
                <div class="flags">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    density="comfortable"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    density="comfortable"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="d-flex flex-column">
                <!-- 제목 -->
                <v-card-title class="title-4 clamp2">
                  {{ card.title }}
                </v-card-title>

                <!-- 내용 -->
                <v-card-text class="text-3 clamp2">
                  {{ card.description }}
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-empty-state
          v-else
          text="‘농협' 검색결과가 없습니다."
          icon="custom:warning"
          bg-color="#FEFEFE"
        />
        <div class="apps-list_btn">
          <v-btn
            variant="text"
            density="compact"
            append-icon="custom:arrow-down"
            color="quaternary"
            :ripple="false"
          >
            더보기
          </v-btn>
        </div>
      </div>
      <!--// 앱 목록  -->
    </section>

    <!-- 배너 -->
    <section class="banner-wrap">
      <v-img
        class="banner"
        :style="{ backgroundImage: `url(${banner.imageUrl})` }"
      >
        <div class="banner-text">
          <p v-html="banner.description" />
        </div>
      </v-img>
    </section>

    <!-- 앱: 좋아요 리스트 (최소 4개 노출)-->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          가장 많은 좋아요를 받았어요!
        </strong>
      </div>
      <!-- 앱 목록 -->
      <div class="apps-list grid">
        <v-row>
          <v-col
            v-for="(card, index) in cardRecommend"
            :key="index"
            cols="6"
          >
            <v-card
              :ripple="false"
              :to="card.link"
              class="appcard"
            >
              <div class="d-flex align-center">
                <div class="">
                  <!-- btn: 좋아요 -->
                  <v-btn
                    variant="text"
                    prepend-icon="custom:full-heart"
                    color="primary"
                    :ripple="false"
                    class="like"
                    @click.stop.prevent="incrementLikes(card)"
                  >
                    {{ card.likeCount }}
                  </v-btn>
                </div>
                <!-- 배지 (최대 3개) -->
                <div class="flags">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    density="comfortable"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    density="comfortable"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="d-flex align-center">
                <div class="context">
                  <!-- 제목 -->
                  <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                  <v-card-title class="title-4">
                    {{ card.title }}
                  </v-card-title>
                </div>
                <div class="btns">
                  <v-btn
                    v-if="card.showOpenApp"
                    color="info"
                    :ripple="false"
                    @click.stop.prevent="alert = true"
                  >
                    앱 열기
                  </v-btn>
                  <v-btn
                    v-else
                    color="secondary"
                    disabled
                  >
                    신청 대기중
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div
          v-if="isDesktop"
          class="apps-grid-fix"
        >
          <img
            src="../assets/images/apps_bnr_bg02.png"
            alt=""
          >
        </div>
      </div>
      <!--// 앱 목록 -->
    </section>

    <!-- 앱: 많이 쓰는 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          총무업무 담당자들이 자주 사용해요!
        </strong>
      </div>
      <!-- 앱 목록 -->
      <div class="apps-list">
        <v-row
          v-if="cardRecommend2.length"
        >
          <v-col
            v-for="(card, index) in cardRecommend2"
            :key="index"
            cols="4"
          >
            <v-card
              :to="card.link"
              :ripple="false"
              class="appcard"
            >
              <div class="d-flex align-center">
                <div class="">
                  <!-- btn: 좋아요 -->
                  <v-btn
                    variant="text"
                    prepend-icon="custom:full-heart"
                    color="primary"
                    :ripple="false"
                    class="like"
                    @click.stop.prevent="incrementLikes(card)"
                  >
                    {{ card.likeCount }}
                  </v-btn>
                </div>
                <!-- 배지 (최대 3개) -->
                <div class="flags">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    density="comfortable"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    density="comfortable"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="d-flex align-center">
                <div class="context">
                  <!-- 제목 -->
                  <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                  <v-card-title class="title-4">
                    {{ card.title }}
                  </v-card-title>
                </div>
                <div class="btns">
                  <v-btn
                    v-if="card.showOpenApp"
                    color="info"
                    @click.stop.prevent="alert = true"
                  >
                    앱 열기
                  </v-btn>
                  <v-btn
                    v-else
                    color="secondary"
                    disabled
                  >
                    신청 대기중
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-empty-state
          v-else
          text="‘농협' 검색결과가 없습니다."
        />
      </div>
      <!--// 앱 목록 -->
    </section>
  </v-container>

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
</template>

<script setup>
import { ref } from 'vue';
import { inject } from 'vue';
//import bannerImage from '@/assets/images/apps_bnr_bg01.png'; // 배너 이미지

const isDesktop = inject('isDesktop');
const alert = ref(false); //"앱 열기" 팝업
const select = ref("전체");

//slide
// const slides = [
//   'First',
//   'Second',
//   'Third',
//   'Fourth',
//   'Fifth',
// ]

//앱 전체 목록
const cardData = ref([
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "1공통총무알리미",
    description: "1농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "2공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
    description: "2농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
    ],
    inUse: false,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "3공통총무알리미",
    description: "3농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "4공통총무알리미",
    description: "4농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "5공통총무알리미",
    description: "5농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "6공통총무알리미",
    description: "6농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "7공통총무알리미",
    description: "7농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "8공통총무알리미",
    description: "8농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "src/assets/images/app_module_img.png",
    title: "9공통총무알리미",
    description: "9농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
  }
]);

//앱 좋아요 목록
const cardRecommend = ref([
  {
    link: "AppsDetail",
    title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: true,
    likeCount: 999,
  },
  {
    link: "AppsDetail",
    title: "공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: false,
    likeCount: 0,
  },
  {
    link: "AppsDetail",
    title: "공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
    ],
    inUse: false,
    showOpenApp: false,
    likeCount: 555,
  },
  {
    link: "AppsDetail",
    title: "공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
    ],
    inUse: false,
    showOpenApp: false,
    likeCount: 888,
  }
]);
const cardRecommend2 = ref([
  {
    link: "AppsDetail",
    title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: true,
    likeCount: 999,
  },
  {
    link: "AppsDetail",
    title: "공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: false,
    likeCount: 0,
  },
  {
    link: "AppsDetail",
    title: "공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
    ],
    inUse: false,
    showOpenApp: false,
    likeCount: 555,
  },
]);
const incrementLikes = (card) => {
  card.likeCount++;
};

//배너
const banner = ref({
  imageUrl: "src/assets/images/apps_bnr_bg01.png",
  description: "세상에 없던 NH 고객 라이프<br>관리 서비스 공개"
});
</script>
