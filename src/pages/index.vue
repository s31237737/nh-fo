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
        <div
          class="notice-banner"
        >
          <v-icon
            icon="custom:notice"
            size="small"
          />
          <div class="cont">
            <div class="links">
              <router-link
                v-for="(text, index) in texts"
                :key="index"
                :to="text.link"
              >
                {{ text.text }}
              </router-link>
            </div>
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

const texts = ref([
  { text: "관리자에서 메인 노출 선택한 최대 5개의 새소식 롤링되며 제공", link: "/" },
  { text: "최대글자수 초과 시 ...처리", link: "/" },
  { text: "선택 시 해당 새소식 상세페이지로 이동", link: "/" },
  { text: "제일 마지막 글 노출 후 다시 첫번째글로 루핑", link: "/" },
  { text: "새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식새소식", link: "/" }
]);


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
