<template>
  <v-main class="error">
    <div class="wrap">
      <v-img
        :src="getImageUrl('error.png')"
        alt="error page"
        class="error-img"
      />
      <div class="error-title">
        <strong class="title-2-bd">{{ errorMessages.title }}</strong>
        <p class="title-5-bd">
          {{ errorMessages.subtitle }}
        </p>
      </div>
      <div
        class="error-context text-4"
        v-html="errorMessages.context"
      />
    </div>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue';

const errorType = ref('403');
const errorMessages = computed(() => {
  switch (errorType.value) {
    case '403':
      return {
        title: '403 Forbidden',
        subtitle: '죄송합니다. 접근이 거부되었습니다.',
        context: '요청하신 페이지 접근이 거부되었습니다.<br>입력하신 페이지의 주소가 정확한지 다시 한번 확인해주시기 바랍니다.'
      };
    case 'network':
      return {
        title: '네트워크 연결상태가 좋지 않습니다.',
        context: '네트워크 연결상태를 확인하거나 아래버튼을 선택하여 다시 접속을 시도해주시기 바랍니다.'
      };
    case '503':
      return {
        title: '503 Service Unavailable',
        subtitle: '서버에 문제가 발생했습니다.'
      };
    case '500':
      return {
        title: '500 Internal Server Error',
        subtitle: '서버가 요청을 처리하는 중에 문제가 발생했습니다.<br>서버 설정이나 코드에 문제가 있을 수 있습니다.'
      };
    default:
      return {
        title: '404 Not Found',
        subtitle: '죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.',
        context: '존재하지 않는 주소를 입력하셨거나,<br>요청하신 페이지의 주소가 변경 / 삭제되어 찾을 수 없습니다.'
      };
  }
});


const getImageUrl = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
</script>

<route lang="yaml">
meta:
  layout: AuthLayout
</route>
