import MainPageProductDetailScreen from "@/src/screenPage/HomePage/MainPageProductDetailScreen";

export default function MainPageProductDetail({ params }: { params: { id: number } }) {
  return(
    <>
    <MainPageProductDetailScreen id = {params.id}/>
    </>
  )
}
