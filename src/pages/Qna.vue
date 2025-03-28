<template>
  <v-container height="200vh">
    <div 
      ref="slideContainer" 
      class="slide-wrapper" 
      :class="{ 'mobile': resizeMobile }"
    >
      <div class="slide-content">
        <!-- 슬라이드 항목 -->
        <div 
          v-for="(item, index) in appsCategory" 
          :key="index" 
          class="slide-item"
        >
          <div class="apps-category">
            <span>{{ item.label }}</span>
            <v-select
              v-model="item.selected"
              :items="item.options"
              dense
              rounded
              variant="outlined"
              label="직무 선택"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 데스크톱에서만 버튼 표시 -->
    <template v-if="!resizeMobile">
      <button
        class="slide-btn prev"
        @click="prevSlide"
      >
        〈
      </button>
      <button
        class="slide-btn next"
        @click="nextSlide"
      >
        〉
      </button>
    </template>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const appsCategory = ref([
  { label: '선택직무1', options: ['세부직군1-1', '세부직군1-2'], selected: '세부직군1-1' },
  { label: '선택직무2', options: ['세부직군2-1', '세부직군2-2'], selected: '세부직군2-1' },
  { label: '선택직무3', options: ['세부직군3-1', '세부직군3-2'], selected: '세부직군3-1' },
  { label: '선택직무4', options: ['세부직군4-1', '세부직군4-2'], selected: '세부직군4-1' },
  { label: '선택직무5', options: ['세부직군5-1', '세부직군5-2'], selected: '세부직군5-1' },
]);

const slideContainer = ref(null);
const slideItemWidth = ref(0); // 슬라이드 항목 너비

// 📌 모바일 여부 체크
const resizeMobile = ref(window.innerWidth <= 768); // 변경: 직접 ref로 선언

// 📌 좌우 버튼 이동 (데스크톱 전용)
const prevSlide = () => {
  if (slideContainer.value) {
    slideContainer.value.scrollBy({ left: -slideItemWidth.value, behavior: 'smooth' });
  }
};

const nextSlide = () => {
  if (slideContainer.value) {
    slideContainer.value.scrollBy({ left: slideItemWidth.value, behavior: 'smooth' });
  }
};

// 📌 창 크기 변경 시 모바일 여부 및 슬라이드 항목 너비 업데이트
const handleResize = () => {
  resizeMobile.value = window.innerWidth <= 768;
  updateSlideItemWidth(); // 창 크기 변경 시 슬라이드 항목 너비를 새로 계산
};

// 📌 슬라이드 항목 너비 계산
const updateSlideItemWidth = () => {
  if (slideContainer.value) {
    const slideItem = slideContainer.value.querySelector('.slide-item');
    if (slideItem) {
      slideItemWidth.value = slideItem.offsetWidth; // 첫 번째 슬라이드 항목의 너비로 설정
    }
  }
};

// 📌 이벤트 등록
onMounted(() => {
  window.addEventListener('resize', handleResize);
  updateSlideItemWidth(); // 최초 마운트 시에도 슬라이드 항목 너비를 계산
});

// 📌 이벤트 해제
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* ✅ 모바일에서는 가로 스크롤만 적용 */
.slide-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 10px;
  padding: 10px;
  scroll-behavior: smooth;
}

/* ✅ 데스크톱에서는 버튼으로만 이동 */
.slide-wrapper:not(.mobile) {
  overflow-x: hidden;
}

.slide-content {
  display: flex;
  gap: 10px;
}

.slide-item {
  flex: 0 0 auto;
  padding: 20px;
  background: lightgray;
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 좌우 버튼 (데스크톱 전용) */
.slide-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* v-select 스타일 (필요시 조정) */
.apps-category {
  display: flex;
  flex-direction: unset !important;
}

.v-select {
  width: 100%;
}
</style>
