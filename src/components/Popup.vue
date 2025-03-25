<template>
  <v-row>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="success"
        @click="alertDefault = true"
      >
        sample-alert
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="success"
        @click="dialogDefault = true"
      >
        sample-popup
      </v-btn>
    </v-col>
  </v-row>


  <!-- popup(default) -->
  <v-dialog
    v-model="dialogDefault"
    class="popup"
  >
    <v-card>
      <v-card-title>
        <p>팝업 타이틀</p>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialogDefault = false"
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
          @click="dialogDefault = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          @click="alertDefault = true"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- popup-sm(alert) -->
  <v-dialog
    v-model="alertDefault"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alertDefault = false"
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
          @click="alertDefault = false"
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
</template>
<script setup>
import { ref } from 'vue';
//sample
const alertDefault = ref(false);
const dialogDefault = ref(false);
</script>