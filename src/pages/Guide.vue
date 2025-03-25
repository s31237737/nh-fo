<template>
  <section class="inner ma-auto mt-5 mb-5">
    <Pagination
      :total-items="dataTableItem.length"
      :items-per-page="itemsPerPage"
      @paging="page = $event.page"
    />
    <!-- icons -->
    <div class="d-flex flex-wrap ga-2 bg-info">
      <div class="icon-item">
        <v-icon icon="custom:hamburger" />
        <span>hamburger</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alarm" />
        <span>alarm</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:clock" />
        <span>clock</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:close" />
        <span>close</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:setting" />
        <span>setting</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-first" />
        <span>arrow-first</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-prev" />
        <span>arrow-prev</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-next" />
        <span>arrow-next</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-last" />
        <span>arrow-last</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-up" />
        <span>arrow-up</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-down" />
        <span>arrow-down</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:arrow-left" />
        <span>arrow-left</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-right" />
        <span>arrow-right</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:search" />
        <span>search</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:calendar" />
        <span>calendar</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:new-window" />
        <span>new-window</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:warning" />
        <span>warning</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:complete" />
        <span>complete</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:remove" />
        <span>remove</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:download" />
        <span>download</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:radio-off" />
        <span>radio-off</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:radio-on" />
        <span>radio-off</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:checkbox-off" />
        <span>radio-off</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:checkbox-on" />
        <span>radio-off</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:clear" />
        <span>clear</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:plus" />
        <span>plus</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:edit" />
        <span>edit</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:file" />
        <span>file</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:attachment" />
        <span>attachment</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:refresh" />
        <span>refresh</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:full-heart" />
        <span>full-heart</span>
      </div>
      <div class="icon-item">
        <v-icon
          icon="custom:admin"
        />
        <span>admin</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:logout" />
        <span>logout</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:auto-pause" />
        <span>auto-pause</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:auto-play" />
        <span>auto-play</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:slide-prev" />
        <span>slide-prev</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:slide-next" />
        <span>slide-next</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:slide-dot" />
        <span>slide-dot</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:faq" />
        <span>faq</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:app-guide" />
        <span>app-guide</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:notice" />
        <span>notice</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:fix" />
        <span>fix</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:surpport" />
        <span>surpport</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:report" />
        <span>report</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:schedule" />
        <span>schedule</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:drawer" />
        <span>drawer</span>
      </div>
    </div>

    <div class="d-flex flex-wrap ga-2 mt-5">
      <div class="icon-item">
        <v-icon icon="custom:info" />
        <span>info</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:view" />
        <span>view</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert-success" />
        <span>alert-success</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert" />
        <span>alert</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert-error" />
        <span>alert-error</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:move" />
        <span>move</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:zoom" />
        <span>zoom</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:sort-desc" />
        <span>sort-desc</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:sort-asc" />
        <span>sort-asc</span>
      </div>


      <div class="icon-item">
        <v-icon icon="custom:minus" />
        <span>minus</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:play" />
        <span>play</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:comment" />
        <span>comment</span>
      </div>
    </div>
    <div class="d-flex ga-2 mt-5">
      <v-label>아이콘 사이즈</v-label>
      <v-icon
        icon="$vuetify"
        size="x-large"
      />
      <span>:x-large 32</span>
      <v-icon
        icon="$vuetify"
        size="large"
      />
      <span>:large 28</span>
      <v-icon icon="$vuetify" />
      <span>:default 24</span>
      <v-icon
        icon="$vuetify"
        size="small"
      />
      <span>:small 20</span>
      <v-icon
        icon="$vuetify"
        size="x-small"
      />
      <span>:x-small 16</span>
    </div>

    <div class="icon-text">
      <v-icon
        size="x-large"
        icon="custom:full-heart"
      />
      <span>982</span>
    </div>

    <!-- tit-wrap -->
    <v-divider class="mt-5 pt-5" />
    <div class="tit-wrap">
      <strong class="title-4">
        타이틀
      </strong>
      <div class="btns">
        <v-btn
          size="large"
          color="warning"
          variant="outlined"
          prepend-icon="custom:remove"
        >
          답변 삭제
        </v-btn>
        <v-btn
          color="info"
          size="large"
          prepend-icon="custom:edit"
        >
          답변 수정
        </v-btn>
      </div>
    </div>

    <!-- form -->
    <!-- email -->
    <v-divider class="mt-5 pt-5" />
    <v-text-field
      density="default"
      placeholder="h48px"
      prepend-inner-icon="mdi-email-outline"
    />
    <v-text-field
      density="comfortable"
      placeholder="h44px "
      prepend-inner-icon="mdi-email-outline"
    />
    <v-text-field
      density="compact"
      placeholder="h36px"
      prepend-inner-icon="mdi-email-outline"
    />

    <!-- search -->
    <v-divider class="mt-5 pt-5" />
    <div class="search-wrap">
      <v-form>
        <v-text-field
          v-model="form"
          class="search-inp round"
          placeholder="앱코드, 앱 이름을 검색해주세요."
          append-inner-icon="custom:search"
          rounded="pill"
          bg-color="white"
          @click:append-inner="onAppendClick"
        />

        <v-btn
          color="line"
          icon="custom:refresh"
        />
      </v-form>
    </div>

    <!-- select -->
    <v-divider class="mt-5 pt-5" />
    <div>
      <v-form class="d-flex gutter">
        <v-select
          v-model="select"
          density="default"
          label="default48"
          :items="['전체', '타입1', '타입2']"
          :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
        />

        <v-select
          v-model="select"
          density="comfortable"
          label="comfortable44"
          :items="['전체', '상태1', '상태2']"
          :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
        />
        <v-select
          v-model="select"
          density="compact"
          label="compact36"
          :items="['전체', '상태1', '상태2']"
          :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
        />
      </v-form>
      <v-form class="d-flex mt-5">
        <v-select
          v-model="select"
          density="default"
          label="default"
          :items="['전체', '타입1', '타입2']"
          :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
          class="required"
        />

        <v-select
          v-model="select"
          label="round"
          rounded="pill"
          class="round"
          :items="['전체', '상태1', '상태2']"
          :menu-props="{ maxHeight: '208px', auto: true, maxWidth: '100%' }"
        />
      </v-form>
    </div>

    <!-- form-sheet -->
    <v-divider class="mt-5 pt-5" />
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
              <div class="file-input-guide">
                <p>
                  *첨부 가능 최대 용량은 100MB, 5개 까지 업로드 가능합니다.
                </p>
              </div>
              <ul
                v-if="files.length"
                class="file-list upload"
              >
                <li
                  v-for="(file, index) in files"
                  :key="index"
                >
                  <v-icon icon="custom:file" />
                  <span class="line-clamp">{{ file.name }}</span>
                  <v-btn
                    density="compact"
                    icon="custom:close"
                    class="file-delete"
                    @click="removeFile(index)"
                  />
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="page-actions">
      <div class="pagination">
        <v-btn
          :ripple="false"
          icon="custom:arrow-prev"
          :disabled="currentPage === 1"
          color="info"
          @click="goToPage(currentPage - 1)"
        />
        <v-btn
          :ripple="false"
          icon="custom:arrow-next"
          :disabled="currentPage === totalPages"
          color="info"
          @click="goToPage(currentPage + 1)"
        />
      </div>
      <v-spacer />

      <v-btn
        color="info"
        size="large"
      >
        목록가기
      </v-btn>
      <v-btn
        size="large"
        color="warning"
        variant="outlined"
      >
        삭제
      </v-btn>
    </div>
    <div class="page-actions">
      <v-btn
        color="info"
        size="large"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        size="large"
      >
        등록하기
      </v-btn>
    </div>

    <v-divider class="mt-5 pt-5" />
    <div class="bg-info pa-5">
      <ul
        class="file-list download"
      >
        <li
          v-for="(file, index) in downloadFile"
          :key="index"
        >
          <v-btn
            variant="text"
            density="compact"
            class="file-download"
            @click="download(file)"
          >
            <span class="line-clamp">{{ file.name }}</span>
          </v-btn>
          <em>{{ file.size }}</em>
        </li>
      </ul>
    </div>

    <!-- popup -->
    <v-divider class="mt-5 pt-5" />
    <Popup />

    <!-- flag -->
    <v-divider class="mt-5 pt-5" />
    <div>
      <v-row
        align="center"
      >
        <v-col cols="auto">
          <v-label>색상, 모양</v-label>
        </v-col>
        <v-col cols="auto">
          <v-chip class="flag">
            default
          </v-chip>

          <v-chip
            class="flag"
            color="success"
            variant="tonal"
          >
            blue
          </v-chip>

          <v-chip
            class="flag"
            color="purple"
            variant="tonal"
          >
            purple
          </v-chip>

          <v-chip
            class="flag"
            color="pink"
            variant="tonal"
          >
            pink
          </v-chip>

          <v-chip
            class="flag"
            color="primary"
          >
            black
          </v-chip>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="auto">
          <v-label>크기**</v-label>
        </v-col>
        <v-col cols="auto">
          <v-chip
            class="flag"
            size="small"
          >
            small/20px
          </v-chip>
          <v-chip
            class="flag"
          >
            default/24px
          </v-chip>
          <v-chip
            class="flag"
            size="large"
          >
            large/40px
          </v-chip>
        </v-col>
      </v-row>
    </div>

    <!-- radio -->
    <v-divider class="mt-5 pt-5" />
    <v-radio-group>
      <v-radio
        label="Radio One"
        value="one"
      />
      <v-radio
        label="Radio Two"
        value="two"
      />
      <v-radio
        label="Radio Three"
        value="three"
      />
    </v-radio-group>

    <!-- list -->
    <v-divider class="mt-5 pt-5" />
    <div class="mt-5 d-flex">
      <v-list
        density="comfortable"
        :items="items"
      />
    </div>

    <!-- 텍스트 -->
    <v-divider class="mt-5 pt-5" />
    <div>
      <div>
        <p class="title-1">
          title-1 큰 제목입니다 (400, 58, 42px)
        </p>
        <p class="title-1-bd">
          title-1-bd 큰 제목입니다 (700, 58, 42px)
        </p>
        <p class="title-2">
          title-2 중간 크기 제목입니다 (400, 50, 34px)
        </p>
        <p class="title-2-bd">
          title-2-bd 중간 크기 제목입니다 (600, 50, 34px)
        </p>
        <p class="title-3">
          title-3 중간 크기 제목입니다 (500, 40, 32px)
        </p>
        <p class="title-3-bd">
          title-3-bd 중간 크기 제목입니다 (700, 40, 32px)
        </p>
        <p class="title-4">
          title-4 중간 크기 제목입니다 (500, 32, 24px)
        </p>
        <p class="title-4-bd">
          title-4-bd 중간 크기 제목입니다 (600, 32, 24px)
        </p>
        <p class="title-5">
          title-5 작은 크기 제목입니다 (500, 26, 18px)
        </p>
        <p class="title-5-bd">
          title-5-bd 작은 크기 제목입니다 (600, 26, 18px)
        </p>
      </div>
      <div class="mt-5 pt-5">
        <p class="text-1">
          text-1 큰 본문 텍스트입니다. (500, 28, 20px)
        </p>
        <p class="text-2">
          text-2 큰 본문 텍스트입니다. (400, 26, 18px)
        </p>
        <p class="text-2-md">
          text-2-md 큰 본문 텍스트입니다. (500, 26, 18px)
        </p>
        <p class="text-3">
          text-3 일반 본문 텍스트입니다. (400, 24, 16px)
        </p>
        <p class="text-3-md">
          text-3-md 일반 본문 텍스트입니다. (500, 24, 16px)
        </p>
        <p class="text-3-bd">
          text-3-bd 일반 본문 텍스트입니다. (700, 24, 16px)
        </p>
        <p class="text-4">
          text-4 작은 본문 텍스트입니다. (400, 20, 14px)
        </p>
        <p class="text-4-md">
          text-4-md 작은 본문 텍스트입니다. (500, 20, 14px)
        </p>
        <p class="text-4-bd">
          text-4-bd 작은 본문 텍스트입니다. (700, 20, 14px)
        </p>
      </div>
      <div class="mt-5 pt-5">
        <p class="caption-1">
          caption-1 캡션 스타일입니다. (700, 26, 18px)
        </p>
        <p class="caption-2">
          caption-2 캡션 스타일입니다. (400, 20, 14px)
        </p>
        <p class="caption-2-md">
          caption-2-md 캡션 스타일입니다. (500, 20, 14px)
        </p>
        <p class="caption-3">
          caption-3 캡션 스타일입니다. (400, 18, 12px)
        </p>
        <p class="caption-3-md">
          caption-3-md 캡션 스타일입니다. (500, 18, 12px)
        </p>
      </div>
    </div>
    <!-- // 텍스트 -->

    <!-- 버튼 -->
    <v-divider class="mt-5 pt-5" />
    <div>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="auto">
          <v-btn density="compact">
            24px /  Compact Button
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="comfortable">
            32px / Comfortable Button
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">
            36px / Default Button
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- x-small/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            size="x-small"
          >
            20px/x-small/Primary
          </v-btn>
        </v-col>

        <!-- x-small/success -->
        <v-col cols="auto">
          <v-btn
            color="success"
            size="x-small"
          >
            x-small/success
          </v-btn>
        </v-col>

        <!-- x-small/secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            size="x-small"
          >
            x-small/secondary
          </v-btn>
        </v-col>

        <!-- x-small/info -->
        <v-col cols="auto">
          <v-btn
            color="info"
            size="x-small"
          >
            x-small/info
          </v-btn>
        </v-col>

        <!-- x-small/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="x-small"
          >
            x-small/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="x-small"
            variant="outlined"
          >
            x-small/Warning
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- small/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            size="small"
          >
            28px/small/Primary
          </v-btn>
        </v-col>

        <!-- small/success -->
        <v-col cols="auto">
          <v-btn
            color="success"
            size="small"
          >
            small/success
          </v-btn>
        </v-col>

        <!-- small/secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            size="small"
          >
            small/secondary
          </v-btn>
        </v-col>

        <!-- small/info -->
        <v-col cols="auto">
          <v-btn
            color="info"
            size="small"
          >
            small/info
          </v-btn>
        </v-col>

        <!-- small/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="small"
          >
            small/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="small"
            variant="outlined"
          >
            small/Warning
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- default/Primary -->
        <v-col cols="auto">
          <v-btn color="primary">
            36px/default/Primary
          </v-btn>
        </v-col>

        <!-- default/success -->
        <v-col cols="auto">
          <v-btn color="success">
            default/success
          </v-btn>
        </v-col>

        <!-- default/secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
          >
            default/secondary
          </v-btn>
        </v-col>

        <!-- default/info -->
        <v-col cols="auto">
          <v-btn
            color="info"
          >
            default/info
          </v-btn>
        </v-col>

        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn color="warning">
            default/Warning
          </v-btn>
        </v-col>
        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            variant="outlined"
          >
            default/Warning
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <!-- default/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            disabled
          >
            disabled/Primary
          </v-btn>
        </v-col>

        <!-- default/success -->
        <v-col cols="auto">
          <v-btn
            color="success"
            disabled
          >
            disabled/success
          </v-btn>
        </v-col>

        <!-- default/secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            disabled
          >
            disabled/secondary
          </v-btn>
        </v-col>

        <!-- default/info -->
        <v-col cols="auto">
          <v-btn
            color="info"
            disabled
          >
            disabled/info
          </v-btn>
        </v-col>

        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            disabled
          >
            disabled/Warning
          </v-btn>
        </v-col>
        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            disabled
            variant="outlined"
          >
            disabled/Warning
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- large/Primary -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="primary"
          >
            42px/large/Primary
          </v-btn>
        </v-col>

        <!-- large/success -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="success"
          >
            large/success
          </v-btn>
        </v-col>

        <!-- large/secondary -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="secondary"
          >
            large/secondary
          </v-btn>
        </v-col>

        <!-- large/info -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="info"
          >
            large/info
          </v-btn>
        </v-col>

        <!-- large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="warning"
          >
            large/Warning
          </v-btn>
        </v-col>

        <!-- large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="warning"
            variant="outlined"
          >
            large/Warning
          </v-btn>
        </v-col>
      </v-row>


      <v-row>
        <!-- x-large/Primary -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="primary"
          >
            54px/x-large/Primary
          </v-btn>
        </v-col>

        <!-- x-large/success -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="success"
          >
            x-large/success
          </v-btn>
        </v-col>

        <!-- x-large/secondary -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="secondary"
          >
            x-large/secondary
          </v-btn>
        </v-col>

        <!-- x-large/info -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="info"
          >
            x-large/info
          </v-btn>
        </v-col>

        <!-- x-large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="warning"
          >
            x-large/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="warning"
            variant="outlined"
          >
            x-large/Warning
          </v-btn>
        </v-col>
      </v-row>
      <!-- 링크버튼? -->
      <v-row>
        <v-col cols="auto">
          <router-link
            to="/"
            class="link-btn"
          >
            <span>Text</span>
          </router-link>
        </v-col>
        <v-col cols="auto">
          <router-link
            to="/"
            class="link-btn-arrow"
          >
            <span>더보러가기</span>
            <v-icon
              icon="custom:arrow-right"
              color="primary"
            />
          </router-link>
        </v-col>
        <v-col cols="auto">
          <v-btn
            variant="text"
            prepend-icon="custom:full-heart"
            color="primary"
            :ripple="false"
            class="like"
            @click="incrementLikes"
          >
            {{ likes }}
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            variant="text"
            density="compact"
            append-icon="custom:arrow-down"
            color="quaternary"
            :ripple="false"
          >
            더보기
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            variant="text"
            density="compact"
            append-icon="custom:arrow-right"
            color="quaternary"
            :ripple="false"
          >
            더 보러가기
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- icon/ 40px -->
        <v-col cols="auto">
          <v-btn
            icon="custom:refresh"
          />
        </v-col>
        <!-- icon/ 40px -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            icon="custom:refresh"
          />
        </v-col>

        <!-- icon/ 32px -->
        <v-col cols="auto">
          <v-btn
            color="success"
            icon="custom:plus"
            density="comfortable"
          />
        </v-col>

        <!-- icon/24px -->
        <v-col cols="auto">
          <v-btn
            density="compact"
            icon="custom:refresh"
          />
        </v-col>
      </v-row>
    </div>
    <!-- //버튼 -->

    <!-- editor -->
    <v-divider class="mt-5 pt-5" />
    <v-sheet
      class="editor"
      height="300"
    >
      <QuillEditor
        toolbar="full"
      />
    </v-sheet>

    <!-- table -->
    <v-divider class="mt-5 pt-5" />
    <v-row>
      <v-col cols="auto">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <v-divider class="mt-5 pt-5" />

    <!-- 컨텐츠 배너 -->
    <section>
      <div
        class="banner-wrap"
        :class="{ 'clickable': banner.url }"
      >
        <v-img
          role="banner"
          class="banner"
          :style="{ backgroundImage: 'url('+getImageUrl(banner.imageUrl)+')' }"
          @click="bannerClick(banner)"
        >
          <div class="banner-text">
            <p
              class="description"
            >
              {{ banner.description }}
            </p>
          </div>
        </v-img>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from "vue-router";

const isDesktop = inject("isDesktop");

const onAppendClick = () => {
  alert("Append icon clicked!");
};

const btnSwitch = ref(true);

// form
const form = ref("");
const select = ref("전체");
const appsearch = ref([]);
const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};
const download = (downloadFile) => {
  console.log(downloadFile.name)
};
const downloadFile = ref([
  { name: "Filename.png", size: "10.3MB", url: "#" },
]);


const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
]);
 const items = [
  { type: "subheader", title: "Group #1" },
  {
    title: "Item #1",
    value: 1,
  },
  {
    title: "Item #2",
    value: 2,
  },
  {
    title: "Item #3",
    value: 3,
  },
]

//배너
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
const router = useRouter();
const banner = ref({
  imageUrl: "img_apps_banner_02.png",
  description: "세상에 없던 NH 고객 라이프\n관리 서비스 공개",
});
const bannerClick = (banner) => {
  if (!banner.url) {
    return; // URL이 없으면 아무 동작 X
  } else {
    router.push(banner.url);
  }
};

// 좋아요 카운트
const likes = ref(0);
const incrementLikes = () => {
  likes.value++;
};



// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "YYYY.MM.DD",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.16",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "이민수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.10",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "박지은",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "최영희",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "앱",
    status: "노출",
    answer: "답변완료",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "앱",
    status: "미노출",
    answer: "미답변",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
]);

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
const searchApps = ref(null);
</script>
<style scoped>
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.icon-item span {
  margin-top: 5px;
  font-size: 12px;
}
</style>
