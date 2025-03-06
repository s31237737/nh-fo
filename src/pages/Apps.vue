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
      class="pt-4 pb-4"
    >
      <!-- type 1 -->
      <v-col
        cols="12"
        xs="4"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          variant="flat"
        >
          <div class="d-flex justify-space-between">
            <div class="thumnail">
              <v-img
                :width="60"
                :height="60"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              />
            </div>
            <!-- flag: 최대 3개 노출 -->
            <div class="flags">
              <v-chip
                class="flag"
                color="secondary"
                variant="tonal"
                density="comfortable"
              >
                blue
              </v-chip>
              <v-chip
                class="flag"
                color="purple"
                variant="tonal"
                density="comfortable"
              >
                purple
              </v-chip>
              <v-chip
                class="flag"
                color="pink"
                variant="tonal"
                density="comfortable"
              >
                pink
              </v-chip>

              <!-- status: 사용신청 완료일 경우 -->
              <v-chip
                class="flag"
                color="primary"
                density="comfortable"
              >
                black
              </v-chip>
            </div>
          </div>

          <v-card-title class="pt-8">
            공통총무알리미
          </v-card-title>
          <v-card-text class="pt-3">
            농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱
          </v-card-text>
        </v-card>
      </v-col>

      <!-- type 2 -->
      <v-col
        cols="12"
        xs="4"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          variant="flat"
        >
          <div class="d-flex justify-space-between">
            <v-avatar
              rounded="0"
              size="60"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" />
            </v-avatar>
            <!-- flag: 최대 3개 노출 -->
            <div class="flags">
              <v-chip
                class="flag"
                color="secondary"
                variant="tonal"
                density="comfortable"
              >
                blue
              </v-chip>
              <v-chip
                class="flag"
                color="purple"
                variant="tonal"
                density="comfortable"
              >
                purple
              </v-chip>
              <v-chip
                class="flag"
                color="pink"
                variant="tonal"
                density="comfortable"
              >
                pink
              </v-chip>

              <!-- status: 사용신청 완료일 경우 -->
              <v-chip
                class="flag"
                color="primary"
                density="comfortable"
              >
                black
              </v-chip>
            </div>
          </div>


          <v-card-title class="pt-8">
            공통총무알리미
          </v-card-title>
          <v-card-text class="pt-3">
            농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱
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
</script>
