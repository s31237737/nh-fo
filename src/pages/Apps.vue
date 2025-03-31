<template>
  <!-- 사용자 맞춤형 앱 추천 배너 -->
  <div class="slider apps-slide-banner">
    <v-carousel
      v-model="currentSlide"
      :continuous="autoplay"
      :cycle="autoplay"
      :height="!isMobile ? '548': '526'"
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
          <div class="apps-slide-content">
            <div class="context">
              <span class="apptype">{{ slide.apptype }}</span>
              <strong class="title">{{ slide.title }}</strong>
              <p
                class="description"
              >
                {{ slide.description }}
              </p>
            </div>
            <div
              class="context-img"
            >
              <v-img
                :src="getImageUrl(slide.image)"
                :alt="slide.alt"
              />
            </div>
          </div>
        </template>

        <template v-else-if="slide.type === 'img-type1'">
          <!-- 타입2-1: 배경이미지 + 타이틀 + 텍스트 -->
          <div class="apps-slide-bg">
            <img
              :src="getImageUrl(slide.background)"
              alt="배경이미지"
            >
          </div>
          <div class="apps-slide-content">
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
            class="apps-slide-bg"
            :class="slide.addClass"
          >
            <img
              :src="getImageUrl(slide.background)"
              alt="배경이미지"
            >
          </div>
          <div
            class="apps-slide-content"
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

  <!-- contents area -->
  <v-container
    class="inner"
  >
    <!-- 앱 전체 리스트 -->
    <section class="relative">
      <div class="tit-wrap">
        <strong class="title-2">
          앱 전체 리스트
        </strong>
      </div>

      <!-- scroll -->
      <div class="apps-search-wrap">
        <v-text-field
          v-model="searchApps"
          class="search-inp round"
          placeholder="앱코드, 앱 이름을 검색해주세요."
          append-inner-icon="custom:search"
          rounded="pill"
          bg-color="white"
          @click:append-inner="onAppendClick"
        />
        <CategoryFilter :apps-category="appsCategory" />
      </div>

      <!-- 앱 목록  -->
      <div class="apps-list">
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
          v-if="appsData.length"
        >
          <v-col
            v-for="(card, index) in appsData"
            :key="index"
            lg="4"
            md="6"
            sm="12"
          >
            <v-card
              :ripple="false"
              :to="card.link"
              class="apps"
            >
              <div class="apps-top">
                <v-img
                  class="thumnail"
                  :src="getImageUrl(card.imageSrc)"
                  alt="앱 아이콘"
                  cover
                />
                <!-- 플래그(최대 3개) -->
                <div class="flag-wrap">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 필요할 때만 표시 -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="apps-bottom">
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
      <div class="apps-list-more">
        <v-btn
          v-if="appsData.length"
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
        role="banner"
        class="apps-banner"
        :class="{ 'clickable': appsBanner.link }"
        :style="{ backgroundImage: 'url('+getImageUrl(appsBanner.imageUrl)+')' }"
        @click="bannerClick(appsBanner)"
      >
        <div class="description">
          <p>
            {{ appsBanner.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- 좋아요 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          가장 많은 좋아요를 받았어요!
        </strong>
      </div>
      <div class="apps-list-grid">
        <!-- 앱 목록(type2) -->
        <div class="apps-list recomm">
          <v-row>
            <v-col
              v-for="(card, index) in appsData_recomm"
              :key="index"
              md="6"
              sm="12"
            >
              <v-card
                :ripple="false"
                :to="card.link"
                class="apps"
              >
                <div class="apps-top">
                  <div class="icon-text">
                    <v-icon
                      class="like"
                      size="x-large"
                      icon="custom:full-heart"
                    />
                    <span>{{ card.likeCount }}</span>
                  </div>

                  <!-- 플래그(최대 3개) -->
                  <div class="flag-wrap">
                    <v-chip
                      v-for="(badge, idx) in card.badges.slice(0, 3)"
                      :key="idx"
                      :color="badge.color"
                      variant="tonal"
                      class="flag"
                    >
                      {{ badge.text }}
                    </v-chip>

                    <!-- 필요할 때만 표시 -->
                    <v-chip
                      v-if="card.inUse"
                      class="flag"
                      color="primary"
                    >
                      사용중
                    </v-chip>
                  </div>
                </div>
                <div class="apps-bottom">
                  <div class="context">
                    <v-card-subtitle class="line-clamp">
                      {{ card.subtitle }}
                    </v-card-subtitle>
                    <v-card-title class="title-4 line-clamp">
                      {{ card.title }}
                    </v-card-title>
                  </div>
                  <div class="apps-bottom-btns">
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
          class="apps-side-img"
        >
          <img
            src="../assets/images/img_apps_banner_01.png"
            alt=""
          >
        </div>
      </div>
    </section>

    <!-- 많이 쓰는 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          총무업무 담당자들이 자주 사용해요!
        </strong>
      </div>
      <!-- 앱 목록(type2) -->
      <div class="apps-list recomm">
        <v-row
          v-if="appsData_recomm2.length"
        >
          <v-col
            v-for="(card, index) in appsData_recomm2"
            :key="index"
            lg="4"
            md="6"
            sm="12"
          >
            <v-card
              :to="card.link"
              :ripple="false"
              class="apps"
            >
              <div class="apps-top">
                <div class="icon-text">
                  <v-icon
                    class="like"
                    size="x-large"
                    icon="custom:full-heart"
                  />
                  <span>{{ card.likeCount }}</span>
                </div>
                <!-- 플래그(최대 3개) -->
                <div class="flag-wrap">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 필요할 때만 표시 -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="apps-bottom">
                <div class="context">
                  <!-- 제목 -->
                  <v-card-subtitle class="line-clamp">
                    {{ card.subtitle }}
                  </v-card-subtitle>
                  <v-card-title class="title-4 line-clamp">
                    {{ card.title }}
                  </v-card-title>
                </div>
                <div class="apps-bottom-btns">
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

  <!-- alert(sample) -->
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
import { ref, inject } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const isDesktop = inject("isDesktop");
const isMobile = inject("isMobile");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};


/* apps-slide-banner */
const sliders = ref([
  {
    type: "recommand",
    apptype: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: "도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스",
    image: "@temp_img_apps_visual_02.png", //앱 관련 이미지
    link: "AppsDetail", //랜딩 설정
  },
  {
    type: "img-type1",
    title: "등록된 제목 (최대 15자 노출)",
    description: "관리자에 등록된 서브 문구 (최대 100자 노출) 관리자에 등록된 서브 문구 (최대 100자 노출) 관리자에 등록된 서브 문구 (최대 100자 노출) 관리자에 등록된 서브 문구 (최대 100자 노출)",
    background: "@temp_img_apps_visual_01.png", //배경이미지
  },
  {
    type: "img-type2",
    title: "등록된 제목 (최대 15자 노출)",
    background: "@temp_img_apps_visual_01.png", //배경이미지
    addClass: "center"
  },
  {
    type: "img-type2",
    background: "@temp_img_apps_visual_01.png", //배경이미지
    addClass: "center",
    hiddenContent: "hidden",
  },
]);
const currentSlide = ref(0);
const autoplay = ref(true);
const handleClick = (slide) => {
  if (!slide.link) {
    return; // link 없으면 아무 동작 X
  } else {
    router.push(slide.link);
  }
};


/* apps-search-wrap */
const searchApps = ref("");
const onAppendClick = () => {
  alert("Append icon clicked!");
};
const appsCategory = ref([
  { label: '선택직무1', options: ['세부직군1-1', '세부직군1-2'], selected: '세부직군1-1' },
  { label: '선택직무2', options: ['세부직군2-1', '세부직군2-2'], selected: '세부직군2-1' },
  { label: '선택직무3', options: ['세부직군3-1', '세부직군3-2'], selected: '세부직군3-1' },
  { label: '선택직무4', options: ['세부직군4-1', '세부직군4-2'], selected: '세부직군4-1' },
]);
// const testCategory = ref([
//   { label: 't선택직무1', options: ['t세부직군1-1', 't세부직군1-2'], selected: 't세부직군1-1' },
//   { label: 't선택직무2', options: ['t세부직군2-1', 't세부직군2-2'], selected: 't세부직군2-1' },
//   { label: 't선택직무3', options: ['t세부직군3-1', 't세부직군3-2'], selected: 't세부직군3-1' },
//   { label: 't선택직무4', options: ['t세부직군4-1', 't세부직군4-2'], selected: 't세부직군4-1' },
//   { label: 't선택직무5', options: ['t세부직군5-1', 't세부직군5-2'], selected: 't세부직군5-1' },
// ]);

//apps-list
const sort = ref(0);
const alert = ref(false); //"앱 열기" 팝업
const appsData = ref([
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
const appsData_recomm = ref([
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
const appsData_recomm2 = ref([
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

//배너
const appsBanner = ref({
  imageUrl: "img_apps_banner_02.png",
  description: "세상에 없던 NH 고객 라이프\n관리 서비스 공개",
});
const bannerClick = (appsBanner) => {
  if (!appsBanner.link) {
    return; // link 없으면 아무 동작 X
  } else {
    router.push(appsBanner.link);
  }
};
</script>
