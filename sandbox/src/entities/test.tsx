import { useAsyncEffect } from '@reuni/hooks';
import React from 'react';
import { Text } from 'react-native';

import { Input } from '~/shared/ui/input';

export const Test = () => {
  useAsyncEffect(async () => {
    console.log('jello');
  }, []);

  return (
    <>
      <Text>{String('jsj')}</Text>
      <Input placeholder="hello" />
    </>
  );
};
