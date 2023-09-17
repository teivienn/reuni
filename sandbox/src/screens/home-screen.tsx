import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';

import { MenuCard } from '~/shared/ui/menu-card';

const collection = [
  {
    label: '@reuni/i18n',
    icon: <Ionicons color="blue" name="language-outline" size={20} />,
    route: 'i18n',
  },
];

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView>
      {collection.map((item) => (
        <MenuCard
          {...item}
          key={item.label}
          onPress={() => navigate(item.route)}
        />
      ))}
    </ScrollView>
  );
};
