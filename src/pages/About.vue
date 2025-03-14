<template>
  <div>
    <!-- 다른 버튼으로 페이지네이션 제어 -->
    <div class="d-flex justify-center py-4">
      <!-- 페이지 네비게이션 버튼들 -->
      <v-btn
        v-for="(color, i) in colors"
        :key="i"
        :color="model === i ? 'primary': 'success'"
        @click="model = i"
      >
        {{ i + 1 }}
      </v-btn>
    </div>

    <!-- v-carousel 컴포넌트 -->
    <v-carousel
      v-model="model"
      hide-delimiters
      cycle
    >
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
        :value="i"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const colors = [
    'primary',
    'secondary',
    'yellow darken-2',
    'red',
    'orange',
  ]

  const model = ref(0)
</script>
