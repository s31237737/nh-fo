<template>
  <v-container>
    <v-carousel
      v-model="currentSlide"
      :continuous="isAutoplay"
      :cycle="autoplay"
      hide-delimiters
      show-arrows="hover"
      height="300"
    >
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image"
      />
    </v-carousel>
    <div class="custom-controls">
      <!-- ◀️ 왼쪽 버튼 -->
      <v-btn
        icon
        @click="prevSlide"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <!-- 🔘 도트 버튼 -->
      <div class="dots">
        <v-btn
          v-for="(_, i) in images"
          :key="i"
          :color="currentSlide === i ? 'primary' : 'gray'"
          icon
          small
          @click="currentSlide = i"
        >
          <v-icon small>
            {{ currentSlide === i ? 'mdi-circle' : 'mdi-circle-outline' }}
          </v-icon>
        </v-btn>
      </div>
      <!-- ⏯ 오토 플레이 토글 버튼 -->
      <v-btn
        icon
        @click="toggleAutoplay"
      >
        <v-icon>{{ autoplay ? 'mdi-pause' : 'mdi-play' }}</v-icon>
      </v-btn>
      <!-- ▶️ 오른쪽 버튼 -->
      <v-btn
        icon
        @click="nextSlide"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "https://picsum.photos/800/300?random=1",
  "https://picsum.photos/800/300?random=2",
  "https://picsum.photos/800/300?random=3",
]);

const currentSlide = ref(0);
const autoplay = ref(true);

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};
const toggleAutoplay = () => {
  autoplay.value = !autoplay.value;
};
</script>

<style scoped>
/* 커스텀 버튼과 도트 컨트롤 스타일 */
.v-container {position:relative;}
.custom-controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 8px;
  z-index: 10; /* z-index 추가 */
}

/* 도트 버튼 스타일 */
.dots {
  display: flex;
  gap: 6px;
}

.dots .v-btn {
  width: 10px;
  height: 10px;
  min-width: 10px;
  border-radius: 50%;
  padding: 0;
}

.dots .v-btn.v-btn--active {
  background-color: #ff4081; /* 선택된 도트 색상 */
}
</style>
