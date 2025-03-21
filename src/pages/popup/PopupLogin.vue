<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-sm"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <strong class="title-5-bd">로그인 연장</strong>
        <p class="text-4">
          로그인 연장을 원하지 않으실 경우<br>
          자동으로 로그아웃됩니다.
        </p>
        <p
          class="text-4-bd mt-2"
        >
          남은 시간 : 60초
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="alert1 = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          로그인 연장
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>

const emit = defineEmits(['update:modelValue']);

</script>
