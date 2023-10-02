import MainPageDetail from "@/src/components/MainProduct/MainPageDetail";

export default async function MainPageProductDetailScreen({id}: {id:number}) {
  return (
    <>
    <MainPageDetail id={id}/>
    </>
  );
}
