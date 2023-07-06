import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ratingType {
  count: number;
  rate: number;
}

interface Data {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: ratingType;
}

function Product() {
  const myParams = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    // Fetching a product details with given ID(myParams)
    axios(`${process.env.REACT_APP_END_POINT}/products/${myParams.id}`)
      .then((response) => setData(response.data))
      .catch((err) => alert(err));
  }, []);

  console.log(data);

  return (
    data && (
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="product-image"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={data.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-3">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {data.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <div className="mr-3">{data.rating.rate}</div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={data?.rating?.rate || 0}
                      precision={0.1}
                      readOnly
                    />
                    <span className="text-gray-600 ml-3">
                      {data?.rating?.count} Reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{data.description}</p>
                <div className="flex mt-3">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${data.price}
                  </span>
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Add to card
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default Product;
