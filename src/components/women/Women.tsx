import { QUERY_WOMEN_PRODUCTS } from "@/src/graphql";
import { client } from "@/src/libs/apollo";
import axios from "axios";

export default async function WomenProductComponent() {
  // const data = await GetWomenProducts();
  const {
    data: {
      data: { womenproduct },
    },
  } = await GetWomenProducts();
  return (
    <>
     <div className="container mx-auto py-4 pt-[40px]">
        <h1 className="flex text-center justify-center text-3xl font-bold pb-[30px] pt-[40px]">
          Women Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {womenproduct.map((item: any) => {
            const { title, summary, description, image } = item;
            return (
              <>
                <div className="card w-[90] bg-base-100 shadow-xl m-3 pt-[30px]">
                  <figure className="h-[300px]">
                    <img src={image} alt="" />
                  </figure>
                  <div className="p-[10px]">
                    <h2 className="card-title pt-3">
                      {title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h5 className="card-title py-3">{summary}</h5>
                    <p>{description}</p>
                    <div className="card-actions justify-end py-[30px]">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function GetWomenProducts() {
  // const { data } = await client.query({
  //   query: QUERY_WOMEN_PRODUCTS,
  // });
  // return data;

  const data = await axios.post("http://localhost:7000/dymong", {
    query: `
    query Womenproduct {
      womenproduct {
        id
        image
        summary
        title
        category_id
        created_at
        description
      }
    }
    `,
  });
  // console.log(data.data.data.womenproduct);
  return data;
}
