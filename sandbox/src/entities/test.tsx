// import path from 'path';

import React from 'react';
import { Text } from 'react-native';

export const Test = () => {
  console.log(this, 'path');

  return <Text style={{ padding: 30 }}>hello</Text>;
};