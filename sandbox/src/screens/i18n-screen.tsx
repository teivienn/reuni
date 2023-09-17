import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { Locale, useLocale, useTranslate } from '~/lib/i18n';
import { Code } from '~/shared/ui/code';

const code = `
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
`;

export const I18nScreen = () => {
  const [locale, changeLocale] = useLocale();
  const t = useTranslate();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row_justify}>
          <View style={styles.row}>
            <Ionicons color="blue" name="language-outline" size={20} />
            <Text style={styles.label}>{t('current_locale')}</Text>
          </View>
          <Text style={styles.locale}>{locale}</Text>
        </View>

        <View style={styles.space} />

        <View style={styles.row_justify}>
          <View style={styles.row}>
            <Ionicons color="blue" name="language-outline" size={20} />
            <Text style={styles.label}>{t('change_Locale')}</Text>
          </View>
          <Switch
            value={locale === Locale.En}
            onChange={() => {
              changeLocale(locale === Locale.En ? Locale.Ru : Locale.En);
            }}
          />
        </View>
      </View>
      <View style={styles.code}>
        <Code code={code} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  space: {
    height: 10,
  },
  row_justify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locale: {
    color: 'blue',
    fontSize: 18,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  code: {
    margin: 10,
  },
});
