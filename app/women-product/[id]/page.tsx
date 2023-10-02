import WomenProductsDetailScreen from "@/src/screenPage/WomenProduct/WomenProductsDetailScreen";

export default function WomenProductsDetail({
  params,
}: {
  params: { id: number };
}) {
  return (
    <>
      <WomenProductsDetailScreen id={params.id} />
    </>
  );
}
