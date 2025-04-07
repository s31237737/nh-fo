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
      두 번째 카드
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
</script>
