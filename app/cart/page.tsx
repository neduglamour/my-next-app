"use client";

// import { useEffect, useState } from "react";
import { CartItem } from "@/services/cartService";
import CartItems from "@/components/cartItems";
import CartSummary from "@/components/cartSummary";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useCartStore } from "@/store/cartStore";


export default function cartPage() {

    const cart = useCartStore((state) => state.cart)

        // useEffect(() => {
        // setCart(getCart());
        // }, []);

    return (

        <>

        <Navbar/>
        <main className="max-w-7xl mx-auto px-6 py-10">
            {/* <h1 className="text-3xl font-bold mb-8">
            Shopping Cart
            </h1> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
            <CartItems
                cart={cart}
            />
            </div>

            <div>
            <CartSummary cart={cart} />
            </div>

        </div>
    </main>

    <Footer />

    </>
);

}
 