<template>
  <v-footer class="d-flex justify-center">
    <v-container>
      <v-row
        class="d-flex justify-space-between flex-sm-row flex-column"
      >
        <v-col>
          <router-link to="/">
            <v-img
              :width="130"
              alt="NH Nonghyup"
              src="@/assets/images/footer_logo.png"
            />
          </router-link>
        </v-col>
        <v-col class="text-right">
          <router-link to="/">
            <p>개인정보 처리 방침</p>
          </router-link>
          <p>© 2014 LG Electronics. All rights reserved.</p>
        </v-col>
      </v-row>
      <v-row>
        <p v-if="!isMobile">
          💻 PC 화면입니다!
        </p>
        <p v-else>
          📱 모바일 화면입니다!
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { inject } from 'vue';

const isMobile = inject('isMobile');
</script>
