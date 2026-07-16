import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}

const CART_KEY = "cart";

export function getCart(): CartItem[] {
  const cart = localStorage.getItem(CART_KEY);

  if (!cart) {
    return [];
  }

  return JSON.parse(cart);
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product, quantity: number) {
  const cart = getCart();

  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  saveCart(cart);
}

export function updateQuantity(productId: number, quantity: number) {
  const cart = getCart();

  const item = cart.find((item) => item.id === productId);

  if (!item) return;

  item.quantity = quantity;

  saveCart(cart);
}

export function removeFromCart(productId: number) {
  const cart = getCart().filter(
    (item) => item.id !== productId
  );

  saveCart(cart);
}