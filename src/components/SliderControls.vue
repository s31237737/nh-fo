<template>
  <div class="slider-controls">
    <v-btn
      density="compact"
      class="prev arrow-btn"
      icon="custom:slide-prev"
      @click="prevSlide"
    />

    <div class="dots">
      <v-btn
        v-for="(_, i) in slide"
        :key="i"
        icon="custom:slide-dot"
        density="compact"
        class="dot"
        :class="{ active: currentSlide === i }"
        @click="updateCurrentSlide(i)"
      />
    </div>

    <v-btn
      v-if="cycle && autoplayUse"
      density="compact"
      class="togglePlay"
      icon
      :ripple="false"
      @click="toggleAutoplay"
    >
      <v-icon>{{ autoplay ? "custom:auto-pause" : "custom:auto-play" }}</v-icon>
    </v-btn>

    <v-btn
      density="compact"
      class="next arrow-btn"
      icon="custom:slide-next"
      @click="nextSlide"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  currentSlide: {
    type: Number,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  slide: {
    type: Array,
    required: true,
  },
  cycle: {
    type: Boolean,
    default: true,
  },
  autoplayUse: {
    type: Boolean,
    default: true,  // 기본값을 true로 설정
  },
});

const emit = defineEmits(['update:currentSlide', 'update:autoplay']);

const updateCurrentSlide = (index) => {
  emit("update:currentSlide", index);
};

const prevSlide = () => {
  emit("update:currentSlide", (props.currentSlide - 1 + props.slide.length) % props.slide.length);
};

const nextSlide = () => {
  emit("update:currentSlide", (props.currentSlide + 1) % props.slide.length);
};

const toggleAutoplay = () => {
  emit("update:autoplay", !props.autoplay);
};
</script>
