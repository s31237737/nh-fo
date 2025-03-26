<template>
  <div
    class="fill-height"
    style="background:#fff; text-align:center"
  >
    <div v-if="isMobile">
      📱 모바일 화면입니다.
    </div>
    <div v-if="isTablet">
      👀태블릿 화면입니다.<br>
      실제로 사용하지 않겠죠? isDesktop이거나 isMobile이거나만 필요한듯
    </div>
    <div v-if="isDesktop">
      💻 데스크탑 화면입니다.
    </div>

    <div v-if="!isDesktop">
      헤더가 모바일로 바뀌어야함/lnb가 바뀌어야함
    </div>
    <div v-if="!isMobile">
      최소1280px 가로가 유지되야함
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject("isMobile");
const isTablet = inject("isTablet");
const isDesktop = inject("isDesktop");
</script>
