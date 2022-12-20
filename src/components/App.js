import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import store from "../redux/store";
import Home from "./Home/Home";
import Login from "./Login/Login";
import User from "./User/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
