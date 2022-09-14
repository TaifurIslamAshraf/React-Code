import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Blog from "./Component/Page2/Blog";
import Blogs from "./Component/Page2/Blogs";
import Contact from "./Component/Page2/Contact";
import Error from "./Component/Page2/Error";
import Home from "./Component/Page2/Home";
import Navbar from "./Component/Page2/Navbar";
import User from "./Component/Page2/User";

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
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
