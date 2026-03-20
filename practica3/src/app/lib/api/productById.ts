import { api } from "./axios";



export const getProduct = async (id: string) => {
  const res = api.get(`https://dummyjson.com/products/${id}`);
  return (await res).data
};