<template>
  <div class="my-app">
    <!-- 사용중인 앱 -->
    <v-sheet class="w-box">
      <div class="tit-wrap">
        <strong class="title-5-bd">
          사용중인 앱
        </strong>
        <div class="btns">
          <v-select
            v-model="select01"
            :width="isDesktop ? 'auto' : '105'"
            density="compact"
            :items="['최근접속순', '가장많은 접속순', '업데이트순', '가나다순']"
          />
          <v-btn
            v-if="!isEditMode"
            color="info"
            @click="isEditMode=true"
          >
            편집
          </v-btn>
        </div>
        <div
          v-if="isEditMode"
          class="action"
        >
          <v-btn
            color="info"
            @click="isEditMode=false"
          >
            편집완료
          </v-btn>
          <v-btn
            :disabled="selection.length === 0"
            color="warning"
            variant="outlined"
            @click="alert=true"
          >
            삭제
          </v-btn>
        </div>
      </div>
      <v-list
        v-if="useApps.length > 0"
        v-model:selected="selection"
        select-strategy="multiple"
        class="app-list"
      >
        <v-list-item
          v-for="(item, index) in useApps"
          :key="index"
          :value="item.value"
          :ripple="false"
        >
          <template #prepend="{ isSelected }">
            <v-list-item-action v-if="isEditMode">
              <v-checkbox-btn
                :model-value="isSelected"
              />
            </v-list-item-action>
            <div class="img">
              <v-img
                :src="getImageUrl(item.image)"
              />
            </div>
          </template>

          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>

          <v-list-item-action>
            <v-btn
              color="info"
              size="small"
              :disabled="isEditMode"
            >
              앱 열기
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <!-- 게시글 없을 경우 -->
      <v-empty-state
        v-else
        :height="isDesktop ? '235': '260'"
        icon="null"
      >
        <template #text>
          <div class="text-2-md text-quaternary">
            신청대기중인 앱이 없습니다.
          </div>
        </template>
        <template #actions>
          <v-btn
            color="primary"
            size="x-large"
            to="/Apps"
          >
            Apps 보러가기
          </v-btn>
        </template>
      </v-empty-state>
    </v-sheet>
    <!-- 추천앱 영역 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          관련된 앱을 만나보세요!
        </strong>
      </div>

      <div class="apps-recomm-wrap">
        <div
          v-if="isDesktop & appsRecommend.length > 3"
          class="scroll-control"
        >
          <v-btn
            icon="custom:arrow-left"
            class="btn-scroll"
            :disabled="isAtStart"
            @click="scrollPrev"
          />
          <v-btn
            icon="custom:arrow-right"
            class="btn-scroll"
            :disabled="isAtEnd"
            @click="scrollNext"
          />
        </div>

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
                  신청 대기중
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </section>

    <!-- 신청대기 앱 -->
    <v-sheet class="w-box">
      <div class="tit-wrap">
        <strong class="title-5-bd">
          신청대기 앱
        </strong>
        <div class="btns">
          <v-select
            v-model="select02"
            density="compact"
            :items="['최근신청순', '가나다순']"
          />
        </div>
      </div>
      <v-list
        v-if="waitingApps.length > 0"
        class="app-list"
      >
        <v-list-item
          v-for="(item, index) in waitingApps"
          :key="index"
        >
          <template #prepend>
            <div class="img">
              <v-img
                :width="50"
                :src="getImageUrl(item.image)"
              />
            </div>
          </template>

          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>

          <v-list-item-action>
            <v-btn
              color="secondary"
              size="small"
              disabled
            >
              신청 대기중
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <!-- 게시글 없을 경우 -->
      <v-empty-state
        v-else
        :height="isDesktop ? '314': '260'"
        icon="null"
      >
        <template #text>
          <div class="text-2-md text-quaternary">
            신청대기중인 앱이 없습니다.
          </div>
        </template>
        <template #actions>
          <v-btn
            color="primary"
            size="x-large"
            to="/Apps"
          >
            Apps 보러가기
          </v-btn>
        </template>
      </v-empty-state>
    </v-sheet>
  </div>

  <!-- 삭제 얼럿 -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
    @after-leave="isDelete = false"
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
            @click="alert = false"
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
          @click="alert = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject } from "vue";

const isDesktop = inject("isDesktop");

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};


const isDelete = ref(false);
const alert = ref(false);

// form
const select01 = ref("최근접속순");
const select02 = ref("최근신청순");

const isEditMode = ref(false);

// useApps
const selection = ref([]);
const useApps = ref([
  // { value: 'useApps01', title: 'IT 일일 점검', image: '@temp_img_app_icon01.png' },
  // { value: 'useApps02', title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon02.png' },
  // { value: 'useApps03', title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon03.png' },
  // { value: 'useApps04', title: 'IT 일일 점검', image: '@temp_img_app_icon04.png' },
  // { value: 'useApps05', title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon05.png' },
  // { value: 'useApps06', title: '하나로마트 식품 안전 일일 점검', image: '@temp_img_app_icon06.png' },
  // { value: 'useApps07', title: 'IT 일일 점검', image: '@temp_img_app_icon07.png' },
  // { value: 'useApps08', title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon08.png' },
  // { value: 'useApps09', title: '하나로마트 식품 안전 일일 점검', image: '@temp_img_app_icon09.png' },
]);
// waitingApps
const waitingApps = ref([
  // { title: 'IT 일일 점검', image: '@temp_img_app_icon01.png' },
  // { title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon02.png' },
  // { title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon03.png' },
  // { title: 'IT 일일 점검', image: '@temp_img_app_icon04.png' },
  // { title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon05.png' },
  // { title: '하나로마트 식품 안전 일일 점검', image: '@temp_img_app_icon06.png' },
  // { title: 'IT 일일 점검', image: '@temp_img_app_icon07.png' },
  // { title: '퇴비비료 생산 및 출고관리', image: '@temp_img_app_icon08.png' },
  // { title: '하나로마트 식품 안전 일일 점검', image: '@temp_img_app_icon09.png' },
]);


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
