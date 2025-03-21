<template>
  <v-row>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="purple"
        @click="alert1 = true"
      >
        popup-sm(alert)
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="purple"
        @click="dialog2 = true"
      >
        popup
      </v-btn>
    </v-col>
  </v-row>

  <!-- popup-sm(alert) -->
  <v-dialog
    v-model="alert1"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert1 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <v-icon icon="custom:complete" />
        <strong class="title-5-bd">alert title</strong>
        <p class="text-4">
          alert text<br>alert text
        </p>
        <!-- // dialog contents -->
      </v-card-text>               
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="alert1 = false"
        >
          cancel
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          primary
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- popup(default) -->
  <v-dialog
    v-model="dialog2"
    class="popup"
  >
    <v-card>
      <v-card-title>
        <p>팝업 타이틀</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialog2 = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        팝업텍스트
        <!--// dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="dialog2 = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          @click="alert1 = true"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue';

const alert1 = ref(false);
const dialog2 = ref(false);
</script>