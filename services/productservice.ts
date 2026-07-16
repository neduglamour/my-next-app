import { Product } from "../types/product";
import products from "../data/product.json"

// const API_URL = "https://fakestoreapi.com/products";

// export async function getProducts(): Promise<Product[]> {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return response.json();
// }

export async function getProducts(): Promise<Product[]> {
  return products as Product[];
}