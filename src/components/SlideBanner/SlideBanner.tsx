import axios from "axios";

export default async function Banner() {
  const {
    data: {
      data: { banners },
    },
  } = await GetAllSlideBanner();
  return (
    <>
      <div className="container mx-auto py-4">
        <div className="carousel rounded-box">
          <div className="carousel w-full">
            {banners.map((item: any) => {
              return (
                <div className="carousel-item " style={{ height: "270px" }}>
                  <img src={item.image} alt="Burger" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function GetAllSlideBanner() {
  const data = await axios.post(
    "http://localhost:7000/dymong",
    {
      query: `
            query products {
                banners {
                    id
                    image
                }
            }
          `,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
}
