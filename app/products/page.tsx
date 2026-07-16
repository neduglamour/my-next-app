import ProductGrid from "@/components/productGrid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <>

    <Navbar />
    <main className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl text-center font-bold mb-3">
        All Products
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Browse our complete collection.
      </p>

      <ProductGrid />

    </main>

    <Footer />
    </>
  );
}