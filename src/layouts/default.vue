<template>
  <Header />
  <v-main>
    <router-view />
    <!-- 불편신고 버튼 -->
    <ReportIssueButton :near-footer="nearFooter" />
    <Footer ref="footerRef" />
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';


//불편신고 버튼 위치잡기
const footerRef = ref(null); //Footer
const nearFooter = ref(false);
const lastHeight = ref(window.innerHeight);
let resizeTimeout = null;

const footerPosition = () => {
  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const currentHeight = window.innerHeight;

  if (currentHeight !== lastHeight.value) {
    lastHeight.value = currentHeight;
  }
  nearFooter.value = footerTop < currentHeight;
};

const onResize = () => {
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
