import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/Blogs">
        Blogs
      </NavLink>
      <NavLink className="nav-link" to="/Add-blog">
        AddBlog
      </NavLink>
    </nav>
  );
};

export default Navbar;
