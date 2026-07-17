"use client";

import Image from "next/image";
import { CartItem } from "@/services/cartService";
import { useCartStore } from "@/store/cartStore";

type CartItemsProps = {
  cart: CartItem[];
  // setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default function CartItems({
  cart
}: CartItemsProps) {

  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);


  function handleIncrease(item: CartItem) {
    updateQuantity(item.id, item.quantity + 1);
    // setCart(getCart());
  }

  function handleDecrease(item: CartItem) {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
    // setCart(getCart());
  }

  function handleRemove(id: number) {
    removeFromCart(id);
    // setCart(getCart());
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-3">
          Your cart is empty
        </h2>

        <p className="text-gray-500">
          Add some products to continue shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center gap-6 border rounded-xl p-6 shadow-sm"
        >
          <div className="relative w-32 h-32">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${item.price}
            </p>

            <p className="text-gray-600 mt-2">
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => handleDecrease(item)}
              className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
            >
              −
            </button>

            <span className="text-lg font-semibold w-8 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => handleIncrease(item)}
              className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
            >
              +
            </button>

          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg cursor-pointer"
          >
            Remove
          </button>

        </div>
      ))}
    </div>
  );
}