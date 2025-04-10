<template>
  <v-container class="inner">
    <!-- 타이틀 -->
    <div class="tit-wrap column">
      <strong class="title-4-bd">아이디어 제안</strong>
      <p>여러분의 아이디어가 농협에 큰 도움이 됩니다.</p>
    </div>
    <!-- form 영역 -->
    <div class="form-sheet">
      <!-- 앱 -->
      <v-row>
        <v-col>
          <v-label for="inp-search">
            앱
          </v-label>
          <div class="label-form">
            <v-autocomplete
              id="inp-search"
              v-model="searchApps"
              :items="apps"
              item-title="name"
              item-value="name"
              :menu-icon="null"
              :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
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
      <!-- 작성자 -->
      <v-row>
        <v-col>
          <span class="v-label">작성자</span>
          <div class="label-form">
            <p class="text-value">
              김농협
            </p>
          </div>
        </v-col>
      </v-row>
      <!-- 내용 -->
      <v-row>
        <v-col>
          <v-label class="require">
            내용
          </v-label>
          <!-- 에디터 -->
          <v-sheet
            class="editor"
            height="300"
          >
            <QuillEditor
              toolbar="full"
            />
          </v-sheet>
        </v-col>
      </v-row>
      <!-- 첨부파일 -->
      <v-row>
        <v-col>
          <v-label>첨부파일</v-label>
          <div class="label-form">
            <div class="upload-file-form">
              <v-file-input
                v-model="files"
                label="파일을 첨부하거나 끌어오세요."
                rounded="lg"
                multiple
                class="append-button"
              >
                <template #append-inner>
                  <v-btn color="secondary">
                    파일첨부
                  </v-btn>
                </template>
              </v-file-input>

              <!-- 첨부된 파일 목록 표시 -->
              <p class="file-guide-text">
                *첨부 가능 최대 용량은 100MB, 5개 까지 업로드 가능합니다.
              </p>
              <v-sheet
                v-if="files.length"
                class="g-box pa-6"
              >
                <ul
                  class="file-list"
                >
                  <li
                    v-for="(file, index) in files"
                    :key="index"
                  >
                    <v-icon icon="custom:file" />
                    <span class="name">{{ file.name }}</span>
                    <v-btn
                      density="compact"
                      icon="custom:close"
                      class="file-delete"
                      @click="removeFile(index)"
                    />
                  </li>
                </ul>
              </v-sheet>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- 하단 버튼 -->
    <div class="page-actions">
      <v-btn
        color="info"
        size="x-large"
        to="/Community"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        size="x-large"
        @click="registComplete = true"
      >
        등록하기
      </v-btn>
    </div>
  </v-container>

  <!-- alert(sample) -->
  <!-- 등록 완료 -->
  <v-dialog
    v-model="registComplete"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="registComplete = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <strong class="title-5-bd">등록 완료</strong>
        <p class="text-4">
          커뮤니티 등록이 완료되었습니다.
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          size="large"
          @click="registComplete = false"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject } from 'vue';
const isDesktop = inject("isDesktop");


const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

// form
const searchApps = ref(null);

//alert
const registComplete = ref(false);

// 파일
const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};

// 앱 데이터
const apps = [
  {
    name: '1육묘대장',
    avatar: '@temp_img_app_icon01.png'
  },
  {
    name: '2text',
    avatar: '@temp_img_app_icon02.png'
  },
  {
    name: '3text text text text',
    avatar: '@temp_img_app_icon03.png'
  },
  {
    name: '4text text text',
    avatar: '@temp_img_app_icon01.png'
  },
  {
    name: '5육묘대장 육묘대장 육묘대장 육묘대장 육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon02.png'
  },
  {
    name: '6육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon01.png'
  },
  {
    name: '7육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon03.png'
  },
  {
    name: '8육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon01.png'
  },
  {
    name: '9육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon02.png'
  },
  {
    name: '10육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon03.png'
  },
]
</script>
