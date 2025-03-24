<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <p>불편사항 신고하기</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <p class="text-4 text-quaternary">
          업스토어 이용 중, 앱 사용 중 느낀 불편사항을 남겨주시면 관리자가 확인하여 답변드리겠습니다.
        </p>
        <div class="form-sheet">
          <v-row>
            <v-col>
              <v-label
                for="inp-txt"
              >
                제목
              </v-label>
              <div class="label-form">
                <v-text-field
                  id="inp-txt"
                  placeholder="제목을 입력해주세요."
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label
                for="inp-select"
              >
                유형
              </v-label>
              <div class="label-form">
                <v-select
                  id="inp-select"
                  v-model="select"
                  density="default"
                  :items="['업스토어 이용 시 불편사항', '앱 사용 시 불편사항', '기타']"
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label
                for="inp-search"
              >
                앱
              </v-label>
              <div class="label-form">
                <v-autocomplete
                  v-model="searchApps"
                  :items="apps"
                  item-title="name"
                  item-value="name"
                  :menu-icon="null"
                  class="append-button"
                  placeholder="앱 이름을 검색해주세요."
                >
                  <template #item="{ props, item }">
                    <v-list-item
                      v-bind="props"
                      :prepend-avatar="getImageUrl(item.raw.avatar)"
                      :title="item.raw.name"
                    />
                  </template>

                  <!-- 검색 버튼 추가 -->
                  <template #append-inner>
                    <v-btn
                      color="secondary"
                    >
                      검색
                    </v-btn>
                  </template>
                </v-autocomplete>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label
                for="inp-search"
              >
                불편사항 내용
              </v-label>
              <div class="label-form">
                <v-textarea
                  no-resize
                  maxlength="1000"
                  placeholder="불편사항 내용을 입력해 주세요."
                />
              </div>
            </v-col>
          </v-row>
        </div>
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
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref } from 'vue';

  const getImageUrl = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };
  const select = ref("업스토어 이용 시 불편사항");

  //autocomplete
  const apps = [
    { 
      name: '육묘대장', 
      avatar: '@temp_img_app_icon01.png' 
    },
    { 
      name: 'text', 
      avatar: '@temp_img_app_icon01.png' 
    },
    { 
      name: 'text text text text', 
      avatar: '@temp_img_app_icon01.png' 
    },
    { 
      name: 'text text text', 
      avatar: '@temp_img_app_icon01.png' 
    },
    { 
      name: '육묘대장 육묘대장 육묘대장', 
      avatar: '@temp_img_app_icon01.png' 
    },
  ]
  const searchApps = ref(null);

  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['update:modelValue']);
</script>
