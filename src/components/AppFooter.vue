<template>
  <v-footer
    class="d-flex"
  >
    <router-link to="/">
      <v-img
        :width="130"
        alt="NH Nonghyup"
        src="@/assets/images/footer_logo.png"
      />
    </router-link>
    <v-spacer />
    <div>
      <router-link to="/">
        <p>
          개인정보 처리 방침
        </p>
      </router-link>

      <p class="w-100 text-center py-2 text-caption bg-grey-darken-4">
        © 2014 LG Electronics. All rights reserved.
      </p>
    </div>
  </v-footer>
</template>

<script setup></script>

<style scoped lang="sass"></style>
