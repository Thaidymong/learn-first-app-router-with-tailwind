import ProductDetailComponent from "@/src/components/MenProducts/ProductsDetail";

export default async function MenProductsDetailScreen({ id }: { id: number }) {
  console.log("screen id: ", id);
  return (
    <>
      <ProductDetailComponent id={id} />
    </>
  );
}
