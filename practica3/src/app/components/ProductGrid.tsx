import { Product } from "../types";
import ProductCard from "./ProductCard";
import "./ProductGrid.css"

interface Props {
  products: Product[];
}

const ProductGrid=({ products }: Props) =>{
  return (
    <div className="gridContainer">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductGrid;