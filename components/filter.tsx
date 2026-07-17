"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== "") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <section className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 px-6 md:flex-row">
      <select
        defaultValue={searchParams.get("category") || ""}
        onChange={(e) => updateQuery("category", e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3"
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      <select
        defaultValue={searchParams.get("sort") || ""}
        onChange={(e) => updateQuery("sort", e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3"
      >
        <option value="">
          Sort By
        </option>

        <option value="low-high">Price: Low to High</option>

        <option value="high-low">Price: High to Low</option>

        <option value="az">Name: A - Z</option>

        <option value="za">Name: Z - A</option>
      </select>
    </section>
  );
}