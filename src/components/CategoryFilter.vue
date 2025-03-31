<template>
  <div class="category-sliding">
    <div
      ref="categoryWrap"
      class="category-wrap"
    >
      <div class="slide-content">
        <!-- 첫 번째 고정 버튼 -->
        <div class="category fixed">
          <span>직무</span>
          <v-btn
            class="btn-selectJob"
            rounded="pill"
            variant="outlined"
            append-icon="custom:select"
            :ripple="false"
          >
            전체
          </v-btn>
        </div>

        <!-- 동적으로 삽입되는 셀렉트 최대 4개 -->
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
            :menu-props="{ maxHeight: '208px', scrollStrategy: 'close'}"
            @touchmove="closeSelectOnTouch"
          />
        </div>

        <!-- 마지막 고정 버튼 -->
        <div class="category fixed">
          <v-btn
            color="white"
            icon="custom:refresh"
            class="btn-refresh"
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
        :disabled="isAtLeftEnd"
        @click="slide(-1)"
      />

      <v-btn
        icon="custom:slide-next"
        class="next"
        :ripple="false"
        :disabled="isAtRightEnd"
        @click="slide(1)"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  appsCategory: { type: Array, required: true },
});

const categoryWrap = ref(null);
const selectRefs = ref([]);
const resizeMobile = ref(window.innerWidth <= 768);
const buttonWidth = 60; // 버튼 크기 60px


// 슬라이드
const isAtLeftEnd = ref(false);
const isAtRightEnd = ref(false);

const slide = (direction) => {
  categoryWrap.value?.scrollBy({ left: direction * getSlideItemWidth(), behavior: 'smooth' });
  setTimeout(checkSlideEnds, 300);
};

const getSlideItemWidth = () => categoryWrap.value?.querySelector('.category')?.offsetWidth || 0;

const checkSlideEnds = () => {
  if (!categoryWrap.value) return;
  const { scrollLeft, scrollWidth, offsetWidth } = categoryWrap.value;
  isAtLeftEnd.value = scrollLeft <= buttonWidth;
  isAtRightEnd.value = scrollLeft + offsetWidth >= scrollWidth - buttonWidth;
};

// 화면 크기 변경 처리
const handleResize = () => {
  resizeMobile.value = window.innerWidth <= 768;
  checkSlideEnds();
};

// v-select 드롭다운 닫기 함수
const closeSelects = (event) => {
  if (!selectRefs.value.some(select => select.$el.contains(event.target))) {
    selectRefs.value.forEach(select => select?.blur());
  }
};
// 터치 시 드롭다운 닫기 함수
const closeSelectOnTouch = (event) => {
  const touchedSelect = selectRefs.value.find(select => select?.$el.contains(event.target));
  if (touchedSelect) {
    touchedSelect.blur();
  }
};
onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('touchstart', closeSelects);
  checkSlideEnds();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('touchstart', closeSelects);
});
</script>
