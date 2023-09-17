import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Root } from '~/navigation/root';

export default () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="dark" />
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </>
  );
};
