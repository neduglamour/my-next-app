
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../services/productservice";

type ProductGridProps = {
  search?: string;
  category?: string;
  sort?: string;
};

export default async function ProductGrid({
  search = "",
  category = "",
  sort = "",
}: ProductGridProps) {
  const products = await getProducts();

  console.log("Products:", products.length);
console.log("Search:", search);
console.log("Category:", category);
console.log("Sort:", sort);

  let filteredProducts = products.filter((product) => {

    console.log("Product category:", product.category);
console.log("Selected category:", category);

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === ""||category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  switch (sort) {
    case "low-high":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "az":
      filteredProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "za":
      filteredProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;
  }

  console.log("Filtered:", filteredProducts.length);

  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <h2 className="mb-8 text-3xl font-bold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-lg border bg-white p-4 shadow transition hover:shadow-lg">
            <Link href={`/products/${product.id}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}