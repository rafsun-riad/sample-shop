import { create } from "zustand";

// user store

function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    return JSON.parse(storedUser);
  } else {
    return null;
  }
}

export const useUserStore = create((set) => ({
  user: getStoredUser(),
  userLogin: (data) => {
    set(() => {
      localStorage.setItem("user", JSON.stringify(data));
      return { user: data };
    });
  },
  userLogout: () => {
    set(() => {
      localStorage.removeItem("user");
      return { user: null };
    });
  },
}));

// const storedUser = localStorage.getItem("user");
// if (storedUser) {
//   useUserStore.setState({ user: JSON.parse(storedUser) });
// } else {
//   useUserStore.setState({ user: null });
// }

// cart store
export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const foundItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (foundItem) {
        alert("Item is already in the cart");
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
