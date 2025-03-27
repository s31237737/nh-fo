<template>
  <!-- banner slider -->
  <div class="slider keyvisual">
    <v-carousel
      v-model="currentSlide"
      :continuous="autoplay"
      :cycle="autoplay"
    >
      <v-carousel-item
        v-for="(slide, index) in sliders"
        :key="index"
        :role="slide.link ? 'link' : undefined"
        tabindex="0"
        @click="handleClick(slide)"
      >
        <template v-if="slide.type === 'recommand'">
          <!-- type 1: 앱 타입 -->
          <div class="visual-content">
            <div class="context">
              <span class="apptype">{{ slide.apptype }}</span>
              <strong class="title">{{ slide.title }}</strong>
              <p
                class="description"
              >
                {{ slide.description }}
              </p>
            </div>
            <div class="context-img">
              <v-img
                :src="getImageUrl(slide.image)"
                :alt="slide.alt"
              />
            </div>
          </div>
        </template>

        <template v-else-if="slide.type === 'img-type1'">
          <!-- 타입2-1: 배경이미지 + 타이틀 + 텍스트 -->
          <div class="visual-bg">
            <img
              :src="getImageUrl(slide.background)"
              alt="배경이미지"
            >
          </div>
          <div class="visual-content">
            <div class="context">
              <strong class="title">{{ slide.title }}</strong>
              <p
                class="description"
              >
                {{ slide.description }}
              </p>
            </div>
          </div>
        </template>

        <template v-else-if="slide.type === 'img-type2'">
          <!-- 타입2-2: 배경이미지 + 타이틀/ 타입2-3: 배경이미지 -->
          <div
            class="visual-bg"
            :class="slide.addClass"
          >
            <img
              :src="getImageUrl(slide.background)"
              alt="배경이미지"
            >
          </div>
          <div
            class="visual-content"
            :class="{ hidden: slide.hiddenContent }"
          >
            <div
              v-if="!slide.hiddenContent"
              class="context"
            >
              <strong class="title">{{ slide.title }}</strong>
            </div>
            <div v-else>
              {{ slide.alt }}
            </div>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
    <SliderControls
      :current-slide="currentSlide"
      :autoplay="autoplay"
      :slide="sliders"
      @update:current-slide="currentSlide = $event"
      @update:autoplay="autoplay = $event"
    />
  </div>
  <!--// banner slider -->

  <!-- contents area -->
  <v-container
    class="inner"
  >
    <!-- 앱: 전체 리스트 -->
    <section class="relative">
      <div class="tit-wrap">
        <strong class="title-2">
          앱 전체 리스트
        </strong>
      </div>

      <!-- scroll -->
      <div class="appcard-list-form">
        <div class="top">
          <v-text-field
            v-model="searchApps"
            class="search-inp round"
            placeholder="앱코드, 앱 이름을 검색해주세요."
            append-inner-icon="custom:search"
            rounded="pill"
            bg-color="white"
            @click:append-inner="onAppendClick"
          />
        </div>
        <div
          class="bottom"
        >
          <v-slide-group
            show-arrows
            prev-icon="custom:slide-prev"
            next-icon="custom:slide-next"
            :center-active="false"
          >
            <!-- 고정된 버튼 -->
            <v-slide-group-item>
              <div class="slide-select">
                <label>
                  직무
                </label>
                <v-btn
                  class="btn-selectJob"
                  rounded="pill"
                  variant="outlined"
                  append-icon="custom:select"
                  :ripple="false"
                >
                  전체
                </v-btn>
              </div>
            </v-slide-group-item>

            <!-- 최대 4개의 v-select 요소 -->
            <v-slide-group-item
              v-for="(item) in slideData"
              :key="item.selectId"
            >
              <div class="slide-select">
                <label>
                  {{ item.label }}
                </label>
                <v-select
                  :id="item.selectId"
                  v-model="item.selected"
                  rounded="pill"
                  density="comfortable"
                  :items="item.options"
                  :menu-props="{ auto: true, maxHeight: '208px', maxWidth: '100%' }"
                  @click.stop
                />
              </div>
            </v-slide-group-item>

            <!-- 고정된 버튼 -->
            <v-slide-group-item>
              <div class="slide-select">
                <v-btn
                  color="white"
                  icon="custom:refresh"
                  class="btn-refresh"
                />
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </div>
      </div>

      <!-- 앱 목록  -->
      <div class="appcard-list">
        <v-btn-toggle
          v-model="sort"
          color="primary"
          variant="text"
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
              <div class="appcard-top">
                <div>
                  <v-img
                    class="thumnail"
                    :src="getImageUrl(card.imageSrc)"
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
              <div class="appcard-bottom">
                <!-- 제목 -->
                <v-card-title class="title-4 line-clamp">
                  {{ card.title }}
                </v-card-title>

                <!-- 내용 -->
                <v-card-text class="text-3 line-clamp2">
                  {{ card.description }}
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-empty-state
          v-else
          text="'검색어' 검색결과가 없습니다."
          icon="custom:warning"
          bg-color="#FEFEFE"
          :height="isDesktop ? '720': '440'"
        />
      </div>
      <div class="appcard-list_btn">
        <v-btn
          v-if="cardData.length"
          variant="text"
          density="compact"
          append-icon="custom:arrow-down"
          color="quaternary"
          :ripple="false"
        >
          더보기
        </v-btn>
      </div>
    </section>

    <!-- 컨텐츠 배너 -->
    <section>
      <div
        class="line-banner-wrap"
        :class="{ 'clickable': banner.link }"
      >
        <v-img
          role="banner"
          class="line-banner"
          :style="{ backgroundImage: 'url('+getImageUrl(banner.imageUrl)+')' }"
          @click="bannerClick(banner)"
        >
          <div class="description">
            <p>
              {{ banner.description }}
            </p>
          </div>
        </v-img>
      </div>
    </section>

    <!-- 앱: 좋아요 리스트 (최소 4개 노출)-->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          가장 많은 좋아요를 받았어요!
        </strong>
      </div>
      <div class="appcard-list-wrap">
        <!-- 앱 목록(type2) -->
        <div class="appcard-list type2">
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
                <div class="appcard-top">
                  <div class="icon-text">
                    <v-icon
                      class="like"
                      size="x-large"
                      icon="custom:full-heart"
                    />
                    <span>{{ card.likeCount }}</span>
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
                <div class="appcard-bottom">
                  <div class="context">
                    <!-- 제목 -->
                    <v-card-subtitle class="line-clamp">
                      {{ card.subtitle }}
                    </v-card-subtitle>
                    <v-card-title class="title-4 line-clamp">
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
                      :ripple="false"
                    >
                      신청 대기중
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div
          v-if="isDesktop"
          class="fix_item"
        >
          <img
            src="../assets/images/img_apps_banner_01.png"
            alt=""
          >
        </div>
      </div>
    </section>

    <!-- 앱: 많이 쓰는 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          총무업무 담당자들이 자주 사용해요!
        </strong>
      </div>
      <!-- 앱 목록(type2) -->
      <div class="appcard-list type2">
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
              <div class="appcard-top">
                <!-- btn: 좋아요 -->
                <div class="icon-text">
                  <v-icon
                    class="like"
                    size="x-large"
                    icon="custom:full-heart"
                  />
                  <span>{{ card.likeCount }}</span>
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
              <div class="appcard-bottom">
                <div class="context">
                  <!-- 제목 -->
                  <v-card-subtitle class="line-clamp">
                    {{ card.subtitle }}
                  </v-card-subtitle>
                  <v-card-title class="title-4 line-clamp">
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
                    :ripple="false"
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
          bg-color="white"
          height="180"
          :icon="null"
        >
          <template #title>
            <div class="title-5">
              자신의 직무를 설정하시면,<br>맞춤형 앱을 추천드리고 있어요!
            </div>
          </template>
          <template #actions>
            <v-btn
              to="MyPage"
              color="info"
              size="default"
            >
              직무 설정하기
            </v-btn>
          </template>
        </v-empty-state>
      </div>
    </section>
  </v-container>

  <!-- alert -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
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
        <v-icon icon="custom:warning" />
        <strong class="title-5-bd">앱 열기</strong>
        <p class="text-4">
          [앱이름]을 여시겠습니까?
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
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
        >
          열기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- alert -->
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const isDesktop = inject("isDesktop");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

//app search
const searchApps = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};
const sort = ref(0);
const slideData = ref([
  { selectId: 'select01', label: '선택직무1', options: ['세부직군명1-1', '세부직군명1-1 외 4개', '세부직군명1-2', '세부직군명1-3', '세부직군명1-4'], selected: '세부직군명1 외 4개' },
  { selectId: 'select02', label: '선택직무2', options: ['세부직군2-1', '세부직군2-2', '세부직군2-3'], selected: '세부직군2-1' },
  { selectId: 'select03', label: '선택직무3', options: ['세부직군3-1', '세부직군3-2', '세부직군3-3'], selected: '세부직군3-1' },
  { selectId: 'select04', label: '선택직무4', options: ['세부직군4-1', '세부직군4-2', '세부직군4-3'], selected: '세부직군4-1' },
  { selectId: 'select05', label: '선택직무5', options: ['세부직군5-1', '세부직군5-2', '세부직군5-3'], selected: '세부직군5-1' }
]);
const selectRefs = ref([]);

const closeDropdown = (event) => {
  if (!selectRefs.value.some(select => select?.$el.contains(event.target))) {
    document.activeElement?.blur(); // 드롭다운 닫기
  }
};

onMounted(() => {
  window.addEventListener('touchstart', closeDropdown);
  window.addEventListener('scroll', closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener('touchstart', closeDropdown);
  window.removeEventListener('scroll', closeDropdown);
});

//keyvisual
const sliders = ref([
  {
    type: "recommand",
    link: "AppsDetail",
    apptype: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "@temp_img_apps_visual_02.png",
  },
  {
    type: "img-type1",
    title: "두 번째 배너두 번째 배너 설명",
    description: `두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명두 번째 배너 설명`,
    background: "@temp_img_apps_visual_01.png",
  },
  {
    type: "img-type2",
    title: "세 번째 배너",
    background: "@temp_img_apps_visual_01.png",
    addClass: "center"
  },
  {
    type: "img-type2",
    background: "@temp_img_apps_visual_01.png",
    addClass: "center",
    hiddenContent: "hidden",
    alt: "배경이미지",
  },
]);
const handleClick = (slide) => {
  if (!slide.link) {
    return; // link 없으면 아무 동작 X
  } else {
    router.push(slide.link);
  }
};
const currentSlide = ref(0);
const autoplay = ref(true);

//앱 전체 목록
const alert = ref(false); //"앱 열기" 팝업
const cardData = ref([
  {
    link: "AppsDetail",
    imageSrc: "@temp_img_app_icon03.png",
    title: "1공통총무알리미",
    description: "1농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    alt: "앱 이미지"
  },
  {
    link: "AppsDetail",
    imageSrc: "@temp_img_app_icon03.png",
    title: "2공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
    description: "2농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
    ],
    inUse: false,
  },
  {
    link: "AppsDetail",
    imageSrc: "@temp_img_app_icon03.png",
    title: "3공통총무알리미",
    description: "3농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
    badges: [
      { text: "NEW", color: "success" },
    ],
    inUse: true,
  },
  {
    link: "AppsDetail",
    imageSrc: "@temp_img_app_icon03.png",
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
    imageSrc: "@temp_img_app_icon03.png",
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
    imageSrc: "@temp_img_app_icon03.png",
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
    imageSrc: "@temp_img_app_icon03.png",
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
    imageSrc: "@temp_img_app_icon03.png",
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
    imageSrc: "@temp_img_app_icon03.png",
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

//앱 추천 목록
const cardRecommend2 = ref([
  // {
  //   link: "AppsDetail",
  //   title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
  //   subtitle: "총무형",
  //   badges: [
  //     { text: "NEW", color: "success" },
  //     { text: "추천", color: "purple" },
  //     { text: "HOT", color: "pink" }
  //   ],
  //   inUse: true,
  //   showOpenApp: true,
  //   likeCount: 999,
  // },
  // {
  //   link: "AppsDetail",
  //   title: "공통총무알리미",
  //   subtitle: "총무형",
  //   badges: [
  //     { text: "NEW", color: "success" },
  //     { text: "추천", color: "purple" },
  //     { text: "HOT", color: "pink" }
  //   ],
  //   inUse: true,
  //   showOpenApp: false,
  //   likeCount: 0,
  // },
  // {
  //   link: "AppsDetail",
  //   title: "공통총무알리미",
  //   subtitle: "총무형",
  //   badges: [
  //     { text: "NEW", color: "success" },
  //     { text: "추천", color: "purple" },
  //   ],
  //   inUse: false,
  //   showOpenApp: false,
  //   likeCount: 555,
  // },
]);

//배너
const banner = ref({
  imageUrl: "img_apps_banner_02.png",
  description: "세상에 없던 NH 고객 라이프\n관리 서비스 공개",
});
const bannerClick = (banner) => {
  if (!banner.link) {
    return; // link 없으면 아무 동작 X
  } else {
    router.push(banner.link);
  }
};
</script>
