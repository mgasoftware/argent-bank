import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./Home/Home";
import Login from "./Login/Login";
import User from "./User/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
