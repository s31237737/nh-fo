/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/reset.scss'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  display: {
    mobileBreakpoint: 'sm'
  },
  defaults: {
    VContainer: {
      fluid: true,
      maxWidth: '1280',
    },
    VFooter: {
      height: '100',
    }
  }
})
