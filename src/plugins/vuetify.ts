import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
//DragScroll
import { VueDraggableNext } from 'vue-draggable-next';

// import { BLUE_THEME} from '@/theme/LightTheme';
import { BLUE_THEME } from '@/theme/LightTheme';
import {
    DARK_BLUE_THEME,
    DARK_AQUA_THEME,
    DARK_ORANGE_THEME,
    DARK_PURPLE_THEME,
    DARK_GREEN_THEME,
    DARK_CYAN_THEME
} from '@/theme/DarkTheme';

export default createVuetify({
    components: {
        ...components,
        draggable: VueDraggableNext
    },
    directives,

    // Vuetify 4 shrank the default breakpoints (md 960->840, lg 1280->1145,
    // xl 1920->1545, xxl 2560->2138). Restore the v3 values so existing
    // responsive layouts (and VContainer max-widths, which derive from
    // these) keep behaving as designed.
    // https://vuetifyjs.com/en/getting-started/upgrade-guide/#breakpoints
    display: {
        mobileBreakpoint: 'lg',
        thresholds: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            xxl: 2560
        }
    },


    theme: {
        defaultTheme: 'BLUE_THEME',
        themes: {
            BLUE_THEME,
            DARK_BLUE_THEME,
            DARK_AQUA_THEME,
            DARK_ORANGE_THEME,
            DARK_PURPLE_THEME,
            DARK_GREEN_THEME,
            DARK_CYAN_THEME
        }
    },
    defaults: {
        VCard: {
            rounded: 'md',
            elevation: 9
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VListItem: {
            minHeight: '45px'
        },
        VTooltip: {
            location: 'top'
        }
    }
});
