import FilterPanel from "../components/filter"
import SearchBar from "../components/search"

export default function Hero() {
    return(
        <main className=" bg-gray-100">
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
             <h1 className="text-5xl font-bold text-gray-900">
            E-Commerce Showcase
             </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Browse quality products, search by name, filter by category, and
            manage your shopping cart.
            </p>
            
            <SearchBar/>
            <FilterPanel/>
      
             </section>
        </main>

    );
}