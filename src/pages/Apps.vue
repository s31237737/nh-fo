<template>
  <!-- banner slider -->
  <div class="keyvisual">
    <v-window
      v-model="slider"
      touchless
    >
      <!-- type 1: 앱 타입 -->
      <v-window-item
        class="visual"
      >
        <div class="visual-content">
          <div class="context">
            <span class="type">{{ visual[0].type }}</span>
            <strong class="title">{{ visual[0].title }}</strong>
            <p
              class="description"
              v-html="visual[0].description"
            />
          </div>
          <div class="context-img">
            <v-img
              :src="visual[0].image"
              :alt="visual[0].title"
            />
          </div>
        </div>
      </v-window-item>
      
      <!-- 타입2-1: 배경이미지+텍스트 -->
      <v-window-item
        class="visual"
      >
        <div class="visual-bg">
          <img :src="visual[1].background">
        </div>
        <div class="visual-content">
          <div class="context">
            <strong class="title">{{ visual[1].title }}</strong>
            <p
              class="description"
              v-html="visual[1].description"
            />
          </div>
        </div>
      </v-window-item>

      <!-- 타입2-2: 배경이미지+텍스트 -->
      <v-window-item
        class="visual"
      >
        <div class="visual-bg">
          <img :src="visual[1].background">
        </div>
        <div class="visual-content">
          <div class="context">
            <strong class="title">{{ visual[2].title }}</strong>
          </div>
        </div>
      </v-window-item>
      
      <!-- 타입2-3: 배경이미지 -->
      <v-window-item
        class="visual"
      >
        <div class="visual-bg">
          <img :src="visual[1].background">
        </div>
        <div class="hidden">
          {{ visual[3].alt }}
        </div>
      </v-window-item>
    </v-window>

    <div class="controls">
      <v-btn
        density="compact"
        class="prev arrow-btn"
        icon="custom:slide-prev"
        @click="() => changeSlide(-1)"
      />

      <div class="indicator">
        <span
          v-for="(_, index) in visual"
          :key="index"
          :class="{ active: slider === index }"
        ><v-icon
          icon="custom:slide-dot"
          size="small"
        /></span>
      </div>

      <v-btn
        density="compact"
        class="togglePlay"
        icon
        @click="toggleAutoPlay"
      >
        <v-icon>{{ autoPlay ? "custom:auto-pause" : "custom:auto-play" }}</v-icon>
      </v-btn>

      <v-btn
        density="compact"
        class="next arrow-btn"
        icon="custom:slide-next"
        @click="() => changeSlide(1)"
      />
    </div>
  </div>
  <!--// banner slider -->

  <!-- contents area -->
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

      <!-- form -->
      <div class="appcard-list-top">
        <v-btn-toggle
          v-model="sort"
          color="primary"
          variant="text"
          class="sort-btns"
          density="compact"
        >
          <v-btn 
            :ripple="false"
          >
            업데이트순
          </v-btn>
          <v-btn
            :ripple="false"
          >
            인기순
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- 앱 목록  -->
      <div class="appcard-list">
        <v-row
          v-if="cardData.length"
        >
          <v-col
            v-for="(card, index) in cardData"
            :key="index"
            lg="4"
            md="6"
            sm="12"
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
                <div class="flag-wrap r">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
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
        <div class="appcard-list_btn">
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

    <!-- 컨텐츠 배너 -->
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
      <div class="appcard-list fix">
        <v-row>
          <v-col
            v-for="(card, index) in cardRecommend"
            :key="index"
            md="6"
            sm="12"
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
                <div class="flag-wrap r">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
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
          class="fix_item"
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
      <div class="appcard-list">
        <v-row
          v-if="cardRecommend2.length"
        >
          <v-col
            v-for="(card, index) in cardRecommend2"
            :key="index"
            lg="4"
            md="6"
            sm="12"
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
                <div class="flag-wrap r">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
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
import { ref, onMounted, onUnmounted } from "vue";
import { inject } from 'vue';

const isDesktop = inject('isDesktop');
const alert = ref(false); //"앱 열기" 팝업
const sort = ref(0);

//keyvisual
const visual = ref([
  {
    type: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "src/assets/images/apps_visual_bnr01.png",
  },
  {
    title: "두 번째 배너두 번째 배너 설명",
    description: `두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명`,
    background: "src/assets/images/dummy_visual_banner_01.png",
  },
  {
    title: "세 번째 배너",
    background: "src/assets/images/dummy_visual_banner_01.png",
  },
  {
    background: "src/assets/images/dummy_visual_banner_01.png",
    alt: "배경이미지"
  },
]);

const slider = ref(0);
const autoPlay = ref(true);
let interval = null, restartTimeout = null;

const startAutoPlay = () => {
  stopAutoPlay();
  if (autoPlay.value) {
    interval = setInterval(() => slider.value = (slider.value + 1) % visual.value.length, 3000);
  }
};

const stopAutoPlay = () => {
  clearInterval(interval);
  clearTimeout(restartTimeout);
  interval = restartTimeout = null;
};

const restartAutoPlay = () => {
  stopAutoPlay();
  restartTimeout = setTimeout(() => autoPlay.value && startAutoPlay(), 300);
};

const toggleAutoPlay = () => {
  autoPlay.value = !autoPlay.value;
  autoPlay.value ? startAutoPlay() : stopAutoPlay();
};

const changeSlide = (direction) => {
  slider.value = (slider.value + direction + visual.value.length) % visual.value.length;
  restartAutoPlay();
};

onMounted(startAutoPlay);
onUnmounted(stopAutoPlay);

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
