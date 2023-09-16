import React from 'react';
import { View } from 'react-native';

import { Test } from '../entities/test';

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 100 }}>
      <Test />
    </View>
  );
};
