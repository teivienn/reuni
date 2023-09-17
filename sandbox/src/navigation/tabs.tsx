import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen } from '~/screens/home-screen';
import { I18nScreen } from '~/screens/i18n-screen';
import { UserScreen } from '~/screens/user-screen';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [key: string]: any;
    }
  }
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const createScreen = (initial: string) => (
  <Stack.Navigator initialRouteName={initial}>
    {[
      { name: 'packages', component: HomeScreen, title: 'Packages' },
      { name: 'i18n', component: I18nScreen, title: '@reuni/i18n' },
    ].map(({ name, component, title }) => (
      <Stack.Screen
        component={component}
        key={name}
        name={name}
        options={{ title }}
      />
    ))}
  </Stack.Navigator>
);

const Packages = () => createScreen('packages');

export const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      component={Packages}
      name="packages_tab"
      options={{
        tabBarLabel: 'Packages',
        headerShown: false,
        tabBarIcon: (props) => (
          <Feather color={props.color} name="package" size={22} />
        ),
      }}
    />
    <Tab.Screen
      component={UserScreen}
      name="user"
      options={{
        tabBarIcon: (props) => (
          <Feather color={props.color} name="user" size={22} />
        ),
      }}
    />
  </Tab.Navigator>
);
