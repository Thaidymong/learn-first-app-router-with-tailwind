import axios from "axios";

export default async function MainProducts() {
  const {
    data: {
      data: { products },
    },
  } = await GetAllProductsHome();
  return (
    <>
      <div className="container mx-auto py-4 pt-[40px]">
        <h1 className="flex text-center justify-center text-3xl font-bold pb-[30px] pt-[40px]">
          All Popular Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item: any) => {
            const { title, summary, description, image } = item;
            return (
              <>
                <div className="card w-[90] bg-base-100 shadow-xl m-3">
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
                    <div className="card-actions justify-end pt-3">
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

export async function GetAllProductsHome() {
  const data = await axios.post("http://localhost:7000/dymong", {
    query: `
        query products {
            products {
              id
              title
              summary
              description
              image
              created_at
              category_id
            }
          } 
        `,
  });
  //   console.log(data.data.data.products);
  return data;
}
