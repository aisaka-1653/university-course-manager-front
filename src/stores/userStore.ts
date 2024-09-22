import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
  userId: number | null;
  setUser: (userId: number) => void;
  removeUser: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      userId: null,
      setUser: (userId: number) => set({ userId }),
      removeUser: () => set({ userId: null }),
    }),
    {
      name: "user-id",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
