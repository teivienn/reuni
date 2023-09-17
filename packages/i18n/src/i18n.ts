import { I18n as I18nBase, TranslateOptions } from 'i18n-js';
import { useCallback } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';

import { getDeviceLocale } from './device';

type LocaleStore<L> = {
  locale: L;
  changeLocale: (name: L) => void;
};

type Options<L> = {
  locale: L;
  supportedLocales: L[];
  storage: StateStorage;
  /** use device settings for locale ios nad android 13+ @default true, @dev false  */
  useDeviceLocale?: boolean;
};

export const createTranslateHooks = <T extends string, L>(
  i18n: I18nBase,
  options: Options<L>,
) => {
  const _useLocaleStore = create(
    persist<LocaleStore<L>>(
      (set) => ({
        locale: options.locale,
        changeLocale: (locale) =>
          set(() => {
            i18n.locale = locale as string;
            return { locale };
          }),
      }),
      {
        name: '@lib/_use-locale-store',
        onRehydrateStorage: () => {
          const code = (getDeviceLocale<L>(options.useDeviceLocale) || '') as L;

          const deviceLocale = options.supportedLocales.includes(code)
            ? code
            : options.locale;

          return (state, error) => {
            if (error) {
              return { locale: options.locale };
            }

            const restoreLocale = state?.locale ? state.locale : deviceLocale;

            i18n.locale = restoreLocale as string;

            return {
              locale: restoreLocale,
            };
          };
        },
        storage: createJSONStorage(() => options.storage),
      },
    ),
  );

  const rehydrate = () => _useLocaleStore.persist.rehydrate();

  const useLocale = (): [L, (name: L) => void] =>
    _useLocaleStore((state) => [state.locale, state.changeLocale]);

  const useTranslate = () => {
    const t = useCallback(
      (scope: T, options?: TranslateOptions) => i18n.t(scope, options),
      [],
    );

    return t;
  };

  return {
    useLocale,
    rehydrate,
    useTranslate,
  };
};

type Primitive = string | number | boolean | undefined | null;
export type DeepKeyofTranslation<T> = T extends Primitive
  ? never
  : {
      [K in keyof T]: K extends string
        ? `${K}` | `${K}.${DeepKeyofTranslation<T[K]>}`
        : never;
    }[keyof T];
