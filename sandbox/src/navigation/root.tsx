import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Tabs } from './tabs';

const Stack = createNativeStackNavigator();

export const Root = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Tabs}
      name="tabs"
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
