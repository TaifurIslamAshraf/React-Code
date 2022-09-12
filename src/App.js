import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Component/Pages/Navbar/Blogs";
import Contact from "./Component/Pages/Navbar/Contact";
import Error from "./Component/Pages/Navbar/Error";
import Home from "./Component/Pages/Navbar/Home";
import Navbar from "./Component/Pages/Navbar/Navbar";
import Blog from "./Component/Pages/Navbar/Blog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:title" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
