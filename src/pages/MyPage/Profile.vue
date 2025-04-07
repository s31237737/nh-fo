<template>
  <div class="my-profile">
    <v-sheet>
      <v-btn
        to="/MyPage/Profile"
        size="100"
        icon="custom:edit-blue"
        class="edit-profile"
      >
        <v-avatar size="100">
          <v-img
            src="@/assets/images/img_avatar01.jpg"
            alt="profile"
          />
        </v-avatar>
      </v-btn>
    </v-sheet>

    <v-sheet>
      <div class="page-actions">
        <v-btn
          color="primary"
          size="x-large"
        >
          변경사항 저장
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
</script>
