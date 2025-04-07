<template>
  <v-container class="inner">
    <!-- 타이틀 -->
    <div class="tit-wrap column">
      <strong class="title-4-bd">앱 업데이트 후 어떤 후속 조치가 있을 예정인가요? 결과는 어떻게 공유되나요?</strong>
      <div class="info">
        <div class="details-bar">
          <span>앱 사용시 불편사항</span>
          <span>앱 이름 : 육묘대장</span>
        </div>
        <span>2024.06.13</span>
      </div>
    </div>

    <!-- 상세내용 -->
    <v-sheet class="w-box">
      <div class="editor-content">
        <p>안녕하세요, 총무알리미 사용자 여러분.</p>
        <br>
        <p>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
        <br>
        <p>
          1. 사용자 인터페이스(UI) 개선
          앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
          메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
        </p>
        <br>
        <p>
          2. 알림 기능 강화
          알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
          중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
        </p>
        <br>
        <p>
          3. 사용자 의견 반영
          사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
          개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
          이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
        </p>
        <br>
        <p>감사합니다.</p>
        <p>총무알리미 팀 드림</p>
      </div>
    </v-sheet>
    <!-- 답글 영역 -->
    <v-sheet class="w-box">
      <div class="tit-wrap">
        <strong class="text-2-md">관리자</strong>
        <span class="date">2024.06.13 11:05</span>
      </div>
      <v-divider color="secondary" />
      <div class="editor-content">
        <p>관리자입니다.</p>
        <br>
        <p>항상 총무알리미를 이용해 주셔서 감사합니다. 사용자 여러분의 소중한 의견을 반영하여, 앱의 기능을 개선하고자 다음과 같은 업데이트를 진행하였습니다.</p>
        <br>
        <p>
          1. 사용자 인터페이스(UI) 개선
          앱의 전반적인 디자인을 현대적이고 직관적으로 개선하였습니다.
          메뉴 구조를 재정비하여 원하는 기능에 더 쉽게 접근할 수 있도록 하였습니다.
        </p>
        <br>
        <p>
          2. 알림 기능 강화
          알림 설정을 세분화하여, 사용자 맞춤형 알림을 받을 수 있도록 개선하였습니다.
          중요한 공지사항에 대한 우선 알림 기능을 추가하였습니다.
        </p>
        <br>
        <p>
          3. 사용자 의견 반영
          사용자 여러분의 피드백을 바탕으로 자주 요청된 기능을 추가하였습니다.
          개선 사항에 대한 의견을 언제든지 주시면, 지속적으로 반영하도록 하겠습니다.
          이번 업데이트를 통해 더욱 편리하고 유용한 총무알리미 앱이 되기를 바랍니다. 앞으로도 많은 관심과 사랑 부탁드립니다.
        </p>
        <br>
        <p>감사합니다.</p>
        <p>총무알리미 팀 드림</p>
      </div>
      <v-sheet class="g-box mt-8">
        <p class="file-total">
          첨부파일 <span class="text-success">{{ fileList.length }}</span>
        </p>
        <ul
          class="file-list download"
        >
          <li
            v-for="(file, index) in fileList"
            :key="index"
          >
            <span
              class="file-download"
              @click="downloadFile(file)"
            >{{ file.name }}</span>
            <em>{{ file.size }}</em>
          </li>
        </ul>
      </v-sheet>
    </v-sheet>
    <!-- 하단 버튼 -->
    <div class="page-actions">
      <div class="pagination">
        <v-btn
          :ripple="false"
          icon="custom:arrow-prev"
          color="info"
          disabled
        />
        <v-btn
          :ripple="false"
          icon="custom:arrow-next"
          color="info"
        />
      </div>
      <v-spacer />

      <v-btn
        to="/MyPage/Post/ReportIssue"
        color="info"
        size="x-large"
      >
        목록가기
      </v-btn>
      <v-btn
        color="info"
        size="x-large"
      >
        수정
      </v-btn>
      <v-btn
        variant="outlined"
        color="warning"
        size="x-large"
      >
        삭제
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
  { name: "File_t_title_1.pdf", size: "10.3MB"},
  { name: "File_title_title_title_title_2.pdf", size: "10.3MB"},
  { name: "File_title_3565.pdf", size: "10.3MB"},
]);

const downloadFile = (files) => {
  console.log(files.name)
};
</script>
