import React from "react";
import { Provider } from "react-redux";
import ProductLists from "./components/ProductLists";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import Register from "./components/RegisterForm/Register";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductLists />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
