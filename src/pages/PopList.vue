<template>
  <div class="inner d-flex ga-3 flex-wrap">
    <!-- <popup /> -->

    <v-row>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="purple"
          @click="dialog1 = true"
        >
          popup
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="purple"
          @click="dialog2 = true"
        >
          popup-sm(alert)
        </v-btn>
      </v-col>
    </v-row>


    <!-- popup(default) -->
    <v-dialog
      v-model="dialog1"
      class="popup"
    >
      <v-card>
        <v-card-title>
          <p>팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀 팝업 타이틀</p>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog1 = false"
          />
        </v-card-title>
        <v-card-text>
          <div>
            <!-- dialog contents -->
            팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트 팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트<br>팝업텍스트
            <!--// dialog contents -->
          </div>
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

    <!-- popup-sm(alert) -->
    <v-dialog
      v-model="dialog2"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog2 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <v-icon icon="custom:complete" />
          <strong class="title-5-bd">sdfsdfd</strong>
          <p>
            등록하시겠습니까?
          </p>
        <!-- // dialog contents -->
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
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const dialog1 = ref(false);
  const dialog2 = ref(false);
</script>
