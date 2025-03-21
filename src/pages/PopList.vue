<template>
  <div class="inner">
    <div class="mt-4 d-flex ga-3 flex-wrap w-75">
      <v-btn
        v-for="popup in popups"
        :key="popup.name"
        color="primary"
        @click="popOpen(popup.name)"
      >
        {{ popup.label }}
      </v-btn>
    </div>
  </div>

  <!-- popup -->
  <component
    :is="popup.component"
    v-for="popup in popups"
    :key="popup.name"
    v-model="popupVisible[popup.name]"
  />
</template>

<script setup>
import { ref,shallowRef  } from 'vue';

//import PopupAppType01 from '@/pages/popup/PopupAppType01.vue';
import PopupLogin from '@/pages/popup/PopupLogin.vue';
import PopupAppUsage01 from '@/pages/popup/PopupAppUsage01.vue';
import PopupAppUsage02 from '@/pages/popup/PopupAppUsage02.vue';
import PopupAppUsage03 from '@/pages/popup/PopupAppUsage03.vue';
import PopupOutPage from '@/pages/popup/PopupOutPage.vue';
import PopupDelete from '@/pages/popup/PopupDelete.vue';

  const popups = ref([
    //{ name: 'PopupAppType01', label: '앱 타입 설정', component: shallowRef(PopupAppType01) },
    { name: 'PopupLogin', label: '로그인 연장', component: shallowRef(PopupLogin) },
    { name: 'PopupAppUsage01', label: '앱 열기', component: shallowRef(PopupAppUsage01) },
    { name: 'PopupAppUsage02', label: '앱 사용 신청 안내', component: shallowRef(PopupAppUsage02) },
    { name: 'PopupAppUsage03', label: '앱 사용 신청 완료', component: shallowRef(PopupAppUsage03) },
    { name: 'PopupOutPage', label: '페이지 나가기', component: shallowRef(PopupOutPage) },
    { name: 'PopupDelete', label: '관리자 삭제 게시글', component: shallowRef(PopupDelete) },
  ]);

  const popupVisible = ref({
    //PopupAppType01: false,
    PopupLogin: false,
    PopupAppUsage01: false,
    PopupAppUsage02: false,
    PopupAppUsage03: false,
    PopupOutPage: false,
    PopupDelete: false,
  });

  const popOpen = (name) => {
    popupVisible.value[name] = true;
  };
</script>
