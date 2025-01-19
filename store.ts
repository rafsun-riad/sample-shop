import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {},
  userLogin: (data) => {
    console.log("store", data);
    set({ user: data });
  },
}));

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const foundItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (foundItem) {
        return { cart: [...state.cart] };
      }
      return {
        cart: [...state.cart, item],
      };
    }),
  increaseQuantity: (id) =>
    set((state) => {
      const foundItem = state.cart.find((cartItem) => cartItem.id === id);
      if (foundItem) {
        return {
          cart: [
            ...state.cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          ],
        };
      }
      return { cart: [...state.cart] };
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const foundItem = state.cart.find((cartItem) => cartItem.id === id);
      if (foundItem) {
        return {
          cart: [
            ...state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity < 1 ? 1 : item.quantity - 1,
                  }
                : item
            ),
          ],
        };
      }
      return { cart: [...state.cart] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
