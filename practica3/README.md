Para poder ejecutar este programa primero necesitaras descargar axios: npm install axios

Para poder correr el programa debes usar: npm run dev


La organizacion de este programas de compras es la siguiente:

/src/app

    /components
        ProductCard.tsx
        ProductGrid.tsx
        SearchBar.tsx
        SectionContainer.tsx

    /lib/api
        allProducts.ts
        axios.ts
        productById.ts
    
    /product/[id]
        page.tsx
    
    /types
        index.ts
        product.ts
    
    page.tsx

El problema mas notorio que he tenido mientras programaba esta interfaz ha sido este:

interface Props {
  params:  {id: string };
}

const ProductDetail = async ({ params }: Props) => {
  const { id } = await params;

  const product = await getProduct(id);

Esta parte de codigo es del product/[id] y mi problema era que no habia añadido el await a la sexta linea, pero cuando lo ponia me decia que no era necesario. Asi he estado un rato hasta que finalmente he decidido dejarlo porque no crashea.

Tambien el allProducts me daba error al principio y era porque tenia que returnear (await res).data.products y solo returneaba hasta el .data. Esto he tenido que buscarlo para arreglarlo.
