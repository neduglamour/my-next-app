"use client";

import { CartItem } from "@/services/cartService";

type CartSummaryProps = {
  cart: CartItem[];
};

export default function CartSummary({ cart }: CartSummaryProps) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  const totalProducts = cart.length;

  return (
    <div className="border rounded-xl shadow-md p-6 h-fit bg-white">
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

       <div className="flex justify-between mb-3">
        <span>Products</span>
        <span>{totalProducts}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Shipping Fee</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <hr className="my-5" />

      <div className="flex justify-between text-xl font-bold mb-6">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
}