import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import vi from './locales/vi.json';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: process.env.MIX_VUE_APP_I18N_LOCALE || "vi",
    fallbackLocale: process.env.MIX_VUE_APP_I18N_LOCALE || "vi",
    messages: {
        en,
        vi,
    },
})

export default i18n;
