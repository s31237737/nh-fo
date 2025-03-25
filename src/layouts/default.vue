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
        <span
          v-if="isDesktop"
          class="hover"
        >
          사용 중 불편사항이 있으신가요?
        </span>
      </p>
    </v-btn>
    <Footer ref="footerRef" />
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, inject } from 'vue';

const isDesktop = inject("isDesktop");

//불편신고 팝업
const hover = ref(false);

//footer
const nearFooter = ref(false);
const footerRef = ref(null);
const mainRef = ref(null);
const lastHeight = ref(window.innerHeight);
let resizeTimeout = null;

const footerPosition = () => {
  if (!footerRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const currentHeight = window.innerHeight;

  //  애니메이션이 부자연스럽지 않게 부드럽게 변하도록 조정
  if (currentHeight !== lastHeight.value) {
    lastHeight.value = currentHeight;
  }

  // 툴바가 변하면서 너무 급격하게 버튼이 움직이지 않도록 부드럽게 조정
  nearFooter.value = footerTop < currentHeight;
};

const onResize = () => {
  // 디바운싱 적용 (100ms 동안 여러 번 호출되는 걸 방지)
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    footerPosition();
  }, 100);
};

const onScroll = () => {
  footerPosition();
};

onMounted(async () => {
  await nextTick();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  // 초기 실행
  footerPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);

  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
});
</script>