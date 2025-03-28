<template>
  <div class="category-sliding">
    <div 
      ref="categoryWrap" 
      class="category-wrap" 
      :class="{ 'mobile': resizeMobile }"
    >
      <div class="slide-content">
        <!-- 슬라이드 항목 -->
        <div
          v-for="(item, index) in appsCategory"
          :key="index"
          class="category"
        >
          <span>{{ item.label }}</span>
          <v-select
            ref="selectRefs"
            v-model="item.selected"
            rounded="pill"
            density="comfortable"
            :items="item.options"
            :menu-props="{ maxHeight: '208px', location: 'bottom'}"
            @blur="onSelectBlur"
          />
        </div>
      </div>
    </div>

    <!-- 데스크톱에서만 버튼 표시 -->
    <template v-if="!resizeMobile">
      <v-btn
        icon="custom:slide-prev"
        class="prev"
        :ripple="false"
        @click="prevSlide"
      />

      <v-btn
        icon="custom:slide-next"
        class="next"
        :ripple="false"
        @click="nextSlide"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  appsCategory: {
    type: Array,
    required: true,
  },
});

const categoryWrap = ref(null);
const slideItemWidth = ref(0);
const resizeMobile = ref(window.innerWidth <= 768);

const prevSlide = () => {
  if (categoryWrap.value) {
    categoryWrap.value.scrollBy({ left: -slideItemWidth.value, behavior: 'smooth' });
  }
};

const nextSlide = () => {
  if (categoryWrap.value) {
    categoryWrap.value.scrollBy({ left: slideItemWidth.value, behavior: 'smooth' });
  }
};

// 📌 창 크기 변경 시 모바일 여부 및 슬라이드 항목 너비 업데이트
const handleResize = () => {
  resizeMobile.value = window.innerWidth <= 768;
  updateSlideItemWidth();
};

// 📌 슬라이드 항목 너비 계산
const updateSlideItemWidth = () => {
  if (categoryWrap.value) {
    const slideItem = categoryWrap.value.querySelector('.category');
    if (slideItem) {
      slideItemWidth.value = slideItem.offsetWidth;
    }
  }
};

const selectRefs = ref([]);

const onSelectBlur = () => {
  selectRefs.value.forEach(select => {
    if (select && select.$el.contains(document.activeElement) === false) {
      select.blur();
    }
  });
};

const closeSelects = (event) => {
  if (!selectRefs.value.some(select => select.$el.contains(event.target))) {
    selectRefs.value.forEach(select => select?.blur());
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('click', closeSelects);  
  window.addEventListener('touchstart', closeSelects);  
  window.addEventListener('scroll', closeSelects);  
  updateSlideItemWidth();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('click', closeSelects);
  window.removeEventListener('touchstart', closeSelects);  
  window.removeEventListener('scroll', closeSelects);  
});
</script>
