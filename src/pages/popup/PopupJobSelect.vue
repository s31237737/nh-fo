<template>
  <v-dialog
    :model-value="modelValue"
    class="popup"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <p>팝업</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        
        <!--// dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          초기화
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          선택완료
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  //import { ref } from 'vue';
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['update:modelValue']);
</script>
