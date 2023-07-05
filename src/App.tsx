import React from "react";
import { Provider } from "react-redux";
import UserList from "./components/UserLists";
import { store } from "./store";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
