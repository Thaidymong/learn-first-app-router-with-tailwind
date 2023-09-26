import { QUERY_WOMEN_PRODUCTS } from "@/src/graphql";
import { client } from "@/src/libs/apollo";

export default async function WomenProductComponent() {
  const data = await GetWomenProducts();
  console.log(data);
  return (
    <>
      <div className="container mx-auto py-4" style={{ paddingTop: "30px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.womenproduct.map((item: any) => {
            const { image, title, summary, description } = item;
            return (
              <>
                <a href="">
                  <div className="card w-96 bg-base-100 shadow-xl mx-3">
                    <figure style={{ height: "300px" }}>
                      <img src={image} alt="" />
                    </figure>
                    <div className="" style={{ padding: "10px" }}>
                      <h2 className="card-title pt-3">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <h5 className="card-title py-3">{summary}</h5>
                      <p>{description}</p>
                      <div className="card-actions justify-end pt-3">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function GetWomenProducts() {
  const { data } = await client.query({
    query: QUERY_WOMEN_PRODUCTS,
  });
  return data;
}
