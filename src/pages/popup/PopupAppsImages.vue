<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-btn
      style="align-self: flex-end;color:white"
      icon="custom:close"
      density="comfortable"
      @click="emit('update:modelValue', false)"
    />
    <v-carousel
      v-model="model"
      :height="isMobile ? '300' :'500'"
    >
      <v-carousel-item>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/FepuXV72_hQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      />

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      />
    </v-carousel>
    <div class="d-flex justify-space-around align-center py-4">
      <v-btn
        icon="mdi-minus"
        variant="text"
        @click="model = Math.max(model - 1, 0)"
      />
      <v-btn
        icon="mdi-plus"
        variant="text"
        @click="model = Math.min(model + 1, 2)"
      />
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
  });

  const model = ref(0)
  // 비디오 ID 추출 함수
const extractVideoId = (url) => {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
};

// 비디오 재생 함수
const playVideo = (index) => {
  // 모든 비디오의 재생 상태를 false로 초기화
  videos.value.forEach((video) => (video.isPlaying = false));
  // 클릭한 비디오만 재생 상태로 설정
  videos.value[index].isPlaying = true;
};

  const emit = defineEmits(['update:modelValue']);
</script>
