import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// import { useParams } from "react-router-dom";
// import { blogData } from "./data";

import { useLocation } from "react-router-dom";

const Blog = () => {
  // const { title } = useParams();
  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const blog = blogData.filter((blog) => blog.title === title);
  //   setBodyData(blog[0].body);
  // }, []);

  const location = useLocation();

  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, location.state.body.lastIndexOf())}</p>
    </div>
  );
};

export default Blog;
