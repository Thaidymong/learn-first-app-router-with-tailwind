import MenProductsDetailScreen from "@/src/screenPage/MenProducts/ProductDetailScreen";

export default function MenPageDetail({ params }: { params: { id: number } }) {
  // console.log("men page ", params.id);
  return (
    <>
      <MenProductsDetailScreen id = {params.id} />
    </>
  );
}
