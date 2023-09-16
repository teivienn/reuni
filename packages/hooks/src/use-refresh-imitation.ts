import { useCallback, useMemo, useState } from 'react';

/** This hook makes refresh not faster than 0.5s,
 * so the client won't see refresh indicators disappear too fast
 */
export const useRefreshImitation = (
  refreshing?: boolean,
  onRefreshing?: () => unknown,
) => {
  const [refreshImitation, setRefreshImitation] = useState(false);

  const onRefreshImitation = useCallback(() => {
    onRefreshing?.();
    setRefreshImitation(true);
    setTimeout(() => setRefreshImitation(false), 500);
  }, [onRefreshing]);

  return useMemo(
    () => ({
      onRefreshImitation,
      refreshingImitation: refreshing || refreshImitation,
    }),
    [onRefreshImitation, refreshImitation, refreshing],
  );
};
