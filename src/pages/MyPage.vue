<template>
  <v-container class="inner">
    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
    >

    <div class="content">
      <section class="cropper-area">
        <div class="img-cropper">
          <vue-cropper
            ref="cropper"
            :aspect-ratio="16 / 9"
            :src="imgSrc"
            preview=".preview"
          />
        </div>
        <div class="actions">
          <a
            href="#"
            role="button"
            @click.prevent="cropImage"
          >Crop</a>

          <a
            href="#"
            role="button"
            @click.prevent="showFileChooser"
          >Upload Image</a>
        </div>

        <textarea v-model="data" />
      </section>
      <section class="preview-area">
        <p>Preview</p>
        <div class="preview" />
        <p>Cropped Image</p>
        <div class="cropped-image">
          <img
            v-if="cropImg"
            :src="cropImg"
            alt="Cropped Image"
          >
          <div
            v-else
            class="crop-placeholder"
          />
        </div>
      </section>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

// Refs
const cropper = ref(null);
const input = ref(null);

// Reactive state
const imgSrc = ref("/assets/images/berserk.jpg");
const cropImg = ref("");
const data = ref(null);

// Methods
const cropImage = () => {
  cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
};


const setImage = (e) => {
  const file = e.target.files[0];

  if (file.type.indexOf("image/") === -1) {
    alert("Please select an image file");
    return;
  }

  if (typeof FileReader === "function") {
    const reader = new FileReader();

    reader.onload = (event) => {
      imgSrc.value = event.target.result;
      cropper.value.replace(event.target.result);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Sorry, FileReader API not supported");
  }
};

const showFileChooser = () => {
  input.value.click();
};


</script>

<style lang="css" scoped>


.content {
  display: flex;
  justify-content: space-between;
}

.cropper-area {
  width: 614px;
}

.actions {
  margin-top: 1rem;
}

.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062cc;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

textarea {
  width: 100%;
  height: 100px;
}

.preview-area {
  width: 307px;
}

.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}

.preview-area p:last-of-type {
  margin-top: 1rem;
}

.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}

.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}

.cropped-image img {
  max-width: 100%;
}
</style>
