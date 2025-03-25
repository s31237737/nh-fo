<template>
  <Header />
  <v-main>
    <router-view />
    <v-btn
      size="x-large"
      rounded="pill"
      class="btn-floating"
      :class="{ 'btn-bottom': nearFooter }"
      :ripple="false"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="openPopup = true"
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
    <PopupReportIssue v-model="openPopup" />
    <Footer ref="footerRef" />
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, inject } from 'vue';
import PopupReportIssue from "@/pages/popup/PopupReportIssue.vue";
const isDesktop = inject("isDesktop");

//불편신고 팝업
const openPopup = ref(false);
const hover = ref(false);

//불편신고 버튼 위치잡기
const footerRef = ref(null); //Footer
const nearFooter = ref(false);
const lastHeight = ref(window.innerHeight);
//let resizeTimeout = null;

const footerPosition = () => {//footer 위치 잡기
  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const currentHeight = window.innerHeight;

  if (currentHeight !== lastHeight.value) {
    lastHeight.value = currentHeight;
  }
  nearFooter.value = footerTop < currentHeight;
};

// const onResize = () => {// 디바운싱 적용 (100ms 동안 여러 번 호출되는 걸 방지)
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     footerPosition();
//   }, 100);
// };

const onScroll = () => {
  footerPosition();
};

onMounted(async () => {
  await nextTick(); //DOM 업데이트가 완료될 때까지 대기

  window.addEventListener('scroll', onScroll, { passive: true });
  //window.addEventListener('resize', onResize, { passive: true });

  //DOM이 완전히 업데이트된 후 실행
  footerPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  //window.removeEventListener('resize', onResize);

  // if (resizeTimeout) {
  //   clearTimeout(resizeTimeout);
  // }
});
</script>
