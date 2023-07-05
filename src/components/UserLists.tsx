/* eslint-disable jsx-a11y/img-redundant-alt */
// components/UserList.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getProducts, selectProducts } from "../store/productSlice";
import { AppDispatch } from "../store";

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    products && (
      <div>
        <h2>Product List</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-3 flex-wrap gap-y-9">
          {products.map((product) => (
            <div key={product.id}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="w-auto h-96 flex flex-col justify-center">
                  <img
                    className="p-12 w-60 mx-auto rounded-t-lg"
                    src={product.image}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5 h-32 flex flex-col justify-end">
                  <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </div>
                  <div className="flex items-center mt-2.5 mb-5"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default UserList;
