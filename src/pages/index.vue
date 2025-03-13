<template>
  <v-main class="main">
    <v-container
      class="inner"
    >
      <div class="user">
        김농협님
        안녕하세요.
      </div>
      <div class="content">
        <v-row>
          <v-col
            v-for="(item, index) in quickLinks"
            :key="index"
            :md="6"
            :sm="12"
          >
            <v-card
              class="quick-links"
              :subtitle="item.subtitle"
              :title="item.title"
              :color="item.color"
              :to="item.to"
            >
              <template #append>
                <v-icon
                  size="54"
                  :icon="item.appendIcon"
                />
              </template>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Footer />
  </v-main>
</template>

<script setup>
import { inject } from 'vue';
const isMobile = inject('isMobile');
const isTablet = inject('isTablet');
const isDesktop = inject('isDesktop');

const quickLinks = ref([
  {
    appendIcon: 'custom:faq',
    subtitle: '자주 묻는 질문을 찾아보세요.',
    title: '자주 묻는 질문',
    color: 'success',
    to: '',
  },
  {
    appendIcon: 'custom:app-guide',
    subtitle: '앱 사용방법이 궁금하신가요?',
    title: '앱 가이드',
    color: 'sky',
    to: '',
  },
]);
</script>
<route lang="yaml">
meta:
  layout: MainLayout
</route>
