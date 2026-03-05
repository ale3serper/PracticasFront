'use client'


import { useEffect, useState } from "react";
import { Country } from "./types";
import { useRouter } from "next/navigation";
import { getCountryByName } from "./lib/api/countryByName";
import { getAllCountries } from "./lib/api/allCountries";
import CountryCard from "./components/countryCard";
import Link from "next/link";
import "./page.css"


export default function Home() {
  const[paises, setPaises]= useState<Country[]|null>([]);
  
  const[loading, setLoading]= useState(false);
  const[error, setError]=useState<string|null>(null);
  const[search, setSearch]= useState<string>("");
  const[name, setName]= useState<string>("");
  const router = useRouter();

 

   useEffect(()=>{

    setLoading(true);
    setError(null);

    const cargarPaises =async ()=>{
      const data= await getAllCountries();
      setPaises(data);
    }

     cargarPaises();
     setLoading(false)

   },[]);

   const paisesFiltrados = paises?.filter((pais) =>
  pais.name.common.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="mainContainer">
      <h1 className="titulo">PAISES DE EUROPA</h1>
      <div className="contenedorBuscar">
        <input className="buscar"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <div className="botonesContainer">
           <button className="botonBuscar"
            onClick={()=>{setSearch(name)}}>Buscar</button>
          
          <button className="botonBorrar"
            onClick={()=>{
              setSearch("")
              setName("")
              }}>Atras</button>

            
        </div>
      </div>

      {error && <p>El error es: {error}</p>}
      {loading && <p>Cargando...</p>}

      
      <div className="countriesGrid">
       {paisesFiltrados?.map((pais) => (
         <Link key={pais.cca3} href={`/country/${pais.name.common}`}>
          <CountryCard pais={pais} />
        </Link>
       ))}
      </div>
       
    
      

    </div>
  );
}
