<template>
  <!-- 서브 탭 -->
  <div class="sub-tab">
    <v-tabs
      v-model="subTab"
      density="compact"
    >
      <v-tab
        v-for="(item, i) in subTabItem"
        :key="i"
        :ripple="false"
        :value="i"
      >
        {{ item.btn }}
      </v-tab>
    </v-tabs>
    <!-- 서브 탭 내용 -->
    <v-tabs-window
      v-model="subTab"
    >
      <v-tabs-window-item
        v-for="(item, i) in subTabItem"
        :key="i"
        :value="i"
        :transition="false"
      >
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="(panel, j) in item.panels"
            :key="j"
          >
            <v-expansion-panel-title>
              <p>{{ panel.title }}</p>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div
                class="editor-content"
              >
                <p class="mb-3">
                  <strong>{{ panel.appName }}</strong>
                </p>
                <div v-html="panel.content" />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
import { ref } from "vue";

const subTab = ref(null);
const subTabItem = [
  {
    btn: "앱 사용 질문",
    panels: [
      {
        title: "자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공 자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공 자주묻는질문 타이틀 최대 50자 노출 말줄임...처리 마킹 미제공",
        appName: "앱이름 노출",
        content: `
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
        `,
      },
      {
        title: "앱 설치 방법",
        appName: "앱이름 노출",
        content: "앱 설치는 앱스토어 또는 구글 플레이스토어에서 가능합니다.",
      },
      {
        title: "로그인 문제 해결",
        appName: "앱이름 노출",
        content: "로그인 문제는 비밀번호 재설정을 통해 해결할 수 있습니다.",
      },
    ],
  },
  {
    btn: "업스토어 이용 질문",
    panels: [
      {
        title: "상품 등록 방법",
        appName: "앱이름 노출",
        content: "상품 등록은 업스토어 관리자 페이지에서 가능합니다.",
      },
      {
        title: "결제 오류 해결",
        appName: "앱이름 노출",
        content: "결제 오류는 고객센터에 문의해 주세요.",
      },
    ],
  },
  {
    btn: "기타",
    panels: [
      {
        title: "문의 방법",
        appName: "앱이름 노출",
        content: "문의는 앱 내 고객센터를 통해 가능합니다.",
      },
      {
        title: "업데이트 내역",
        appName: "앱이름 노출",
        content: "업데이트 내역은 공지사항에서 확인할 수 있습니다.",
      },
    ],
  },
];
</script>
