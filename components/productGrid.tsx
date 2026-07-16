import Image from "next/image";
import { getProducts } from "../services/productservice";

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <h2 className="mb-8 text-3xl font-bold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border bg-white p-4 shadow transition hover:shadow-lg"
          >
            <div className="relative h-52">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 line-clamp-2 font-semibold">
              {product.title}
            </h3>

            <p className="mt-2 text-2xl font-bold text-blue-600">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}