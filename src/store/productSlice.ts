import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";

interface ratingType {
  count: number;
  rate: number;
}
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: ratingType;
}

interface UserState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  products: [],
  status: "idle",
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_END_POINT}/products`
    );
    return response.data;
  }
);

const prodcutsSlice = createSlice({
  name: "prodocuts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;

export default prodcutsSlice.reducer;
