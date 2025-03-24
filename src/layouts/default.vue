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
let resizeObserver = null;

const checkFooterPosition = () => {
  if (!footerRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight - 40;

  nearFooter.value = footerTop < viewportHeight;
};

const onScroll = () => {
  checkFooterPosition();
};

onMounted(async () => {
  await nextTick();

  window.addEventListener("scroll", onScroll, { passive: true });

  resizeObserver = new ResizeObserver(() => {
    checkFooterPosition();
  });

  resizeObserver.observe(document.body);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>