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
const lastInnerHeight = ref(window.innerHeight);
let resizeTimeout = null;

const checkFooterPosition = () => {
  if (!footerRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const currentInnerHeight = window.innerHeight;

  //  애니메이션이 부자연스럽지 않게 부드럽게 변하도록 조정
  if (currentInnerHeight !== lastInnerHeight.value) {
    lastInnerHeight.value = currentInnerHeight;
  }

  // 툴바가 변하면서 너무 급격하게 버튼이 움직이지 않도록 부드럽게 조정
  nearFooter.value = footerTop < currentInnerHeight - 40;
};

const onResize = () => {
  // 디바운싱 적용 (100ms 동안 여러 번 호출되는 걸 방지)
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    checkFooterPosition();
  }, 100);
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

  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
});
</script>