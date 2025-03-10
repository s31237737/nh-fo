<template>
  <v-row>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="purple"
        @click="dialog1 = true"
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
        popup-md
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        size="small"
        color="purple"
        @click="dialog3 = true"
      >
        popup-lg
      </v-btn>
    </v-col>
  </v-row>
  <v-dialog
    v-model="dialog1"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <span>Sm(312)얼럿</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialog1 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <p class="alert-txt">
          등록하시겠습니까?
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="dialog1 = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="dialog2"
    class="popup-md"
  >
    <v-card>
      <v-card-title>
        <span>popup-md</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialog2 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
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
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="dialog3"
    class="popup-lg"
  >
    <v-card>
      <v-card-title>
        <span>popup-lg</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="dialog3 = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          size="large"
          @click="dialog3 = false"
        >
          취소
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          size="large"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue';

const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
</script>
