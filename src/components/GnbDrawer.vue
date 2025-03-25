<template>
  <v-navigation-drawer
    style="z-index:3000"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card class="gnb-drawer">
      <v-card-title>
        <!-- 캘린더 -->
        <v-btn
          v-if="!isDesktop"
          icon="custom:calendar"
          density="comfortable"
        />
        <!-- 닫기 -->
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <v-list>
          <template
            v-for="(item, i) in menuItems"
            :key="i"
          >
            <!-- 하위 항목이 없으면 v-list-item로 표시 -->
            <v-list-item
              v-if="!item.submenu"
              :to="item.to"
              :title="item.title"
              color="success"
            />

            <!-- 하위 항목이 있으면 v-list-group로 표시 -->
            <v-list-group
              v-else
              v-bind="item.submenuProps"
            >
              <template #activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="item.title"
                />
              </template>

              <v-list-item
                v-for="(subItem, index) in item.submenu"
                :key="index"
                class="sub-menu"
                :to="subItem.to"
                :title="subItem.title"
              />
            </v-list-group>
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn
          size="large"
          color="primary"
          variant="flat"
          prepend-icon="custom:admin"
        >
          관리자
        </v-btn>
        <v-btn
          size="large"
          color="info"
          variant="flat"
          prepend-icon="custom:logout"
        >
          로그아웃
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-overlay
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      @click="emit('update:modelValue', false)"
    />
  </v-navigation-drawer>
</template>

<script setup>
import { inject, ref } from 'vue';

const isDesktop = inject('isDesktop');

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const menuItems = ref([
  { title: "About",  to: "About" },
  { title: "Apps",  to: "Apps" },
  {
    title: "새소식 및 도움말",
    submenu: [
      { title: "새소식", to: "News" },
      { title: "자주 묻는 질문", to: "" },
      { title: "Q&A", to: "" },
      { title: "앱가이드", to: "" }
    ],
  },
  { title: "커뮤니티",  to: "Community" },
  {
    title: "마이페이지",
    submenu: [
      { title: "프로필", to: "" },
      { title: "내 앱", to: "" },
      { title: "작성한 게시물", to: "" }
    ],
  },
  {
    title: "pub",
    submenu: [
      { title: "popup", to: "PopList" },
      { title: "guide", to: "Guide" },
    ],
  },
]);

</script>
