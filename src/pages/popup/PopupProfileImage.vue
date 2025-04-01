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
      <div class="tit-wrap pa-5 ma-0">
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
          v-model="tab"
          class="tab-container"
        >
          <v-window-item
            :transition="false"
          >
            <v-row class="profile-list">
              <v-col
                v-for="(item, index) in profileItems"
                :key="index"
                cols="12"
                sm="4"
                md="2"
              >
                <v-avatar
                  :size="!isMobile ? '100%' : '100%'"
                  :class="{ 'selected': selectedIndex === index }"
                  @click="selectItem(index)"
                >
                  <v-img :src="getImageUrl(item.src)" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item
            :transition="false"
          >
            <v-empty-state
              :image="getImageUrl('icon_folder_profile.png')"
              :size="!isMobile? '92': '74'"
              :icon="null"
              height="360"
              class="mt-0"
            >
              <template #actions>
                <input
                  ref="fileInput"
                  type="file"
                  name="image"
                  accept="image/*"
                  class="d-none"
                  @change="setImage"
                >
                <v-btn
                  prepend-icon="custom:plus"
                  color="info"
                  :size="!isMobile? 'large': 'small'"
                  @click="triggerFileUpload"
                >
                  파일 탐색하기
                </v-btn>
              </template>
            </v-empty-state>
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
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

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



const fileInput = ref(null);
const triggerFileUpload = () => {
  fileInput.value.click(); // 숨겨진 input을 클릭
};

//VueCropper
const cropper = ref(null);
const input = ref(null);
const imgSrc = ref("/assets/images/berserk.jpg");
const cropImg = ref("");
const data = ref(null);

// Methods
const cropImage = () => {
  cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
};


const setImage = (e) => {
  const file = e.target.files[0];

  if (file.type.indexOf("image/") === -1) {
    alert("Please select an image file");
    return;
  }

  if (typeof FileReader === "function") {
    const reader = new FileReader();

    reader.onload = (event) => {
      imgSrc.value = event.target.result;
      cropper.value.replace(event.target.result);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Sorry, FileReader API not supported");
  }
};

const showFileChooser = () => {
  input.value.click();
};
</script>
