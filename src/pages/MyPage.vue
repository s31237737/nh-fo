<template>
  <div>
    <div class="header">
      <h2>Vue CropperJS</h2>
      <a href="https://github.com/Agontuk/vue-cropperjs">Github</a>
    </div>
    <hr>

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
  </div>
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

const flipX = () => {
  const dom = input.value;
  let scale = dom.getAttribute("data-scale");
  scale = scale ? -scale : -1;
  cropper.value.scaleX(scale);
  dom.setAttribute("data-scale", scale);
};

const flipY = () => {
  const dom = input.value;
  let scale = dom.getAttribute("data-scale");
  scale = scale ? -scale : -1;
  cropper.value.scaleY(scale);
  dom.setAttribute("data-scale", scale);
};

const getCropBoxData = () => {
  data.value = JSON.stringify(cropper.value.getCropBoxData(), null, 4);
};

const getData = () => {
  data.value = JSON.stringify(cropper.value.getData(), null, 4);
};

const move = (offsetX, offsetY) => {
  cropper.value.move(offsetX, offsetY);
};

const reset = () => {
  cropper.value.reset();
};

const rotate = (deg) => {
  cropper.value.rotate(deg);
};

const setCropBoxData = () => {
  if (!data.value) return;
  cropper.value.setCropBoxData(JSON.parse(data.value));
};

const setData = () => {
  if (!data.value) return;
  cropper.value.setData(JSON.parse(data.value));
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

const zoom = (percent) => {
  cropper.value.relativeZoom(percent);
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 1024px;
  margin: 0 auto;
}

input[type="file"] {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}

.header h2 {
  margin: 0;
}

.header a {
  text-decoration: none;
  color: black;
}

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
