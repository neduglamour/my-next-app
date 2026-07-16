export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ShopHub
            </h2>

            <p className="text-gray-400 text-sm">
              Your one-stop destination for quality fashion,
              accessories and everyday essentials.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>

    
          {/* <div>
            <h3 className="font-semibold mb-4">
              Customer Service
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div> */}

        
          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400 text-sm">
              Email: support@shophub.com
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              Phone: +234 800 123 4567
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 text-xs mt-10 pt-6 text-center text-gray-400">
          © 2026 ShopHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
}