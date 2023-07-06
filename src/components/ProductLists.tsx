/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts } from "../store/productSlice";
import { AppDispatch } from "../store";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductLists: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    products && (
      <div>
        <h2>Product List</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 p-3 sm:p-0 md:grid-cols-3 flex-wrap gap-y-9 gap-x-2">
          {products.map((product) => (
            <div key={product.id}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl">
                <div className="w-full h-44 sm:h-96 flex flex-col justify-center">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="p-5 w-32 sm:w-52 mx-auto rounded-t-lg"
                      src={product.image}
                      alt="product image"
                    />
                  </Link>
                </div>
                <div className="px-3 sm:px-5 pb-5 h-40 sm:h-48 flex flex-col justify-between">
                  <div>
                    <h5 className="text-[11px] sm:text-xl font-semibold tracking-tight text-gray-900 ">
                      {product.title}
                    </h5>
                  </div>
                  <div className="h-full flex items-end pb-3">
                    <Rating
                      name="half-rating-read"
                      defaultValue={product?.rating?.rate || 0}
                      precision={0.1}
                      readOnly
                    />
                    <span className="sm:ml-2">({product.rating.count})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-3xl font-bold text-gray-900 ">
                      ${product.price}
                    </span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[9px] px-2 py-2 sm:text-sm sm:px-5 sm:py-2.5 text-center ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductLists;
