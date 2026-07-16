

export default function Navbar() {
  return (
        <nav className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-900">
          ShopHub
        </h1>

        <ul className="flex items-center gap-8 text-gray-700">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/products">Products</a>
          </li>

          <li>
            <a className="text-2xl" href="/cart">🛒</a>
          </li>
        </ul>
        </div>
        </nav>
  );
}