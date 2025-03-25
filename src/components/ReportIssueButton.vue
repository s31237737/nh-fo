<template>
  <!-- 불편신고 버튼 -->
  <v-btn
    size="x-large"
    rounded="pill"
    class="btn-floating"
    :class="{ 'btn-bottom': nearFooter }"
    :ripple="false"
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

  <!-- 불편신고 팝업 -->
  <PopupReportIssue v-model="openPopup" />
</template>

<script setup>
import { ref,inject } from "vue";
import PopupReportIssue from "@/pages/popup/PopupReportIssue.vue";

defineProps({
  nearFooter: {
    type: Boolean,
    default: false,
  },
});

const isDesktop = inject("isDesktop");
const openPopup = ref(false);

</script>
