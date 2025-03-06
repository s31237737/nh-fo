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
    <v-row
      class="appsLst"
      no-gutters
    >
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="apps"
          variant="flat"
        >
          <div class="apps-top">
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
          <v-card-title class="title-5">
            {{ card.title }}
          </v-card-title>

          <!-- 내용 -->
          <v-card-text class="text-3">     
            {{ card.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      imageSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "secondary" },
        { text: "추천", color: "purple" },
      ],
    },
    {
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
