import "./page.css"
import SectionContainer from "@/app/components/SectionContainer";
import { getProduct } from "@/app/lib/api/productById";
import Link from "next/link";

interface Props {
  params:  {id: string };
}

const ProductDetail = async ({ params }: Props) => {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <SectionContainer>
      <Link href="/"> Volver</Link>

      <h1 className="productTitle">{product.title}</h1>

      <div className="productImage">
        {product.images.map((img: string) => (
          <img key={img} src={img} className="image" />
        ))}
      </div>

      <p>{product.description}</p>
      <p>Marca: {product.brand}</p>
      <p>Rating: {product.rating}/5</p>
      <p>Precio: {product.price}€</p>

      <p>Stock:{" "}
        {product.stock < 10 ? "Pocas unidades!" : product.stock}
      </p>

      {product.dimensions && (
        <p>
          Dimensiones: {product.dimensions.width} cm x{" "}
          {product.dimensions.height} cm x {product.dimensions.depth} cm
        </p>
      )}
    </SectionContainer>
  );
};

export default ProductDetail;