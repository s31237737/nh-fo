<template>
  <v-container class="inner">
    <div
      ref="scrollContainer"
      class="scroll-container"
    >
      <v-card
        v-for="(card, index) in cardRecommend2"
        :id="`section${index + 1}`"
        :key="index"
        :to="card.link"
        :ripple="false"
        class="appcard"
      >
        <div class="d-flex align-center">
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
        <div class="d-flex align-center">
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
    </div>
    <div class="d-flex justify-center align-center">
      <v-btn
        icon="custom:arrow-left"
        class="scroll-btn"
        @click="scrollPrev"
      />
      <v-btn
        v-for="(_, i) in cardRecommend2.length"
        :key="i"
        icon="custom:slide-dot"
        density="compact"
        class="dot"
        :class="{ active: currentSlide === i }"
        @click="scrollToSection(`section${i + 1}`)"
      />
      <v-btn
        icon="custom:arrow-right"
        class="scroll-btn"
        @click="scrollNext"
      />
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);
const cardWidth = 400 + 20;
const scrollToSection = (id) => {
  const container = scrollContainer.value;
  const target = document.getElementById(id);

  if (container && target) {
    console.log(`Scrolling to section: ${id}`);
    console.log(`Target offsetLeft: ${target.offsetLeft}`);
    container.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    });
  } else {
    console.warn('Container or target not found:', { container, target });
  }
};
const scrollPrev = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollBy({
      left: -cardWidth, // 왼쪽으로 한 칸 이동
      behavior: 'smooth',
    });
  }
};

// 다음 버튼 클릭 시 스크롤 이동
const scrollNext = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollBy({
      left: cardWidth, // 오른쪽으로 한 칸 이동
      behavior: 'smooth',
    });
  }
};
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
</script>

<style scoped>
.scroll-container {
  position: relative;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  gap: 20px;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-container .v-card {
  min-width: 400px;
}
</style>
