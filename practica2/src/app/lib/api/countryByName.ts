import { api } from "./axios"





export const getCountryByName= async(name: string)=>{
    const response= await api.get(`https://restcountries.com/v3.1/name/${name}`);
    return response;

}
