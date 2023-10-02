import axios from "axios";

export default async function WomenProductDetailComponent({ id }: { id: number }) {
  const {
    data: {
      data: { womendetail },
    },
  } = await GetWomenProductDetail(id);
  const {image, description, summary } = womendetail;

  return (
    <>
      <div className="container mx-auto py-4 p-[30px]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src={image} alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">{summary}</h2>
            <p>{description}</p>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function GetWomenProductDetail(id: number) {
  const data = await axios.post(
    "http://localhost:7000/dymong",
    {
      query: `
      query Womendetail($womendetailId: Int!) {
        womendetail(id: $womendetailId) {
          id
          image
          summary
          title
          description
          created_at
          category_id
        }
      }
      `,
      variables: {
        womendetailId: Number(id)
      },
    },
    { headers: { "Content-Type": "application/json" } }
  );

  return data;
}
