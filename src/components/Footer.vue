<template>
  <v-footer
    ref="footerRef"
    :height="!isMobile ? 100 : 140"
  >
    <div class="inner">
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
      <router-link to="/">
        <v-img
          :width="!isMobile ? 180 : 144"
          alt="NH Nonghyup"
          src="@/assets/images/footer_logo.png"
        />
      </router-link>

      <div class="info">
        <router-link to="Privacy">
          개인정보 처리 방침
        </router-link>
        <p class="copy">
          © 2025 NH. All right reserved.
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';

const isMobile = inject('isMobile');
const hover = ref(false);

const nearFooter = ref(false);
const footerRef = ref(null);

const footerOffset = () => {
  if (footerRef.value) {
    const footerRect = footerRef.value.$el.getBoundingClientRect();
    const windowHeight = window.innerHeight-40;
    nearFooter.value = footerRect.top <= windowHeight;
  }
};

onMounted(() => {
  window.addEventListener('scroll', footerOffset);
  footerOffset();
});

onUnmounted(() => {
  window.removeEventListener('scroll', footerOffset);
});
</script>
