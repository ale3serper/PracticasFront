"use client";

import { useEffect, useState } from "react";
import { Product } from "./types";
import { getProducts } from "./lib/api/allProducts";
import SectionContainer from "./components/SectionContainer";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import "./page.css"


const Home=() =>{
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtro = products.filter((e) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SectionContainer>
      <div className="titulo">
        <h1>TIENDA ONLINE </h1>
      </div>
      <SearchBar setSearchQuery={setSearchQuery} />

      <p className="resultados">
        {filtro.length} resultados encontrados
      </p>

      <ProductGrid products={filtro} />
    </SectionContainer>
  );
}

export default Home;