<template>
  <div
    class="apps-search-ctg"
  >
    <v-slide-group
      :show-arrows="!isMobile"
      :center-active="false"
      prev-icon="custom:slide-prev"
      next-icon="custom:slide-next"
    >
      <!-- 고정된 버튼 -->
      <v-slide-group-item>
        <div class="category">
          <span
            @click.stop
            @touchstart.stop
          >
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
      </v-slide-group-item>

      <!-- 최대 4개의 v-select 요소 -->
      <v-slide-group-item
        v-for="(item, inedx) in appsCategory"
        :key="inedx"
      >
        <div class="category">
          <span
            @click.stop
            @touchstart.stop
          >
            {{ item.label }}
          </span>
          <v-select
            ref="selectRefs2"
            v-model="item.selected"
            rounded="pill"
            density="comfortable"
            :items="item.options"
            :menu-props="{ maxHeight: '208px', location: 'bottom', auto: true}"
          />
        </div>
      </v-slide-group-item>

      <!-- 고정된 버튼 -->
      <v-slide-group-item>
        <div class="apps-category">
          <v-btn
            color="white"
            icon="custom:refresh"
            class="btn-refresh"
          />
        </div>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';

defineProps({
  appsCategory: { type: Array, required: true },
});

const isMobile = inject("isMobile");
const selectRefs2 = ref([]);

const closeDropdown2 = (event) => {
  if (!selectRefs2.value.some(select => select?.$el.contains(event.target))) {
    document.activeElement?.blur();
  }
};

onMounted(() => {
  window.addEventListener('touchstart', closeDropdown2);
  window.addEventListener('scroll', closeDropdown2, true);;
});

onUnmounted(() => {
  window.removeEventListener('touchstart', closeDropdown2);
  window.removeEventListener('scroll', closeDropdown2, true);
});

</script>