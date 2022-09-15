import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import AddBlog from "../Pages/AddBlog";
import Blogs from "../Pages/Blogs";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Protected from "./Protected";

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginBtn = isLogin ? (
    <button
      onClick={() => {
        setIsLogin(!isLogin);
      }}
    >
      Log Out
    </button>
  ) : (
    <button
      onClick={() => {
        setIsLogin(!isLogin);
      }}
    >
      Log In
    </button>
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {loginBtn}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Add-blog"
            element={
              <Protected isLogin={isLogin}>
                <AddBlog />
              </Protected>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
