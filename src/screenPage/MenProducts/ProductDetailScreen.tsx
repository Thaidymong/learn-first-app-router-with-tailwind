import ProductDetailComponent from "@/src/components/Products/ProductsDetail";

export default async function MenProductsDetailScreen({ id }: { id: number }) {
  return (
    <>
      <ProductDetailComponent id={id} />
    </>
  );
}
