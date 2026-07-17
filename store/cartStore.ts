import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";
import { CartItem } from "@/services/cartService";

type CartStore = {
  cart: CartItem[];

  addToCart: (product: Product, quantity: number) => void;

  removeFromCart: (productId: number) => void;

  updateQuantity: (productId: number, quantity: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product, quantity) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity,
              },
            ],
          };
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity,
                }
              : item
          ),
        })),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.id !== productId
          ),
        })),
    }),
    {
      name: "cart",
    }
  )
);