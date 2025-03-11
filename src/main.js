/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App)

// 브라우저 리사이즈 시 모든 v-menu 닫기
function closeAllVuetifyMenus() {
  document.querySelectorAll(".v-menu").forEach((menu) => {

    const activatorId = menu.getAttribute("id");
    if (activatorId) {
      const activator = document.querySelector(`[aria-controls="${activatorId}"]`);
      if (activator) {
        activator.click();
      }
    }
  });
}
window.addEventListener("resize", closeAllVuetifyMenus);


registerPlugins(app)

app.component('QuillEditor', QuillEditor)
app.mount('#app')
