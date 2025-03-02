/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/overrides.scss'
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
    VFooter: {
      height: '100',
    },
    VAppBar: {
      elevation: 0,
      flat: true,
    },
    VContainer: {
      fluid: true,
      maxWidth: '1280',
      style: [{
        display: 'flex',
        margin: '0 auto',
        padding: '0 20px',
      }]
    }
  }
})
