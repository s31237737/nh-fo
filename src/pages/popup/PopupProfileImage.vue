<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <p>프로필 이미지 변경</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <div class="tit-wrap mb-0">
          <v-slide-group
            v-model="tab"
            center-active
          >
            <v-slide-group-item
              v-for="(item, i) in tabItem"
              :key="i"
              v-slot="{ isSelected }"
            >
              <v-btn
                size="large"
                :ripple="false"
                height="44"
                rounded="pill"
                :color="isSelected ? 'primary' : 'info'"
                @click="tab = i"
              >
                {{ item.btn }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </div>
        <v-window
          v-model="tab"
          class="tab-container"
        >
          <v-window-item
            v-for="(item, i) in tabItem"
            :key="i"
            :value="i"
            :transition="false"
          >
            <component :is="item.component" />
          </v-window-item>
        </v-window>
        <!--// dialog contents -->
      </v-card-text>


      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          다음
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const tab = ref();
const tabItem = ref([
  { btn: "기본 이미지" },
  { btn: "사용자 업로드" },
]);
</script>
