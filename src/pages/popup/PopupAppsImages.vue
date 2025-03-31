<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-btn
      v-if="isMobile"
      style="align-self: flex-end; color:white"
      icon="custom:close"
      density="comfortable"
      @click="emit('update:modelValue', false)"
    />
    <div class="video-slide-wrap">
      <v-carousel
        v-model="popupSlide"
        class="video-slide"
        height="auto"
      >
        <v-carousel-item
          v-for="(slide, index) in sliders"
          :key="index"
          class="slide-item"
        >
          <!-- player가 있을 경우 iframe 추가 -->
          <v-card
            v-if="slide.player"
          >
            <!-- <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FepuXV72_hQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            /> -->
            <iframe
              width="100%"
              height="100%"
              :src="slide.link"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </v-card>
          <v-card 
            v-else
          >
            <v-img
              :src="getImageUrl(slide.image)"
              cover
            />
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <div class="video-slide-control">
        <v-btn
          icon="custom:slide-prev"
          variant="text"
          class="video-slide-prev"
          @click="popupSlide = Math.max(popupSlide - 1, 0)"
        />
        <v-btn
          icon="custom:slide-next"
          class="video-slide-next"
          variant="text"
          @click="popupSlide = Math.min(popupSlide + 1, 2)"
        />
      </div>
    </div>
  </v-dialog>
</template>

<script setup>
  import { ref, inject } from 'vue';

const isMobile = inject('isMobile');
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    sliders: Array,
  });
  const getImageUrl = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
  };
  const popupSlide = ref(0);
  // 비디오 ID 추출 함수
// const extractVideoId = (url) => {
//   const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
//   return match ? match[1] : "";
// };

// 비디오 재생 함수
// const playVideo = (index) => {
//   // 모든 비디오의 재생 상태를 false로 초기화
//   videos.value.forEach((video) => (video.isPlaying = false));
//   // 클릭한 비디오만 재생 상태로 설정
//   videos.value[index].isPlaying = true;
// };

  const emit = defineEmits(['update:modelValue']);
</script>
