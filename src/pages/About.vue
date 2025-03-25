<template>
  <div>
    <h1>About</h1>

    <div
      v-for="(video, index) in videos"
      :key="index"
      class="video-thumbnail"
      @click="playVideo(index)"
    >
      <img
        v-if="!video.isPlaying"
        :src="`https://img.youtube.com/vi/${extractVideoId(video.url)}/0.jpg`"
        :alt="`Thumbnail for video ${index + 1}`"
        class="thumbnail-image"
      >
      <iframe
        v-if="video.isPlaying"
        width="560"
        height="315"
        :src="`${video.url}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const videos = ref([
  {
    url: "https://www.youtube.com/embed/FepuXV72_hQ",
    isPlaying: false,
  },
  {
    url: "https://www.youtube.com/embed/0xj6nj35ugk",
    isPlaying: false,
  },
]);

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
</script>

<style scoped>
.video-thumbnail {
  position: relative;
  width: 560px;
  height: 315px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin-bottom: 20px;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.video-thumbnail:hover .thumbnail-image {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
</style>
