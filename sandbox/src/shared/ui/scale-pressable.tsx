import React, { PropsWithChildren, useCallback, useMemo } from 'react';
import {
  Animated,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';

interface ScalePressableProps {
  style?: StyleProp<ViewStyle>;
  config?: Partial<Animated.SpringAnimationConfig>;
  defaultScale?: number;
  activeScale?: number;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const ScalePressable: React.FC<
  PropsWithChildren<ScalePressableProps>
> = ({
  style,
  children,
  defaultScale = 1,
  activeScale = 0.9,
  onPress,
  onLongPress,
  config,
}) => {
  const animationScale = useMemo(() => new Animated.Value(1), []);

  const animateTo = useCallback(
    (value: number) => () => {
      Animated.spring(animationScale, {
        toValue: value,
        bounciness: 8,
        speed: 12,
        useNativeDriver: true,
        ...config,
      }).start();
    },
    [animationScale, config],
  );

  const transform = useMemo(() => {
    return {
      transform: [
        {
          scale: animationScale,
        },
      ],
    };
  }, [animationScale]);

  return (
    <TouchableWithoutFeedback
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={animateTo(activeScale)}
      onPressOut={animateTo(defaultScale)}
    >
      <Animated.View style={[transform, style]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};
