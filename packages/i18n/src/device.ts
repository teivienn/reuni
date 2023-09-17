import { Platform } from 'react-native';

export const getCountry = (): string => {
  try {
    const localize = require('react-native-localize');
    return localize.getCountry();
  } catch (error) {
    return '';
  }
};

const ANDROID_VERSION = (Platform.constants as { Version: number })?.Version;

const IS_IOS = Platform.OS === 'ios';

export const IS_SYSTEM_LANGUAGE_SETTINGS = IS_IOS || ANDROID_VERSION >= 13;

export const getDeviceLocale = <L>(useDeviceLocale = !__DEV__) => {
  const code = getCountry().toLowerCase().substring(0, 2) as L;

  if (useDeviceLocale && IS_SYSTEM_LANGUAGE_SETTINGS) {
    return code;
  }

  return null;
};
