import ImagenCard from "@/app/components/ImagenCard";
import "./page.css";
import SectionContainer from "@/app/components/SectionContainer";
import { getProduct } from "@/app/lib/api/productById";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const ProductDetail = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <SectionContainer>
      <Link href="/" className="backLink">← Volver</Link>
      <div className="detailCard">
      <div className="detailContainer">
        
        
        <div className="imageSection">
           <ImagenCard images={product.images} />
            </div>

        
        <div className="infoSection">
          <h1 className="productTitle">{product.title}</h1>

          <p className="brand">Marca: {product.brand}</p>

          <p className="rating">⭐ {product.rating}/5</p>

          <p className="price">{product.price}€</p>

          <p className="stock">
            {product.stock < 10 ? "Pocas unidades!" : "En stock"}
          </p>

          <p className="description">{product.description}</p>

          {product.dimensions && (
            <p className="dimensions">
              {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
            </p>
          )}

      
        </div>

      </div>
      
      </div>
    </SectionContainer>
  );
};

export default ProductDetail;