import { api } from "./axios";



export const getProducts = async () => {
  const res = api.get("https://dummyjson.com/products");
  return (await res).data.products
};