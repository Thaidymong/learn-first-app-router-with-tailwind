import MenProductsDetailScreen from "@/src/screenPage/MenProducts/ProductDetailScreen";

export default function MenPageDetail({ params }: { params: { id: number } }) {
  return (
    <>
      <MenProductsDetailScreen id = {params.id} />
    </>
  );
}
