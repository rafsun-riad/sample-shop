import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {},
  userLogin: (data) => {
    console.log("store", data);
    set({ user: data });
  },
}));
