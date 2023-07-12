import { Product } from "@/types/models";

const CART_KEY = "CART" as string;
export const all = (): Product[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
};
export const add = (product: Product,count:number) => {
  console.log(product)
  console.log(count)
  const currentCart=all()
    const i = currentCart.filter((item: Product) => item.id == product.id)[0] ?? {
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 0,
    }
    i.qty = count ? count : parseInt(i?.qty.toString()) + 1
    const index = currentCart.findIndex((obj: Product) => obj.id === i.id);
    if (index > -1) {
      currentCart[index] = i;
    } else {
      currentCart.push(i);
    }
    localStorage.setItem(CART_KEY, JSON.stringify(currentCart));
  }
 export const remove = (id: number): void => {
  const currentCart=all()
    const index = currentCart.findIndex((obj: Product) => obj.id === id);
    if (index > -1) {
      currentCart.splice(index, 1);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(currentCart));
  };
  export const clear = (): void => {
    localStorage.setItem(CART_KEY, JSON.stringify([]));
  };
  export default { remove, add,all,clear };