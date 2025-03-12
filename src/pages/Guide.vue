<template>
  <div class="w-75 ma-auto mt-5 mb-5">
    <router-link
      to="PopList"
      class="link-button-arrow"
    >
      <span
        class="text-primary"
      > 팝업리스트</span>
      <v-icon
        icon="custom:arrow-right"
        class="me-1"
        color="primary"
      />
    </router-link>
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
        <v-icon icon="custom:arrow-left" />
        <span>arrow-left</span>
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
        <v-icon icon="custom:arrow-last" />
        <span>arrow-last</span>
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
    <div class="d-flex ga-2 mt-4">
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
    <!-- tit-wrap -->
    <v-divider class="mt-4 pt-4" />
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
    <v-divider class="mt-4 pt-4" />
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
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select"
          density="default"
          label="default48"
          :items="['전체', '타입1', '타입2']"
        />

        <v-select
          v-model="select"
          density="comfortable"
          label="comfortable44"
          :items="['전체', '상태1', '상태2']"
        />
        <v-select
          v-model="select"
          density="compact"
          label="compact36"
          :items="['전체', '상태1', '상태2']"
        />

        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="앱코드, 앱 이름을 검색해주세요."
          append-inner-icon="custom:search"
          @click:append-inner="onAppendClick"
        />

        <v-btn
          color="line"
          icon="custom:refresh"
        />
      </v-form>

      <v-form>
        <v-select
          v-model="select"
          density="default"
          label="default"
          :items="['전체', '타입1', '타입2']"
        />

        <v-select
          v-model="select"
          density="default"
          label="round"
          rounded="xl"
          class="round"
          :items="['전체', '상태1', '상태2']"
        />
      </v-form>
    </div>
    <v-divider class="mt-4 pt-4" />
    <div>
      <v-file-input
        v-model="files"
        label="버튼을 클릭하여 파일을 첨부하거나 원하는 파일을 마우스로 끌어오세요."
        multiple
      >
        <template #append-inner>
          <v-btn
            color="secondary"
          >
            파일첨부
          </v-btn>
        </template>
      </v-file-input>
      <!-- 첨부된 파일 목록 표시 -->
      <div class="upload-guide">
        <p>*첨부 가능 최대 용량은 100MB, 5개 까지 업로드 가능합니다.</p>
      </div>
      <ul
        v-if="files.length"
        class="file-list"
      >
        <li
          v-for="(file, index) in files"
          :key="index"
        >
          <v-icon icon="custom:file" />
          <span>{{ file.name }}</span>
          <v-btn
            density="compact"
            icon="custom:close"
            @click="removeFile(index)"
          />
        </li>
      </ul>
    </div>

    <ul
      class="file-list"
    >
      <li
        v-for="(file, index) in files2"
        :key="index"
      >
        <v-icon icon="custom:file" />
        <span>{{ file.name }}</span>
        <em>{{ file.size }}</em>
        <v-btn
          density="compact"
          icon="custom:download"
          @click="downloadFile(file)"
        />
      </li>
    </ul>
    <!-- popup -->
    <v-divider class="mt-4 pt-4" />
    <Popup />

    <!-- flag -->
    <v-divider class="mt-4 pt-4" />
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
            size="x-small"
          >
            x-small/20px
          </v-chip>
          <v-chip
            class="flag"
            density="comfortable"
          >
            default/28px
          </v-chip>
          <v-chip
            class="flag"
            density="compact"
            size="x-large"
          >
            x-large/40px
          </v-chip>
        </v-col>
      </v-row>
    </div>

    <!-- radio -->
    <v-divider class="mt-4 pt-4" />
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
    <v-divider class="mt-4 pt-4" />
    <div class="mt-4 d-flex">
      <v-list
        density="comfortable"
        :items="items"
      />
    </div>

    <!-- 텍스트 -->
    <v-divider class="mt-4 pt-4" />
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
      <div class="mt-4 pt-4">
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
      <div class="mt-4 pt-4">
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
    <v-divider class="mt-4 pt-4" />
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
            class="link-button"
          >
            Text
          </router-link>
        </v-col>
        <v-col cols="auto">
          <router-link
            to="/"
            class="link-button-arrow"
          >
            <span
              class="text-primary"
            > 더보러가기</span>
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
          >
            999
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
    <v-divider class="mt-4 pt-4" />
    <v-sheet
      class="editor"
      height="300"
    >
      <QuillEditor
        toolbar="full"
      />
    </v-sheet>

    <!-- table -->
    <v-divider class="mt-4 pt-4" />
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

    <v-divider class="mt-4 pt-4" />

    <!-- 배너 -->
    <section class="banner-wrap">
      <v-img
        class="banner"
        :style="{ backgroundImage: `url(${banner.imageUrl})` }"
      >
        <div class="banner-text">
          <p v-html="banner.description" />
        </div>
      </v-img>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref("");
const select = ref("전체");

const onAppendClick = () => {
  alert("Append icon clicked!");
};

const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};

const files2 = ref([
  { name: "C:/Download/Filename.png", size: "10.3MB", url: "#" },
]);

const downloadFile = (files2) => {
  console.log(files2.name)
};


const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
]);
 const items = [
  { type: 'subheader', title: 'Group #1' },
  {
    title: 'Item #1',
    value: 1,
  },
  {
    title: 'Item #2',
    value: 2,
  },
  {
    title: 'Item #3',
    value: 3,
  },
]

//배너
const banner = ref({
  imageUrl: "src/assets/images/apps_bnr_bg01.png",
  description: "세상에 없던 NH 고객 라이프<br>관리 서비스 공개"
});
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
