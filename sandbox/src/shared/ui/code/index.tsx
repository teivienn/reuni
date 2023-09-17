import React from 'react';
import { useColorScheme } from 'react-native';
import CodeHighlighter from 'react-native-code-highlighter';
import {
  atomOneLight,
  atomOneDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { styles } from './styles';

interface CodeProps {
  code: string;
}

export const Code = ({ code }: CodeProps) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <CodeHighlighter
      customStyle={styles.code}
      hljsStyle={isDark ? atomOneDark : atomOneLight}
      language="typescript"
      scrollViewProps={{
        contentContainerStyle: [
          styles.container,
          !isDark && { backgroundColor: '#3556eb21' },
        ],
        overScrollMode: 'never',
        bounces: false,
      }}
    >
      {code}
    </CodeHighlighter>
  );
};
