import { create } from 'zustand';

type UserStore = {
  name: string;
  onSerName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: '',
  onSerName: (name) => set((store) => ({ ...store, name })),
}));
