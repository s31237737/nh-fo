<template>
  <v-sheet
    class="top-banner apps-detail"
  >
    <v-container class="inner">
      <v-card
        class="top-banner-info"
        rounded="0"
      >
        <v-card-item>
          <div class="top-banner-title">
            <v-img
              v-if="isMobile"
              :src="getImageUrl(topbanner.appIcon)"
            />
            <div class="flag-wrap">
              <v-chip
                v-for="(badge, idx) in topbanner.badges.slice(0, 3)"
                :key="idx"
                :color="badge.color"
                variant="tonal"
                class="flag"
              >
                {{ badge.text }}
              </v-chip>
            </div>
            <v-card-title>
              {{ topbanner.title }}
            </v-card-title>
          </div>

          <v-card-text>
            {{ topbanner.description }}
          </v-card-text>
          <p class="version">
            <span>최근 업데이트: {{ topbanner.date }}</span>
            <span>버전: {{ topbanner.ver }}</span>
          </p>
          <v-card-actions>
            <!-- case: 앱 사용 신청 승인상태
            <v-btn
              class="btn-appSet"
              size="x-large"
              color="primary"
              variant="flat"
              :ripple="false"
            >
              앱 열기
            </v-btn> -->

            <!-- case: 신청 대기 중 -->
            <v-btn
              class="btn-appSet"
              size="x-large"
              color="secondary"
              variant="flat"
              :ripple="false"
              disabled
            >
              신청 대기 중
            </v-btn>

            <v-btn
              size="x-large"
              color="info"
              variant="flat"
              :ripple="false"
              prepend-icon="custom:share"
              @click="alert05 = true"
            >
              공유
            </v-btn>
            <v-btn
              size="x-large"
              color="info"
              variant="flat"
              :ripple="false"
              :class="{ active: isActive }"
              :prepend-icon="isActive ? 'custom:thumbsup-active' : 'custom:thumbsup'"
              @click="toggleActive"
            >
              좋아요
            </v-btn>
          </v-card-actions>
          <template
            v-if="!isMobile"
            #append
          >
            <v-img
              v-if="!isMobile"
              :width="isDesktop ? '200' : '120'"
              :src="getImageUrl(topbanner.appIcon)"
            />
          </template>
        </v-card-item>
      </v-card>
      <ul class="recomm-list mscroll-area">
        <li
          v-for="(item, index) in listData"
          :key="index"
        >
          <div class="item">
            <span>{{ item.title }}</span>
            <p class="line-clamp2">
              {{ item.content }}
            </p>
          </div>
          <v-icon
            :icon="item.type"
            size="x-large"
          />
        </li>
      </ul>
    </v-container>
  </v-sheet>
  <v-container class="inner">
    <!-- 앱 상세 미디어 정보 -->
    <section>
      <div class="slider apps-media-slide">
        <!-- !isMobile -->
        <v-carousel
          v-if="!isMobile"
          v-model="mediaSlide"
        >
          <v-carousel-item
            v-for="(slide, index) in groupedSliders"
            :key="index"
          >
            <!-- 첫 번째 이미지 -->
            <v-card
              :class="{ 'player': slide[0].player }"
              :ripple="false"
              @click="openPopupHandler(index, 0)"
            >
              <v-img :src="getImageUrl(slide[0].image)" />
            </v-card>

            <!-- 두 번째 이미지 (슬라이드에 두 번째 이미지가 있으면 표시) -->
            <v-card
              v-if="slide[1]"
              :class="{ 'player': slide[1].player }"
              :ripple="false"
              @click="openPopupHandler(index, 1)"
            >
              <v-img :src="getImageUrl(slide[1].image)" />
            </v-card>
          </v-carousel-item>
        </v-carousel>

        <!-- isMobile -->
        <v-carousel
          v-else
          v-model="mediaSlide"
        >
          <v-carousel-item
            v-for="(slide, index) in sliders"
            :key="index"
            tabindex="0"
          >
            <v-card
              :class="{ 'player': slide.player }"
              :ripple="false"
              @click="openPopupHandler(index)"
            >
              <v-img :src="getImageUrl(slide.image)" />
            </v-card>
          </v-carousel-item>
        </v-carousel>

        <SliderControls
          :current-slide="mediaSlide"
          :autoplay-use="false"
          :slide="isMobile ? sliders : groupedSliders"
          @update:current-slide="updateCurrentSlide"
        />
      </div>
    </section>

    <!-- 앱 상세 정보 -->
    <section>
      <div class="tit-wrap">
        <v-slide-group
          v-model="tab"
          center-active
        >
          <v-slide-group-item
            v-for="(item, i) in tabItem"
            :key="i"
            v-slot="{ isSelected }"
          >
            <v-btn
              size="large"
              :ripple="false"
              height="44"
              rounded="pill"
              :color="isSelected ? 'primary' : 'info'"
              @click="tab = i"
            >
              {{ item.btn }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <v-window
        v-model="tab"
        class="tab-container apps-information"
      >
        <v-window-item
          :transition="false"
        >
          <v-sheet class="w-box">
            <p class="apps-information-title">
              <strong>설명</strong>
            </p>
            <div class="editor-content">
              <div>
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
              </div>
            </div>
          </v-sheet>
        </v-window-item>

        <v-window-item
          :transition="false"
        >
          <v-sheet class="w-box">
            <p class="apps-information-title">
              <strong>버전명</strong>

              <v-select
                v-model="select"
                density="comfortable"
                rounded="pill"
                class="round"
                :items="['선택', '1.1.1 ver', '1.1.0 ver']"
                :menu-props="{ maxHeight: '208px', auto: true, }"
              />
            </p>
            <div class="editor-content">
              <div>
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
                도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스
              </div>
            </div>
          </v-sheet>
        </v-window-item>

        <v-window-item
          :transition="false"
        >
          <v-sheet class="w-box">
            <p class="apps-information-title">
              <strong>자주 묻는 질문</strong>
            </p>
            <v-expansion-panels
              v-if="subTabItemTab1.length > 0"
              variant="accordion"
              rounded="0"
            >
              <v-expansion-panel
                v-for="(panel, j) in subTabItemTab1.slice(0, 5)"
                :key="j"
              >
                <v-expansion-panel-title>
                  <p>{{ panel.title }}</p>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="editor-content">
                    <p class="mb-3">
                      <strong>{{ panel.appName }}</strong>
                    </p>
                    <div v-html="panel.content" />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-sheet>
        </v-window-item>
      </v-window>
    </section>

    <!-- 컨텐츠 배너 -->
    <section>
      <div
        class="apps-banner-wrap"
        :class="{ 'clickable': banner.link }"
      >
        <router-link
          to="/News/Guide"
          target="_blank"
        >
          <v-img
            role="banner"
            class="apps-banner"
            :style="{ backgroundImage: 'url('+getImageUrl(banner.imageUrl)+')' }"
            :to="banner.link"
          >
            <div class="description">
              <p>
                {{ banner.description }}
              </p>
            </div>
          </v-img>
        </router-link>
      </div>
    </section>

    <!-- 관련된 앱 추천 -->
    <section>
      <div class="tit-wrap row">
        <strong class="title-2">
          관련된 앱을 만나보세요!
        </strong>
        <div
          v-if="!isMobile & appsRecommend.length > 3"
          class="scroll-control"
        >
          <v-btn
            icon="custom:arrow-left"
            class="btn-scroll"
            variant="plain"
            :disabled="isAtStart"
            @click="scrollPrev"
          />
          <v-btn
            icon="custom:arrow-right"
            class="btn-scroll"
            variant="plain"
            :disabled="isAtEnd"
            @click="scrollNext"
          />
        </div>
      </div>

      <div class="apps-recomm-wrap">
        <div
          ref="scrollContainer"
          class="apps-list recomm"
          :class="{ scroll: !isMobile }"
          @scroll="checkScrollPosition"
        >
          <v-card
            v-for="(card, index) in appsRecommend"
            :id="`section${index + 1}`"
            :key="index"
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
                  @click.stop.prevent="alert00 = true"
                >
                  앱 열기
                </v-btn>
                <v-btn
                  v-else
                  color="secondary"
                  :ripple="false"
                  disabled
                >
                  신청 대기 중
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </section>
  </v-container>

  <PopupAppsImages
    v-model="openPopup"
    :sliders="sliders"
    :selected-index="selectedIndex"
  />

  <!-- alert -->
  <!-- 앱 열기 -->
  <v-dialog
    v-model="alert00"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert00 = false"
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
          @click="alert00 = false"
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
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { useRouter } from "vue-router";
import PopupAppsImages from "@/pages/popup/PopupAppsImages.vue";

const router = useRouter();
const isMobile = inject("isMobile");
const isDesktop = inject("isDesktop");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

/* alert */
const alert00 = ref(false);
const alert05 = ref(false);

/* top banner */
const topbanner =ref({
    appIcon: '@temp_img_app_icon01.png',
    title: '디지털 업무 가이드(최대 36자)',
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    date: '2025.04.01',
    ver: '1.0.0',
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
  }
);
const listData = ref([
  { type: 'custom:apptype', title: '앱 타입', content: '앱 타입명' },
  { type: 'custom:thumbsup-active', title: '좋아요 수', content: '100+' },
  { type: 'custom:user', title: '사용자 수', content: '1000+' },
  { type: 'custom:category', title: '카테고리 1', content: '태그명' },
  { type: 'custom:category', title: '카테고리 2', content: '태그명' }
]);

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};

/* 슬라이드 */
const openPopup = ref(false);
const sliders = ref([
  {
    image: '@temp_img_02.png',
    link: "https://www.youtube-nocookie.com/embed/FepuXV72_hQ",
    player: true,
    isPlaying: false,
  },
  {
    image: '@temp_img_03.png',
  },
  {
    image: '@temp_img_01_lg.png',
  },
  {
    image: '@temp_img_02.png',
  },
  {
    image: '@temp_img_03.png',
  },
  {
    image: '@temp_img_01_lg.png',
  },
].map((item, index) => ({ ...item, value: index })));

const groupedSliders = computed(() => {
  let grouped = [];
  for (let i = 0; i < sliders.value.length; i += 2) {
    grouped.push(sliders.value.slice(i, i + 2));
  }
  return grouped;
});

const mediaSlide = ref(0);

const updateCurrentSlide = (newSlide) => {
  const maxSlideIndex = isMobile.value ? sliders.value.length - 1 : groupedSliders.value.length - 1;
  if (newSlide >= 0 && newSlide <= maxSlideIndex) {
    mediaSlide.value = newSlide;
  }
};

const selectedIndex = ref(null);

const openPopupHandler = (index, subIndex = 0) => {
  let selectedSlide;

  if (isMobile.value) {
    selectedSlide = sliders.value[index];
  } else {
    selectedSlide = groupedSliders.value[index]?.[subIndex];
  }

  selectedIndex.value = selectedSlide ? selectedSlide.value : null;
  openPopup.value = true;
};


/* 탭 */
const select = ref("선택");
const tab = ref(0);
const tabItem = ref([
  { btn: '앱 정보'}, { btn: '업데이트 정보'}, { btn: '자주 묻는 질문'}
]);
const subTabItemTab1 = ref([
  {
    title: "자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공 자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공 자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공",
    appName: "",
    content: `
    <p>안녕하세요, 총무알리미 사용자 여러분.</p>
    <br>
    <p>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
    <br>
    <p>
      1. 사용자 인터페이스(UI) 개선
      앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
      메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
    </p>
    <br>
    <p>
      2. 알림 기능 강화
      알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
      중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
    </p>
    <br>
    <p>
      3. 사용자 의견 반영
      사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
      개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
      이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
    </p>
    <br>
    <p>감사합니다.</p>
    <p>총무알리미 팀 드림</p>
    `,
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
  {
    title: "앱 설치 방법",
    appName: "앱이름 노출",
    content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
  },
  {
    title: "로그인 문제 해결",
    appName: "앱이름 노출",
    content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
  },
]);


/* 컨텐츠 배너 */
const banner = ref({
  imageUrl: "img_apps_banner_03.png",
  description: "앱 사용 가이드 열기",
  link: "/AppGuideDetail",
});

/* apps recommand */
const scrollContainer = ref(null);
const cardWidth = 400 + 20;

const scrollPrev = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  }
};

const scrollNext = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  }
};

const isAtStart = ref(true);
const isAtEnd = ref(false);
const checkScrollPosition = () => {
  const container = scrollContainer.value;
  if (container) {
    isAtStart.value = container.scrollLeft === 0;
    isAtEnd.value =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;
  }
};

const appsRecommend = ref([
  {
    link: "/AppsDetail",
    title: "1공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
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
    link: "/AppsDetail",
    title: "2공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: true,
    likeCount: 100,
  },
  {
    link: "/AppsDetail",
    title: "3공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
    ],
    inUse: false,
    showOpenApp: true,
    likeCount: 555,
  },
  {
    link: "/AppsDetail",
    title: "4공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
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
    link: "/AppsDetail",
    title: "5공통총무알리미",
    subtitle: "총무형",
    badges: [
      { text: "NEW", color: "success" },
      { text: "추천", color: "purple" },
      { text: "HOT", color: "pink" }
    ],
    inUse: true,
    showOpenApp: true,
    likeCount: 100,
  },

]);
</script>
