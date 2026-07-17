"use client";

import {useState } from "react";
import { Product } from "@/types/product";
// import { addToCart } from "@/services/cartService";
import { useCartStore } from "@/store/cartStore";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({product,}: ProductActionsProps) {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart)


  function handleAddToCart() {
    addToCart(product, quantity);
    
    setAdded(true);

    setTimeout(() => {
        setAdded(false)
    }, 1500);

    // alert("Product added to cart!");
  }

  return (
    <div>
        <div className="flex items-center gap-4 mb-5">
            <label className="font-semibold">
                Quantity:
            </label>

        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border rounded-lg px-3 py-2 cursor-pointer">

            {Array.from({ length: 20 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
                {index + 1}
            </option>
            ))}

        </select>
        </div>

        <button
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer">
        {added ? "Added" : "Add To Cart"}
        </button>

    </div>
  );
}