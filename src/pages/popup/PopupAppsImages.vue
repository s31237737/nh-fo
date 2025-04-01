<template>
  <v-dialog
    :model-value="modelValue"
    class="popup carousel"
    @update:model-value="handleDialogToggle($event)"
  >
    <v-btn
      v-if="isMobile"
      class="btn-closepop"
      icon="custom:close"
      density="comfortable"
      @click="emit('update:modelValue', false)"
    />
    
    <div class="video-slide-wrap">
      <!-- control -->
      <v-btn
        v-if="sliders.length > 1"
        icon="custom:slide-prev"
        variant="text"
        class="video-slide-control prev"
        :disabled="popupSlide === 0"
        @click="stopAllVideos(); popupSlide = Math.max(popupSlide - 1, 0)"
      />
      <v-btn
        v-if="sliders.length > 1"
        icon="custom:slide-next"
        class="video-slide-control next"
        variant="text"
        :disabled="popupSlide >= sliders.length - 1"
        @click="stopAllVideos(); popupSlide = Math.min(popupSlide + 1, sliders.length - 1)"
      />

      <!-- carousel -->
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
            class="video"
            :class="{ playing: slide.isPlaying }"
            @click="toggleVideoPlayback(slide)"
          >
            <img
              :src="getImageUrl(slide.image)"
              class="thumbnail-image"
            >
            <iframe
              :key="slide.isPlaying"
              class="carousel-media"
              title="YouTube video player"
              width="100%"
              height="100%"
              :src="slide.isPlaying ? `${slide.link}?autoplay=1&rel=0` : slide.link"
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
              eager
              class="carousel-media"
            />
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-dialog>
</template>

<script setup>
  import { ref, inject, watch } from 'vue';

  const isMobile = inject('isMobile');

  const { modelValue, sliders, selectedIndex } = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    //sliders: Array,
    sliders: {
      type: Array,
      default: () => [],
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
  });

  watch(() => modelValue, (newVal) => {
  if (newVal) {
    //console.log("팝업이 열릴 때 선택된 index:", selectedIndex);
    popupSlide.value = selectedIndex;
  }
});

  const getImageUrl = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
  };

  const popupSlide = ref(0);

  const emit = defineEmits(['update:modelValue']);

  const handleDialogToggle = (isOpen) => {
    emit('update:modelValue', isOpen); // 상태 변경
    if (!isOpen) {
      // v-dialog 닫힐 때 모든 isPlaying 초기화
      sliders.forEach(slide => {
        if (slide.player) {
          slide.isPlaying = false;
        }
      });
    }
  };

  const toggleVideoPlayback = (slide) => {
    slide.isPlaying = !slide.isPlaying;
  };

  const stopAllVideos = () => {
  sliders.forEach(slide => {
    if (slide.player) {
      slide.isPlaying = false;
    }
  });
};
</script>
