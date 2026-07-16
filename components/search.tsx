
export default function SearchBar() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6">
        <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"
        />
    </section>
    
  );
}