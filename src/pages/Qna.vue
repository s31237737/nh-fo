<template>
  <v-container height="200vh">
    <!-- <v-select
      ref="selectRef"
      v-model="selectedItem"
      :items="items"
      label="옵션 선택"
      :menu="isMenuOpen"
      @update:menu="isMenuOpen = $event"
    /> -->

    <div
      ref="slideContainer"
      class="slide-container"
    >
      <div
        ref="slideTrack"
        class="slide-track"
      >
        <div
          v-for="(item, index) in appsCategory"
          :key="index"
          ref="slideItems"
          class="slide-item"
        >
          <span>{{ item.label }}</span>
          <v-select
            v-model="item.selected"
            :items="item.options"
          />
        </div>
      </div>
      <!-- 버튼 -->
      <button
        class="slide-btn prev"
        @click="prevSlide"
      >
        ◀
      </button>
      <button
        class="slide-btn next"
        @click="nextSlide"
      >
        ▶
      </button>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const slideContainer = ref(null);
const slideItems = ref([]);
const itemWidths = ref([]);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const appsCategory = ref([
  { label: '선택직무1', options: ['세부직군명1-1', '세부직군명1-2'], selected: '세부직군명1-1' },
  { label: '선택직무2', options: ['세부직군2-1', '세부직군2-2'], selected: '세부직군2-1' },
  { label: '선택직무3', options: ['세부직군3-1', '세부직군3-2'], selected: '세부직군3-1' },
  { label: '선택직무4', options: ['세부직군4-1', '세부직군4-2'], selected: '세부직군4-1' },
  { label: '선택직무5', options: ['세부직군5-1', '세부직군5-2'], selected: '세부직군5-1' }
]);

// 📌 개별 아이템 크기 계산
const updateItemWidths = () => {
  nextTick(() => {
    itemWidths.value = slideItems.value.map((item) => item?.offsetWidth || 0);
  });
};

// 📌 터치 시작 (모바일 전용)
const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.touches[0].pageX - slideContainer.value.offsetLeft;
  scrollLeft.value = slideContainer.value.scrollLeft;
};

// 📌 드래그 이동 (모바일 전용)
const onDrag = (e) => {
  if (!isDragging.value) return;
  const x = e.touches[0].pageX - slideContainer.value.offsetLeft;
  const walk = (startX.value - x) * 1.5; // 스크롤 속도 조정
  slideContainer.value.scrollLeft = scrollLeft.value + walk;
};

// 📌 드래그 종료
const stopDrag = () => {
  isDragging.value = false;
};

// 📌 현재 가장 왼쪽에 보이는 아이템 찾기
const getFirstVisibleItem = () => {
  let scrollLeft = slideContainer.value.scrollLeft;
  let sumWidth = 0;
  let offsetThreshold = 10;

  for (let i = 0; i < itemWidths.value.length; i++) {
    sumWidth += itemWidths.value[i];
    if (sumWidth > scrollLeft + offsetThreshold) return i;
  }
  return 0;
};

// 📌 이전 버튼 클릭 시 이동
const prevSlide = () => {
  let firstVisibleIndex = getFirstVisibleItem();
  
  if (firstVisibleIndex > 0) {
    let moveDistance = itemWidths.value[firstVisibleIndex - 1] || 0;
    slideContainer.value.scrollBy({ left: -moveDistance, behavior: 'smooth' });
  } else {
    slideContainer.value.scrollTo({ left: 0, behavior: 'smooth' });
  }
};

// 📌 다음 버튼 클릭 시 이동
const nextSlide = () => {
  let firstVisibleIndex = getFirstVisibleItem();

  if (firstVisibleIndex < itemWidths.value.length - 1) {
    let moveDistance = itemWidths.value[firstVisibleIndex] || 0;
    slideContainer.value.scrollBy({ left: moveDistance, behavior: 'smooth' });
  }
};

// 📌 이벤트 등록 (모바일에서만)
onMounted(() => {
  updateItemWidths();
  window.addEventListener('resize', updateItemWidths);

  if (window.matchMedia("(max-width: 768px)").matches) { // 🔹 모바일에서만 적용
    slideContainer.value.addEventListener('touchstart', startDrag);
    slideContainer.value.addEventListener('touchmove', onDrag);
    slideContainer.value.addEventListener('touchend', stopDrag);
  }
});

// 📌 이벤트 제거
onUnmounted(() => {
  window.removeEventListener('resize', updateItemWidths);

  if (slideContainer.value) {
    slideContainer.value.removeEventListener('touchstart', startDrag);
    slideContainer.value.removeEventListener('touchmove', onDrag);
    slideContainer.value.removeEventListener('touchend', stopDrag);
  }
});
</script>


<style>
.slide-container {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
}

.slide-track {
  display: flex;
  transition: transform 0.3s ease;
}

.slide-item {
  display:flex;
  gap: 12px;
  flex: 0 0 auto;
  margin-right: 10px;
  padding: 10px;
  background: white;
  border-radius: 8px;
}

.slide-btn {
  position: fixed;
  top: 80px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.slide-btn.prev {
  left: 0;
}

.slide-btn.next {
  right: 0;
}
</style>