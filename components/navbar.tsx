"use client";

import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-900">
          ShopHub
        </h1>

        <ul className="flex items-center gap-8 text-gray-700">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/products">Products</a>
          </li>

          <li className="relative">
            <a className="text-2xl" href="/cart">
              🛒
            </a>

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}