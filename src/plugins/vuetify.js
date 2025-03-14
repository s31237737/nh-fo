/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/overrides.scss'
import '@/styles/index.scss'

// Composables
import { createVuetify } from 'vuetify'
import { aliases } from "vuetify/lib/iconsets/mdi-svg";
import { custom } from "@/utils/vuetifyIcons";
import { VTable } from "vuetify/components";

const nhFo = {
  dark: false,
  colors: {
    background: '#F3F4F9',
    surface: '#FEFEFE',
    'surface-bright': '#FEFEFE',
    'surface-light': '#EEEEEE',
    'surface-variant': '#FBFBFB',
    'on-surface-variant': '#4E4F52',
    primary: '#1E1E1E',
    secondary: '#E8EAF0',
    error: '#B00020',
    info: '#FEFEFE',
    success: '#0279FE',
    warning: '#D32226',
    pink: '#DB3174',
    purple: '#7B3BCD',
    gray: '#373839',
    coolgray: '#F3F4F9',
    quaternary:'#7F8186',
    white: '#FEFEFE',
    sky:"#68C4E8",
    'on-primary':'#FEFEFE',
    'on-secondary':'#1E1E1E',
    'on-success':'#FEFEFE',
    'on-warning':'#FEFEFE',
    'on-info':'#1E1E1E',
    'on-sky':'#FEFEFE',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 1,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FEFEFE',
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
      lg: 1280,
    },
  },
  defaults: {
    VNavigationDrawer: {
      width: "320",
      temporary: true,
      floating: true,
      scrim: false,
      VList: {
        openStrategy: "single",
        expandIcon: "custom:arrow-down",
        collapseIcon: "custom:arrow-up"
      },
      VListItem: {
        minHeight: "52",
        ripple: false,
        rounded: "lg"
      },
    },
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
        offset: "20",
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
      rounded: "lg",
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
      color: "success",
      inset: true,
      hideDetails: true,
    },
    VChip: {
      variant: "flat",
    },
    VCard: {
      variant: "flat",
    },
    VEmptyState: {
      icon:"custom:warning",
      bgColor:"white",
      size:"60",
    },
    VCarousel: {
      interval: 5000,
    }
  }
})
