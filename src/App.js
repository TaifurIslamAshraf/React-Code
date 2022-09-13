import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Component/Page2/Blogs";
import Contact from "./Component/Page2/Contact";
import Error from "./Component/Page2/Error";
import Home from "./Component/Page2/Home";
import Navbar from "./Component/Page2/Navbar";
import Blog from "./Component/Page2/Blog";

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
