<template>
  <v-container
    class="inner"
  >
    <div class="tit-wrap">
      <strong class="title-4-bd">
        개인정보 처리 방침
      </strong>
    </div>
    <v-sheet class="privacy-index">
      <strong class="text-3-bd">Index</strong>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          class="privacy-index-item"
        >
          <span>{{ index + 1 }}</span>
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
        >
          {{ item.context }}
        </div>
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
//import { ref } from 'vue';
import { useGoTo } from 'vuetify'

const goTo = useGoTo();

let offsetValue = -92;
if (document.querySelector(".desktop")) {
  offsetValue = -92;
} else {
  offsetValue = -68;
}

const scrollToSection = (index) => {
  goTo(`#section${index + 1}`, {
    offset: offsetValue,
  });
};

const list = [
    {
      title: 'Item 1',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 2',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.\n\n안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 3',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 4',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 5',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 6',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 7',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 8',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 9',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
    {
      title: 'Item 10',
      context: '안녕하세요, 영업팀 여러분.\n\n회의는 2025년 1월 30일 화요일 오전 10시에 본사 3층 회의실에서 열리며, 모든 영업팀원이 참석해야 합니다.\n팀장과 각 팀의 리더는 필수 참석이며, 원격 참석이 필요한 경우 Zoom 링크를 별도로 공유할 예정입니다.\n\n이번 회의의 주요 목적은 지난 분기 영업 실적을 분석하고 향후 전략을 논의할 예정입니다.',
    },
  ]
</script>
