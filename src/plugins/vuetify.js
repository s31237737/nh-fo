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
    'surface-variant': '#FBFBFB',
    'on-surface-variant': '#4E4F52',
    primary: '#1E1E1E',
    secondary: '#E8EAF0',
    error: '#B00020',
    info: '#FFFFFF',
    success: '#0279FE',
    warning: '#D32226',
    'on-primary':'#FEFEFE',
    'on-secondary':'#1E1E1E',
    'on-success':'#FEFEFE',
    'on-warning':'#FEFEFE',
    pink: '#DB3174',
    purple: '#7B3BCD',
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
    mobileBreakpoint: 'md',
    thresholds: {
      sm: 0,
      md: 768,
      xl: 1280,
    },
  },
  defaults: {
    VAppBar: {
      elevation: 0,
      VBtnGroup: {
        VBtn: {
          ripple: false,
          slim: true,
          variant: "plain",
        }
      },
      VMenu: {
        offset: "18",
        contentClass: "popover",
        attach: ".v-app-bar",
        transition: "false",
        VToolbar: {
          height: "56",
          color: "transparent",
        },
        VListItem: {
          ripple: false,
          rounded: "lg",
        },
      },
    },
     VMenu: {
      location: "bottom center",
      offset: "4",
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
     VSelect: {
      persistentPlaceholder: true,
      variant: "outlined",
      hideDetails: true,
      menuIcon: "custom:select",
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
    VCheckbox: {
      baseColor: "#c2c2c2",
      hideDetails: true,
      falseIcon: "custom:checkbox-off",
      trueIcon: "custom:checkbox-on",
    },
    VRadio: {
      baseColor: "#c2c2c2",
      falseIcon: "custom:radio-off",
      trueIcon: "custom:radio-on",
    },
    VRadioGroup: {
      baseColor: "#c2c2c2",
      hideDetails: true,
    },
    VFileInput: {
      variant: "outlined",
      hideDetails: true,
      prependIcon: "",
      clearable: false,
      dirty: true,
      VField: {
        dirty: true
      },
    },
    VTableRow: {
      class: ["tbl-row"],
    },
    VSwitch: {
      color: "#555D69",
      inset: true,
      hideDetails: true,
    },
    VChip: {
      variant: "flat",
    },
  }
})
