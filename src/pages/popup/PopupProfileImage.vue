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
      <div
        v-if="!isImageSelected || isImageCropped"
        class="tit-wrap pa-5 ma-0"
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
      <v-card-text class="pt-0">
        <!-- dialog contents -->
        <v-window
          v-if="!isImageSelected || isImageCropped"
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
            </v-row>
          </v-window-item>
          <v-window-item>
            <v-empty-state
              v-if="!isImageSelected && !isImageCropped"
              :image="getImageUrl('icon_folder_profile.png')"
              :size="!isMobile ? '92' : '74'"
              :icon="null"
              height="360"
              class="mt-0"
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
            <v-row
              v-if="isImageCropped"
              class="profile-list"
            >
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
            </v-row>
          </v-window-item>
        </v-window>
        <v-sheet
          v-if="!isImageCropped && isImageSelected"
          class="cropper-wrap"
          height="444"
          style="overflow:hidden"
        >
          <cropper
            ref="cropperRef"
            class="cropper"
            :src="uploadedImage"
            :stencil-props="{
              handlers: {},
              movable: false,
              resizable: false,
              aspectRatio: 1,
            }"
            :resize-image="{
              adjustStencil: false
            }"
            image-restriction="stencil"
          />
        </v-sheet>
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="!isImageSelected || isImageCropped"
          color="info"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          취소
        </v-btn>
        <v-btn
          v-else
          color="info"
          size="large"
          @click="isImageSelected = false"
        >
          이전
        </v-btn>
        <v-btn
          v-if="isImageSelected && !isImageCropped"
          color="primary"
          size="large"
          @click="crop"
        >
          저장하기
        </v-btn>
        <v-btn
          v-else
          color="primary"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          저장하기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject, nextTick } from 'vue';
// https://advanced-cropper.github.io/vue-advanced-cropper/
import { Cropper } from 'vue-advanced-cropper';
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
const isImageCropped = ref(false); // 크롭 완료 여부

const croppedImage = ref(null);
const compressedImage = ref(null);
const uploadedImage = ref(null);
const coordinates = ref(null);

const cropperRef = ref(null);
const crop = async () => {
  if (cropperRef.value) {
    const { coordinates: cropCoordinates, canvas } = cropperRef.value.getResult();
    coordinates.value = cropCoordinates;

    if (canvas) {
      croppedImage.value = canvas.toDataURL();
      compressedImage.value = await resizeDataUrlImage({
        dataUrl: canvas.toDataURL(),
        width: 100,
        height: 100,
      });
      isImageCropped.value = true;
    }
  } else {
    console.error("cropperRef is not initialized.");
  }
};

const resizeDataUrlImage = ({ dataUrl, width, height }) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL());
    };
    img.src = dataUrl;
  });
};

const onFileChange = (event) => {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImage.value = e.target.result;
      isImageSelected.value = true;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

// Reset images
// const resetImages = () => {
//   croppedImage.value = null;
//   compressedImage.value = null;
// };

</script>
