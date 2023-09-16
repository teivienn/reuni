import { useAsyncEffect } from '@reuni/hooks';
import React from 'react';
import { Text } from 'react-native';

export const Test = () => {
  useAsyncEffect(async () => {
    console.log('jello');
  }, []);

  return <Text>{String('jsj')}</Text>;
};
