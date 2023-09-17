import { useUserStore } from './stores';

export const user = {
  useUserStore,
  displayFullName: (name: string, surname: string) => `${name} ${surname}`,
};
