<template>
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
            ref="selectRefs"
            v-model="item.selected"
            :items="item.options"
            dense
            rounded
            variant="outlined"
            label="직무 선택"
            @blur="onSelectBlur"
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  appsCategory: {
    type: Array,
    required: true,
  },
});

const slideContainer = ref(null);
const slideItemWidth = ref(0); // 슬라이드 항목 너비
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

const selectRefs = ref([]);

// 📌 셀렉트 박스 열린 상태 관리
const onSelectBlur = () => {
  // 셀렉트 박스가 blur되면 닫히는 로직
  selectRefs.value.forEach(select => {
    if (select && select.$el.contains(document.activeElement) === false) {
      select.blur();
    }
  });
};

// 📌 셀렉트 박스가 열린 상태일 때, 다른 곳을 클릭하거나 터치하면 닫히도록 처리
const closeSelects = (event) => {
  if (!selectRefs.value.some(select => select.$el.contains(event.target))) {
    selectRefs.value.forEach(select => select?.blur());
  }
};

// 📌 이벤트 등록
onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('click', closeSelects);  // 외부 클릭 시 셀렉트 닫기
  window.addEventListener('touchstart', closeSelects);  // 외부 클릭 시 셀렉트 닫기
  window.addEventListener('scroll', closeSelects);  // 외부 클릭 시 셀렉트 닫기
  updateSlideItemWidth(); // 최초 마운트 시에도 슬라이드 항목 너비를 계산
});

// 📌 이벤트 해제
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('click', closeSelects); // 이벤트 해제
  window.removeEventListener('touchstart', closeSelects);  // 외부 클릭 시 셀렉트 닫기
  window.removeEventListener('scroll', closeSelects);  // 외부 클릭 시 셀렉트 닫기
});
</script>

<style scoped>
/* ✅ 모바일에서는 가로 스크롤만 적용, 스냅 활성화 */
.slide-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 10px;
  padding: 10px;
  scroll-behavior: smooth;
}

.slide-wrapper.mobile {
  scroll-snap-type: x mandatory; /* 모바일에서 스냅 활성화 */
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
  scroll-snap-align: start; /* 각 항목이 시작 부분에 스냅되도록 설정 */
}

/* ✅ 데스크톱에서는 버튼으로만 이동 */
.slide-wrapper:not(.mobile) {
  overflow-x: hidden;
}

.slide-content {
  display: flex;
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
