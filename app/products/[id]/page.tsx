import ProductActions from "@/components/productActions";
import { getProductsId } from "@/services/productservice";
import Image from "next/image";


export default async function ProductDetails({params,}: {params: Promise<{ id: string }>;}) {
    const {id} = await params;

    const product = await getProductsId(Number(id));

    if (!product) {
    return <h1>Product not found</h1>;
    }


return (
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">

      <div className="flex justify-center items-center bg-gray-100 rounded-xl p-8">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain h-[420px]"
        />
      </div>


      <div className="space-y-6">

        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
          {product.category}
        </span>

        <h1 className="text-4xl font-bold text-gray-900">
          {product.title}
        </h1>

        <div className="flex items-center gap-4">

          <span className="text-3xl font-bold text-blue-600">
            ${product.price}
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-gray-500">
            ({product.rating.count} Reviews)
          </span>

        </div>

        <div>
          <span className="text-green-600 font-semibold">
            ✓ In Stock
          </span>
        </div>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>

        {/* <div>

          <p className="font-semibold mb-2">
            Quantity
          </p>

          <div className="flex items-center gap-4">

            <button className="w-10 h-10 rounded-lg border text-xl">
              -
            </button>

            <span className="text-xl font-semibold">
              1
            </span>

            <button className="w-10 h-10 rounded-lg border text-xl">
              +
            </button>

          </div>

        </div> */}


        <div className="flex flex-wrap gap-4 pt-4">

          <ProductActions product={product} />

          <button className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
            ♡ Wishlist
          </button>

        </div>

      </div>

    </div>

  </div>
);
}