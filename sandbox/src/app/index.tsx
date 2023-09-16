import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StatusBar as RNStatus } from 'react-native';

import { styles } from './styles';

import { Test } from '~/entities/test';

export default () => {
  return (
    <View
      style={[styles.container, { paddingTop: RNStatus.currentHeight || 30 }]}
    >
      <StatusBar translucent backgroundColor="transparent" style="dark" />
      <Test />
    </View>
  );
};
