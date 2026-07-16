
export default function FilterPanel() {
  return (
    <section className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 px-6 md:flex-row">
      <select className="rounded-lg border border-gray-300 bg-white px-4 py-3">
        <option>All Categories</option>
      </select>

      <select defaultValue="" className="rounded-lg border border-gray-300 bg-white px-4 py-3">
        <option value="" disabled>Sort By</option>

        <option value="low-high">Price: Low to High</option>

        <option value="high-low">Price: High to Low</option>

        <option value="az">Name: A - Z</option>

        <option value="za">Name: Z - A</option>  
      </select>

    </section>
  );
}