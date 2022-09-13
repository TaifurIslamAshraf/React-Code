import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

import { useParams, useLocation } from "react-router-dom";
// import { blogData } from "./data";

const Blog = () => {
  const { title } = useParams();

  const location = useLocation();

  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const blog = blogData.filter((blog) => blog.title === title);
  //   setBodyData(blog[0].body);
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, location.state.body.lastIndexOf())}</p>
    </div>
  );
};

export default Blog;
