import Image from "next/image";
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import ProductGrid from "@/components/productGrid";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ProductGrid/>
    
    </>
  );
}
