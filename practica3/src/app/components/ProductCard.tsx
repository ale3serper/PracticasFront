import Link from "next/link";
import { Product } from "../types";
import SectionContainer from "./SectionContainer";
import "./ProductCard.css"


interface Props {
  product: Product;
}

const ProductCard=({ product }: Props) =>{
  return (
    <SectionContainer>
      <img src={product.thumbnail} />
      <h3 className="cardTitle">{product.title}</h3>
      <span className="productCategory">
        {product.category}
      </span>
      <p>{product.price}€</p>

      <Link href={`/product/${product.id}`}>
        <button className="productBoton">
          Ver detalles
        </button>
      </Link>
    </SectionContainer>
  );
}

export default ProductCard;