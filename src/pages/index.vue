<template>
  <v-main class="main">
    <v-container
      class="inner"
    >
      <div
        v-if="isDesktop"
        class="user"
      >
        김농협님
        안녕하세요.
      </div>
      <div class="content">
        <!-- 콘텐츠 배너 -->
        <!-- // 콘텐츠 배너 -->
        <!-- 최신 새소식 -->
        <div class="notice-banner">
          <v-icon
            icon="custom:notice"
            size="small"
          />
          <v-carousel
            direction="vertical"
            :cycle="isCycling"
            height="20"
            interval="5000"
            :show-arrows="false"
            hide-delimiters
            @mouseenter="isCycling = false"
            @mouseleave="isCycling = true"
          >
            <v-carousel-item
              v-for="(item, index) in notice"
              :key="index"
            >
              <router-link
                :to="item.link"
              >
                {{ item.news }}
              </router-link>
            </v-carousel-item>
          </v-carousel>
        </div>
        <!-- // 최신 새소식 -->
        <!-- 추천 앱 영역 -->
        <section>
          <div class="tit-wrap">
            <strong class="title-1">
              이런 앱은 어떠세요?
            </strong>
          </div>
        </section>
        <!-- // 추천 앱 영역 -->
        <!-- 커뮤니티 영역 -->
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
        <!-- // 커뮤니티 영역 -->
        <!-- quickLink -->
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
        <!-- // quickLink -->
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

// 최신 새소식
const isCycling = ref(true);
const notice = ref([
  { news: "관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공 관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공 관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공", link: "/" },
  { news: "최대글자수 초과 시 ...처리", link: "/" },
  { news: "선택 시 해당 새소식 상세페이지로 이동", link: "/" },
  { news: "제일 마지막 글 노출 후 다시 첫번째글로 루핑", link: "/" },
  { news: "새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식", link: "/" }
]);

// quickLink
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
