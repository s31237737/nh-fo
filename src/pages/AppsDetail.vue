<template>
  <v-sheet
    class="top-banner"
    :height="isDesktop ? '548' : 'auto'"
  >
    <v-container class="inner">
      앱 정보 영역
    </v-container>
  </v-sheet>
  <v-container class="inner">
    <section>
      이미지 영역
    </section>
    <section>
      탭
    </section>
    
    <!-- 컨텐츠 배너 -->
    <section>
      <div
        class="line-banner-wrap"
        :class="{ 'clickable': banner.link }"
      >
        <v-img
          role="banner"
          class="line-banner"
          :style="{ backgroundImage: 'url('+getImageUrl(banner.imageUrl)+')' }"
          @click="bannerClick(banner)"
        >
          <div class="description">
            <p>
              {{ banner.description }}
            </p>
          </div>
        </v-img>
      </div>
    </section>

    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          관련된 앱을 만나보세요!
        </strong>
      </div>
    </section>
  </v-container>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

//const isMobile = inject("isMobile");
//const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

//배너
const banner = ref({
  imageUrl: "img_apps_banner_03.png",
  description: "앱 사용 가이드 바로가기",
});
const bannerClick = (banner) => {
  if (!banner.link) {
    return; // link 없으면 아무 동작 X
  } else {
    router.push(banner.link);
  }
};

</script>
