<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
    @after-leave="tab = 0; isImageSelected = false"
  >
    <v-card class="cropper-wrap">
      <v-card-title>
        <p>프로필 이미지 변경</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <div
        v-if="!isImageSelected"
        class="tit-wrap"
      >
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
          v-if="!isImageSelected"
          v-model="tab"
          class="tab-container"
        >
          <v-window-item>
            <v-row class="profile-list">
              <v-col
                v-for="(item, index) in profileItems"
                :key="index"
                cols="12"
                sm="4"
                md="2"
              >
                <v-avatar
                  :size="'100%'"
                  :class="{ 'selected': selectedIndex === index }"
                  @click="selectItem(index)"
                >
                  <v-img :src="getImageUrl(item.src)" />
                </v-avatar>
              </v-col>
              <!-- crop 이미지 확인용 개발에서는 삭제바람-->
              <v-col
                cols="12"
                sm="4"
                md="2"
              >
                <v-avatar
                  v-if="croppedImage"
                  :size="'100%'"
                >
                  <v-img :src="croppedImage" />
                </v-avatar>
              </v-col>
              <!-- crop 이미지 확인용 개발에서는 삭제바람-->
            </v-row>
          </v-window-item>
          <v-window-item>
            <v-empty-state
              :image="getImageUrl('icon_folder_profile.png')"
              :size="!isMobile ? '92' : '74'"
              :icon="null"
            >
              <template #actions>
                <v-btn
                  prepend-icon="custom:plus"
                  color="info"
                  :size="!isMobile ? 'large' : 'small'"
                  @click="$refs.fileInput.click()"
                >
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    class="d-none"
                    @change="onFileChange"
                  >
                  파일 탐색하기
                </v-btn>
              </template>
            </v-empty-state>
          </v-window-item>
        </v-window>

        <cropper
          v-else
          ref="cropperRef"
          class="cropper"
          :src="uploadedImage"
          :stencil-component="CircleStencil"
          image-restriction="stencil"
          default-boundaries="fill"
        />
      </v-card-text>
      <v-card-actions>
        <template v-if="!isImageSelected">
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
            @click="emit('update:modelValue', false)"
          >
            저장하기
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            color="info"
            size="large"
            @click="isImageSelected = false"
          >
            이전
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="crop"
          >
            저장하기
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject } from 'vue';
// https://advanced-cropper.github.io/vue-advanced-cropper/
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

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

const tab = ref(0);
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

const selectedIndex = ref(0);
const selectItem = (index) => {
  selectedIndex.value = index;
};

// Cropper
const isImageSelected = ref(false); // 이미지 선택 여부

const croppedImage = ref(null);// to 개발: 자른 이미지값
const uploadedImage = ref(null);

const onFileChange = (event) => {
  const input = event.target;
  if (input.files && input.files[0]) {
    const file = input.files[0];

    // 파일 크기 확인 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      alert("파일 크기는 10MB를 초과할 수 없습니다.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImage.value = e.target.result;
      isImageSelected.value = true;
    };
    reader.readAsDataURL(file);
  }
};

const cropperRef = ref(null);
const crop = async () => {
  if (cropperRef.value) {
    const { canvas } = cropperRef.value.getResult();

    if (canvas) {
      const width = canvas.width;
      const height = canvas.height;

      // 최소 크기 확인
      if (width < 60 || height < 60) {
        alert("이미지 크기는 최소 60x60이어야 합니다.");
        return;
      }

      // 크롭된 이미지 저장
      croppedImage.value = canvas.toDataURL();
      isImageSelected.value = false;
      emit('update:modelValue', false); // 팝업 닫기
    }
  } else {
    console.error("cropperRef is not initialized.");
  }
};
</script>
