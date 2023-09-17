import { createTranslateHooks, DeepKeyofTranslation } from '@reuni/i18n';
import { I18n } from 'i18n-js';

export enum Locale {
  En = 'en',
  Ru = 'ru',
}

const en = {
  current_locale: 'Current Locale: ',
  change_Locale: 'Change Locale: ',
};

const ru = {
  current_locale: 'Текущий язык: ',
  change_Locale: 'Сменить язык: ',
};

export type Translations = DeepKeyofTranslation<typeof en> &
  DeepKeyofTranslation<typeof ru>;

const i18n = new I18n(
  { [Locale.En]: en, [Locale.Ru]: ru },
  { locale: Locale.En, enableFallback: false, defaultLocale: Locale.En },
);

export const { useTranslate, useLocale, rehydrate } = createTranslateHooks<
  Translations,
  Locale
>(i18n, {
  supportedLocales: [Locale.En, Locale.Ru],
  locale: Locale.En,
  storage: {
    getItem: () => '',
    setItem: () => {},
    removeItem: () => {},
  },
});

export type TranslateFunction = ReturnType<typeof useTranslate>;
