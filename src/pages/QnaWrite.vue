<template>
  <v-container class="inner">
    <div class="tit-wrap column">
      <strong class="title-4-bd">[공지] NH총무알리비 서비스 앱 개선 공지 (24.6.20(목) 18:00~24:00)</strong>
      <p>문의하시기 전 자주하는 질문을 통해 문제 해결방법을 확인하실 수 있습니다.</p>
    </div>
    <div class="form-sheet">
      <v-row>
        <v-col>
          <v-label
            class="require"
          >
            텍스트
          </v-label>
          <div class="label-form">
            <p class="text-value">
              텍스트만 입력
            </p>
          </div>
        </v-col>
        <v-col>
          <v-label
            class="require"
          >
            스위치버튼
          </v-label>
          <div class="label-form">
            <v-switch
              v-model="btnSwitch"
              density="compact"
              class="switch-flip"
            />
          </div>
        </v-col>
      </v-row>
      <v-divider v-if="!isDesktop" />
      <v-row>
        <v-col>
          <v-label
            class="require"
          >
            에디터
          </v-label>
          <div class="label-form">
            <v-sheet
              class="editor"
            >
              <QuillEditor
                toolbar="full"
              />
            </v-sheet>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-label
            for="inp-txt"
            class="require"
          >
            텍스트필드
          </v-label>
          <div class="label-form">
            <v-text-field
              id="inp-txt"
              placeholder="내용을 입력해 주세요."
            />
            <v-text-field
              id="inp-txt"
              disabled
              placeholder="내용을 입력해 주세요."
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-label
            for="inp-search"
            class="require"
          >
            검색
          </v-label>
          <div class="label-form">
            <v-text-field
              id="inp-search"
              v-model="appsearch"
              placeholder="검색해 주세요."
              class="append-button"
            >
              <template #append-inner>
                <v-btn
                  color="secondary"
                >
                  검색
                </v-btn>
              </template>
            </v-text-field>

            <!-- disabled -->
            <v-text-field
              id="inp-search"
              v-model="appsearch"
              placeholder="검색해 주세요."
              disabled
              class="append-button"
            >
              <template #append-inner>
                <v-btn
                  color="secondary"
                  disabled
                >
                  검색
                </v-btn>
              </template>
            </v-text-field>

            <!-- autocomplete -->
            <v-autocomplete
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
      <v-row>
        <v-col>
          <v-label
            for="inp-select"
            class="require"
          >
            셀렉트
          </v-label>
          <div class="label-form">
            <v-select
              id="inp-select"
              v-model="select"
              density="default"
              :items="['전체', '타입1', '타입2']"
              :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
            />

            <!-- disabled -->
            <v-select
              id="inp-select"
              v-model="select"
              density="default"
              :items="['전체', '타입1', '타입2']"
              :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
              disabled
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-label>첨부파일</v-label>
          <div class="label-form">
            <div class="upload-file-form">
              <v-file-input
                v-model="files"
                label="버튼을 클릭하여 파일을 첨부하거나 원하는 파일을 마우스로 끌어오세요."
                rounded="lg"
                multiple
                class="append-button"
              >
                <template #append-inner>
                  <v-btn
                    color="secondary"
                  >
                    파일첨부
                  </v-btn>
                </template>
              </v-file-input>

              <!-- disabled -->
              <v-file-input
                v-model="files"
                label="버튼을 클릭하여 파일을 첨부하거나 원하는 파일을 마우스로 끌어오세요."
                rounded="lg"
                multiple
                disabled
                class="append-button"
              >
                <template #append-inner>
                  <v-btn
                    color="secondary"
                    disabled
                  >
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
    <div class="page-actions">
      <v-btn
        color="info"
        size="x-large"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        size="x-large"
      >
        등록하기
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref, inject } from 'vue';
const isDesktop = inject("isDesktop");

// form
const btnSwitch = ref(true);
const searchApps = ref(null);
const form = ref("");
const select = ref("전체");
const appsearch = ref([]);
const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};
//autocomplete
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
    avatar: '@temp_img_app_icon03.png'
  },
  {
    name: '7육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon01.png'
  },
  {
    name: '8육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon02.png'
  },
  {
    name: '9육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon03.png'
  },
  {
    name: '10육묘대장 육묘대장 육묘대장',
    avatar: '@temp_img_app_icon01.png'
  },
]
const fileList = ref([
  { name: "File_t_title_1.pdf", size: "10.3MB"},
  { name: "File_title_title_title_title_2.pdf", size: "10.3MB"},
  { name: "File_title_3565.pdf", size: "10.3MB"},
]);

const downloadFile = (files) => {
  console.log(files.name)
};

</script>
