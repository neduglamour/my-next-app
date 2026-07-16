import Image from "next/image";
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import ProductGrid from "@/components/productGrid";
import Footer from "@/components/footer"
import Link from "next/link";
import { getProducts } from "@/services/productservice";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ProductGrid/>

    <div className="flex justify-center mt-10">
      <Link
        href="/products"
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        View More Products
      </Link>
    </div>

    <Footer />
    
    </>
  );
}
