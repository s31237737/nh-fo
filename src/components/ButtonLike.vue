<template>
  <v-btn
    variant="text"
    density="compact"
    :prepend-icon="isLiked ? 'custom:heart-active' : 'custom:heart'"
    color="quaternary"
    class="like-btn"
    :ripple="false"
    @click="toggleLike"
  >
    <span v-if="likes > 0">{{ likes }}</span>
  </v-btn>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialLiked: { type: Boolean, default: false },
  initialLikes: { type: Number, default: 0 },
})

const isLiked = ref(props.initialLiked)
const likes = ref(props.initialLikes)

function toggleLike() {
  isLiked.value = !isLiked.value
  likes.value += isLiked.value ? 1 : -1
}
</script>