<template>
  <!-- banner slider -->
  <v-carousel
    v-model="slide"
    v-model:cycle="autoplay"
    class="keyvisual2"
    :interval="30000"
  >
    <v-carousel-item
      v-for="(visual, i) in visuals"
      :key="i"
      class="visual"
    >
      <div class="visual-bg">
        <img :src="visual.image">
      </div>
      <div class="visual-content">
        <div class="context">
          <strong class="title">{{ visual.title }}</strong>
          <p
            class="description"
            v-html="visual.description"
          />
        </div>
      </div>
    </v-carousel-item>
    <template #controls>
      <div class="custom-controls">
        <!-- 왼쪽 버튼 -->
        <v-btn
          icon="mdi-chevron-left"
          @click="prevSlide"
        />

        <!-- 오토플레이 토글 버튼 -->
        <v-btn @click="toggleAutoplay">
          <v-icon>{{ autoplay ? 'mdi-pause' : 'mdi-play' }}</v-icon>
        </v-btn>

        <!-- 오른쪽 버튼 -->
        <v-btn
          icon="mdi-chevron-right"
          @click="nextSlide"
        />
      </div>
    </template>
  </v-carousel>
  <!--// banner slider -->
</template>

<script setup>
import { ref } from "vue";


//keyvisual
const slide = ref(0);
const autoplay = ref(true);
const visuals = ref([
  {
    type: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "src/assets/images/dummy_visual_banner_01.png",
  },
  {
    type: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "src/assets/images/dummy_visual_banner_01.png",
  },
  {
    type: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "src/assets/images/dummy_visual_banner_01.png",
  },
  {
    type: "안성맞춤 앱 추천",
    title: "농협식품R&D연구소",
    description: `도시와 농촌이 상생하는 사회에 이바지하기 위해, 미래성장 가능한 식품 등의 연구개발 역량 강화와 농식품안전관리시스템(NFS) 농산물의 안전과 품질을 관리 서비스`,
    image: "src/assets/images/dummy_visual_banner_01.png",
  },
]);

const prevSlide = () => {
  slide.value = (slide.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  slide.value = (slide.value + 1) % images.value.length;
};

const toggleAutoplay = () => {
  autoplay.value = !autoplay.value;
};

</script>
