import { api } from "./axios"





export const getAllCountries= async ()=>{
    const response= await api.get(`https://restcountries.com/v3.1/region/europe`);
    return response.data;
}