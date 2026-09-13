import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RegBuyer, RegSeller } from "../constant/type/store.Type";

type UserRole = "buyer" | "seller";

interface AuthState {
  user: RegBuyer | RegSeller | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  setUser: (user: RegBuyer | RegSeller, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        role: null,
        isAuthenticated: false,

        setUser: (user, role) =>
          set({
            user,
            role,
            isAuthenticated: true,
          }),

        logout: () =>
          set({
            user: null,
            role: null,
            isAuthenticated: false,
          }),
      }),
      {
        name: "b2b-storage",
      },
    ),
  ),
);
