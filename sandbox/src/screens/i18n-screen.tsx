import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Locale, useLocale, useTranslate } from '~/lib/i18n';

export const I18nScreen = () => {
  const [locale, changeLocale] = useLocale();
  const t = useTranslate();

  return (
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
});
