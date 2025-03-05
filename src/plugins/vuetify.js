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
import { aliases } from "vuetify/lib/iconsets/mdi-svg";
import { custom } from "@/utils/vuetifyIcons";
import { VTable } from "vuetify/components";

const nhFo = {
  dark: false,
  colors: {
    background: '#F3F4F9',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1E1E1E',
    secondary: '#0279FE',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#D32226',
    tertiary: '#1E1E1E',
    'on-primary':'#FEFEFE',
    'on-secondary':'#FEFEFE',
    'on-warning':'#FEFEFE',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'nhFo',
     themes: {
      nhFo,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
    },
    sets: {
      //  mdi,
      custom,
    },
  },
   aliases: {
    VTableRow: VTable,
  },
  display: {
    mobileBreakpoint: 'lg'
  },
  defaults: {
    VAppBar: {
      elevation: 0,
      flat: true,
      VBtnToggle: {
        VBtn: {ripple: false}
      }
    },
    VContainer: {
      fluid: true,
    },
    VBtn: {
      variant: "flat",
    },
    VDialog: {
      scrollable: true,
      width: "auto",
      VCard: {
        maxHeight: "872",
      },
      VCardTitle: {
        VBtn: {
          width: "32",
          height: "32",
          style: "font-size: 1.25rem",
        },
      },
      VCardActions: {
        VBtn: { variant: "flat" },
      },
    },
    VTextarea: {
      persistentPlaceholder: true,
      variant: "outlined",
    },
    VTextField: {
      clearable: true,
      clearIcon: "custom:clear",
      variant: "outlined",
      hideDetails: true,
    },
    VTableRow: {
      class: ["tbl-row"],
    },
  }
})
