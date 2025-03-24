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
//

const hover = ref(false);
const nearFooter = ref(false);//버튼 클래스 체크하는 지점
const footerRef = ref(true);//footer 컴포넌트 참조하여 푸터의 위치를 가져옴
const mainRef = ref(null);

const onScroll = () => {
  if (!footerRef.value || !mainRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // 푸터가 화면에 보이면 nearFooter 활성화
  nearFooter.value = footerTop < windowHeight;
};

onMounted(async () => {
  await nextTick(); // DOM 업데이트 후 실행 (특히 SSR 환경에서 필요)
  
  const mainElement = mainRef.value?.$el || window;
  
  mainElement.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true }); // 모바일에서 더 정확하게 감지
});

onUnmounted(() => {
  const mainElement = mainRef.value?.$el || window;

  mainElement.removeEventListener("scroll", onScroll);
  window.removeEventListener("scroll", onScroll);
});
</script>