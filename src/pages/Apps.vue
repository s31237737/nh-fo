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
      no-gutters
    >
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        cols="12"
        lg="4"
      >
        <v-card
          class="apps"
          variant="flat"
          :href="card.href"
          target="_blank"
        >
          <div class="apps-flex">
            <div class="thumnail">
              <v-img
                :width="60"
                :height="60"
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
                class="flag ma-1"
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
          <v-card-title class="title-5 pt-8">
            {{ card.title }}
          </v-card-title>

          <!-- 내용 -->
          <v-card-text class="text-3">     
            {{ card.description }}
          </v-card-text>
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
      no-gutters
    >
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        cols="12"
        lg="4"
      >
        <v-card
          class="apps"
          variant="flat"
          target="_blank"
        >
          <!-- :href="card.href" -->
          <div class="apps-flex align-center">
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
                class="flag ma-1"
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
          <div class="apps-flex align-end pt-8">
            <div class="context">
              <v-card-subtitle>총무형</v-card-subtitle>
              <v-card-title class="title-5">
                {{ card.title }}
              </v-card-title>
            </div>
            <div class="btns">
              <v-btn
                color="tertiary"
                variant="outlined"
              >
                앱 열기
              </v-btn>
              <!-- <v-btn color="primary">
                신청 대기중
              </v-btn> -->
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!--// 앱 목록 -->
  </v-container>
</template>

<script setup>
//import { inject } from 'vue';
//const isMobile = inject('isMobile');

  const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
  ]

  const cardData = [
    {
      href: "#",
      imageSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "secondary" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
    },
    {
      href: "#",
      imageSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "secondary" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
    },
    {
      href: "#",
      imageSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "secondary" },
        { text: "추천", color: "purple" },
      ],
    },
    {
      href: "#",
      imageSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "secondary" },
        { text: "추천", color: "purple" },
      ],
    }
  ];
</script>
