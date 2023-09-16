import { DependencyList, useEffect } from 'react';

export function useAsyncEffect(
  effect: () => AsyncGenerator<void, void, void> | Promise<void>,
  deps?: DependencyList,
) {
  useEffect(() => {
    void effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
