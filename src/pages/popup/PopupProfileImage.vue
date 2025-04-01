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
      <div class="tit-wrap">
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
      <v-card-text>
        <!-- dialog contents -->
        <v-window
          v-model="tab"
          class="tab-container"
        >
          <v-window-item
            :transition="false"
          >
            <div class="profile-list">
              <v-avatar
                v-for="(item, index) in profileItems"
                :key="index"
                :size="!isMobile ? '124' : '88'"
                :class="{ 'selected': selectedIndex === index }"
                @click="selectItem(index)"
              >
                <v-img :src="getImageUrl(item.src)" />
              </v-avatar>
            </div>
          </v-window-item>
          <v-window-item

            :transition="false"
          >
            프로필
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
import { ref , inject} from 'vue';

const isMobile = inject('isMobile');

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};

const tab = ref();
const tabItem = ref([
  { btn: "기본 이미지" },
  { btn: "사용자 업로드" },
]);
const profileItems = ref([
  { src: "img_avatar01.jpg" },
  { src: "img_avatar02.jpg" },
  { src: "img_avatar03.jpg" },
  { src: "img_avatar04.jpg" },
  { src: "img_avatar05.jpg" },
  { src: "img_avatar06.jpg" },
  { src: "img_avatar07.jpg" },
  { src: "img_avatar08.jpg" },
  { src: "img_avatar09.jpg" },
  { src: "img_avatar10.jpg" },
  { src: "img_avatar11.jpg" },
  { src: "img_avatar12.jpg" },
  { src: "img_avatar13.jpg" },
]);

const selectedIndex = ref(null);

const selectItem = (index) => {
  selectedIndex.value = index;
};
</script>
<style scoped>
.selected {
  border: 3px solid #4caf50;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
