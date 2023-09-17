import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeScreen } from '~/screens/home-screen';
import { UserScreen } from '~/screens/user-screen';

const Stack = createBottomTabNavigator();

export const Tabs = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={HomeScreen}
      name="home"
      options={{
        tabBarIcon: (props) => (
          <Feather color={props.color} name="home" size={22} />
        ),
      }}
    />
    <Stack.Screen
      component={UserScreen}
      name="user"
      options={{
        tabBarIcon: (props) => (
          <Feather color={props.color} name="user" size={22} />
        ),
      }}
    />
  </Stack.Navigator>
);
