<template>
  <Header />
  <v-main>
    <router-view />
    <v-btn
      size="x-large"
      rounded="pill"
      class="btn-floating"
      :class="{ 'btn-bottom': nearFooter }"
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
import { ref, onMounted, onUnmounted } from 'vue';
//

const hover = ref(false);
const nearFooter = ref(false);
const footerRef = ref(true);//footer 컴포넌트 참조하여 푸터의 위치를 가져옴

const onScroll = () => {
  if (!footerRef.value) return;

  const footerTop = footerRef.value.$el.getBoundingClientRect().top;//footer 컴포넌트 참조하여 푸터의 위치를 가져옴
  const windowHeight = window.outerHeight;

  nearFooter.value = footerTop < windowHeight;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>