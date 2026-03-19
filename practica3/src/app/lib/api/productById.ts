import { api } from "./axios";



export const getProduct = async (id: string) => {
  const res = await api.get(`https://dummyjson.com/products/${id}`);
  return res.data
};