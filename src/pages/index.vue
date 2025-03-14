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
        <section class="community">
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
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                color="#D1E2FF"
                height="390"
              >
                <v-card-text>
                  <p class="title-4">
                    농산물 출하관리 앱 덕분에 업무 효율이 200% 늘었습니다.
                  </p>
                  <p class="text-2">
                    하나로마트 식품전문 일일점검
                  </p>
                  <v-icon
                    color="green"
                    icon="mdi-heart"
                  />
                  <span>982</span>
                  <div class="d-flex">
                    지원1팀
                    <v-divider
                      class="border-opacity-100"
                      vertical
                    />
                    김농협 대리
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                color="#3B424E"
                height="390"
              >
                <v-card-text>
                  <p class="title-4">
                    QR 코드를 활용해서 쉽게 간편하게 제품 스캔이 가능해요
                  </p>
                  <p class="text-2">
                    농산물 출하관리
                  </p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="12"
              lg="4"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  lg="12"
                >
                  <v-card
                    color="coolgray"
                    height="187"
                  >
                    <v-card-text>
                      <p class="title-5">
                        퇴비 비료를 효율적으로 관리할 수 있는 기능이 있으면 좋을 것 같아요!
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  lg="12"
                >
                  <v-card
                    color="coolgray"
                    height="187"
                  >
                    <v-card-text>
                      <p class="title-5">
                        농협 업스토어 덕분에 편리한 업무 할 수 있어 즐겁습니다 :D
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-card
                color="coolgray"
                height="136"
              >
                <v-card-text>
                  <p class="title-5">
                    농협 입사한 선임이라면 지금 바로 사용해보세요! 정말...
                  </p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-card
                color="coolgray"
                height="136"
              >
                <v-card-text>
                  <p class="title-5">
                    QR 코드를 활용해서 쉽고 간편하게 제품 스캔이 가능해요
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>
        <!-- // 커뮤니티 영역 -->
        <!-- quickLink -->
        <section class="quick-links">
          <v-row>
            <v-col
              v-for="(item, index) in quickLinks"
              :key="index"
              md="6"
              sm="12"
            >
              <v-card
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
        </section>
        <!-- // quickLink -->
      </div>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject, ref } from 'vue';
const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");

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
    appendIcon: "custom:faq",
    subtitle: "자주 묻는 질문을 찾아보세요.",
    title: "자주 묻는 질문",
    color: "success",
    to: "",
  },
  {
    appendIcon: "custom:app-guide",
    subtitle: "앱 사용방법이 궁금하신가요?",
    title: "앱 가이드",
    color: "sky",
    to: "",
  },
]);
</script>

<route lang="yaml">
meta:
  layout: MainLayout
</route>
