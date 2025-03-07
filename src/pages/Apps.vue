<template>
  <v-carousel
    :show-arrows="false"
    height="400"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-container
    class="inner"
  >
    <p class="title-2 pb-10">
      앱 전체 리스트
    </p>
    <!-- 앱 목록  -->
    <v-row
      class="appsLst"
    >
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        cols="12"
        lg="4"
      >
        <v-card
          :to="card.link"
          class="apps"
          variant="flat"
        >
          <div class="d-flex">
            <div class="thumnail">
              <v-img
                :src="card.imageSrc"
                alt="앱 아이콘"
                cover
              />
            </div>
            <!-- 배지 (최대 3개) -->
            <div class="flags">
              <v-chip
                v-for="(badge, idx) in card.badges.slice(0, 3)"
                :key="idx"
                :color="badge.color"
                variant="tonal"
                density="comfortable"
                class="flag"
              >
                {{ badge.text }}
              </v-chip>

              <!-- 상태 배지 (필요할 때만 표시) -->
              <v-chip
                class="flag"
                density="comfortable"
                color="primary"
              >
                사용중
              </v-chip>
            </div>
          </div>

          <!-- 제목 -->
          <div class="d-flex flex-column">
            <v-card-title class="title-5">
              {{ card.title }}
            </v-card-title>

            <!-- 내용 -->
            <v-card-text class="text-3">
              {{ card.description }}
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!--// 앱 목록  -->

    <p class="title-2 pb-10">
      가장 많은 좋아요를 받았어요!
    </p>
    <!-- 앱 목록 -->
    <v-row
      class="appsLst"
    >
      <v-col
        v-for="(card, index) in cardData2"
        :key="index"
        cols="12"
        lg="4"
      >
        <v-card
          :to="card.link"
          class="apps"
          variant="flat"
        >
          <div class="d-flex">
            <div class="like">
              <v-btn
                color="medium-emphasis"
                prepend-icon="mdi-heart"
                size="small"
              >
                999
              </v-btn>
            </div>
            <!-- 배지 (최대 3개) -->
            <div class="flags">
              <v-chip
                v-for="(badge, idx) in card.badges.slice(0, 3)"
                :key="idx"
                :color="badge.color"
                variant="tonal"
                density="comfortable"
                class="flag"
              >
                {{ badge.text }}
              </v-chip>

              <!-- 상태 배지 (필요할 때만 표시) -->
              <v-chip
                class="flag"
                density="comfortable"
                color="primary"
              >
                사용중
              </v-chip>
            </div>
          </div>

          <!-- 제목 -->
          <div class="d-flex align-center">
            <div class="context">
              <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
              <v-card-title class="title-5">
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
                v-else-if="card.showApply"
                color="info"
                disabled
              >
                신청 대기중
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!--// 앱 목록 -->
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
import { ref } from 'vue';

  const alert = ref(false);
  const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
  ]
  const cardData = ref([
    {
      link: "src/pages/AppsDetail",
      imageSrc: "src/assets/images/profile.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
    },
    {
      link: "src/pages/AppsDetail",
      imageSrc: "src/assets/images/profile.png",
      title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
    },
    {
      link: "src/pages/AppsDetail",
      imageSrc: "src/assets/images/profile.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
    },
    {
      link: "src/pages/AppsDetail",
      imageSrc: "src/assets/images/profile.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
    }
  ]);
  const cardData2 = ref([
    {
      link: "src/pages/AppsDetail",
      title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      showOpenApp: true,
      showApply: false,
    },
    {
      link: "src/pages/AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      showOpenApp: false,
      showApply: true,
    },
    {
      link: "src/pages/AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
      showOpenApp: false,
      showApply: true,
    },
    {
      link: "src/pages/AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
      showOpenApp: false,
      showApply: true,
    }
  ]);

</script>
