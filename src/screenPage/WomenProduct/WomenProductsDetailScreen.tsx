import WomenProductDetailComponent from "@/src/components/Women/WomenDetail";

export default function WomenProductsDetailScreen({ id }: { id: number }) {
  return (
    <>
      <WomenProductDetailComponent  id={id}/>
    </>
  );
}
