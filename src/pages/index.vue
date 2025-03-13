<template>
  <v-main class="main">
    <v-container
      class="inner"
    >
      <div class="user">
        김농협님
        안녕하세요.
      </div>
      <div class="content">
        <div class="text-rolling-container">
          <div
            class="rolling-wrapper"
            @mouseover="pauseAnimation"
            @mouseleave="resumeAnimation"
          >
            <ul
              ref="rollingList"
              class="rolling-list"
            >
              <li
                v-for="(item, index) in items"
                :key="index"
                @click="navigateTo(item.link)"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
        <section>
          <div class="tit-wrap">
            <strong class="title-1">
              이런 앱은 어떠세요?
            </strong>
            <v-btn
              color="info"
              size="large"
            >
              아이디어 제안하기
            </v-btn>
          </div>
        </section>
        <section>
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
        </section>
        <v-row class="section">
          <v-col
            v-for="(item, index) in quickLinks"
            :key="index"
            :md="6"
            :sm="12"
          >
            <v-card
              class="quick-links"
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
      </div>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject, ref } from 'vue';
const isMobile = inject('isMobile');
const isTablet = inject('isTablet');
const isDesktop = inject('isDesktop');

const rollingList = ref(null);
const items = ref([
  { text: "국민권익위원회 주관 2024년도 공공기관 종합청렴도 평가 결과 발표", link: "https://example.com/news1" },
  { text: "새로운 정책 발표 예정", link: "https://example.com/news2" },
  { text: "정부 지원 사업 신청 마감 임박", link: "https://example.com/news3" },
  { text: "기후 변화 대응 전략 공개", link: "https://example.com/news4" }
]);

const pauseAnimation = () => {
  if (rollingList.value) {
    rollingList.value.style.animationPlayState = "paused";
  }
};

const resumeAnimation = () => {
  if (rollingList.value) {
    rollingList.value.style.animationPlayState = "running";
  }
};
const navigateTo = (url) => {
  window.open(url, "_blank");
};
const quickLinks = ref([
  {
    appendIcon: 'custom:faq',
    subtitle: '자주 묻는 질문을 찾아보세요.',
    title: '자주 묻는 질문',
    color: 'success',
    to: '',
  },
  {
    appendIcon: 'custom:app-guide',
    subtitle: '앱 사용방법이 궁금하신가요?',
    title: '앱 가이드',
    color: 'sky',
    to: '',
  },
]);
</script>
<route lang="yaml">
meta:
  layout: MainLayout
</route>
