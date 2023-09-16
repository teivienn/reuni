import { useRef } from 'react';

/**
 * Remove random unwanted double clicks from user
 * @param callback onPress function
 * @param delay duration is ms when next click will be ignored
 */
export function useOnDelayPress<A extends unknown[] = []>(
  callback?: (...args: A) => void,
  delay = 250,
) {
  const lastClickedTimeRef = useRef<number | undefined>();

  return (...args: A) => {
    if (lastClickedTimeRef?.current) {
      const now = Date.now();
      const delta = now - lastClickedTimeRef.current;
      if (delta < delay) {
        return;
      }
    }

    lastClickedTimeRef.current = Date.now();
    callback?.(...args);
  };
}
