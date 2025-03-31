<template>
  <div class="category-sliding">
    <div 
      ref="categoryWrap" 
      class="category-wrap" 
    >
      <div class="slide-content">
        <!-- 첫 번째 고정 버튼 -->
        <div class="category fixed">
          <span>
            직무
          </span>
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

        <!-- 동적으로 삽입되는 셀렉트 -->
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
            :menu-props="{ maxHeight: '208px', location: 'bottom' }"
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

const handleResize = () => {
  resizeMobile.value = window.innerWidth <= 768;
  checkSlideEnds();
};

const closeSelects = (event) => {
  if (!selectRefs.value.some(select => select.$el.contains(event.target))) {
    selectRefs.value.forEach(select => select?.blur());
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  //window.addEventListener('click', closeSelects);
  window.addEventListener('touchstart', closeSelects);
  window.addEventListener('scroll', closeSelects);
  checkSlideEnds();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  //window.removeEventListener('click', closeSelects);
  window.removeEventListener('touchstart', closeSelects);
  window.removeEventListener('scroll', closeSelects);
});
</script>