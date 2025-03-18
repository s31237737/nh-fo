<template>
  <v-container
    class="inner"
  >
    <p class="page-title">
      <strong>개인정보 처리 방침</strong>
    </p>
    <v-sheet class="index">
      <strong class="text-3-bd">Index</strong>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          class="index-item"
        >
          <a
            href="javascript:void(0);"
            @click="scrollToSection(index)"
          >{{ item.title }}</a>
        </li>
      </ul>
    </v-sheet>
    <div 
      class="privacy-wrap"
    >
      <v-sheet
        v-for="(item, index) in list"
        :id="`section${index + 1}`" 
        :key="index"
        class="privacy"
      >
        <div class="privacy-title">
          {{ item.title }}
        </div>
        <div
          class="privacy-context"
          v-html="item.context"
        />
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
//import { ref } from 'vue';
import { useGoTo } from 'vuetify'

const goTo = useGoTo();
const scrollToSection = (index) => {
  console.log(index);
  goTo(`#section${index + 1}`, {
    offset:-56,
  }); // #section2 위치로 부드럽게 스크롤
};

const list = [
    {
      title: 'Item 1',
      context: '안녕하세요, 영업팀 여러분.<br><br>회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.<br>팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.<br><br>이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 2',
      context: '안녕하세요, 영업팀 여러분.<br><br>회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.<br>팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.<br><br>이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.<br><br>안녕하세요, 영업팀 여러분.<br><br>회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.<br>팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.<br><br>이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 3',
      context: '안녕하세요, 영업팀 여러분.<br><br>회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.<br>팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.<br><br>이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
  ]
</script>
   