<template>
  <Header />
  <v-main ref="mainRef">
    <router-view />
    <v-btn
      size="x-large"
      rounded="pill"
      class="btn-floating"
      :class="{ 'btn-bottom': nearFooter }"
      :ripple="false"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <v-icon
        icon="custom:report"
        size="x-large"
      />
      <p class="btn-floating-text">
        <span>
          불편신고
        </span>
        <span class="hover">
          사용 중 불편사항이 있으신가요?
        </span>
      </p>
    </v-btn>
    <Footer ref="footerRef" />
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const hover = ref(false);
const nearFooter = ref(false);
const footerRef = ref(null);
const mainRef = ref(null);
const lastInnerHeight = ref(window.innerHeight); // 최근 window.innerHeight 값을 저장

const checkFooterPosition = () => {
  if (!footerRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const currentInnerHeight = window.innerHeight;

  // 툴바가 표시될 때 화면 크기가 줄어든 경우에도 감지
  if (currentInnerHeight !== lastInnerHeight.value) {
    lastInnerHeight.value = currentInnerHeight;
  }

  nearFooter.value = footerTop < currentInnerHeight - 40;
};

const onResize = () => {
  checkFooterPosition();
};

const onScroll = () => {
  checkFooterPosition();
};

onMounted(async () => {
  await nextTick();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  // 초기 실행
  checkFooterPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
</script>