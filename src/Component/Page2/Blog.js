import React from "react";
import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { blogData } from "./data";

const Blog = () => {
  const location = useLocation();
  console.log(location);
  // const { title } = useParams();

  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const blog = blogData.filter((blog) => blog.title === title);
  //   setBodyData(blog[0].body);
  // }, []);

  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{location.state.body.slice(0, 600)}</p>
      <p>{location.state.body.slice(601, location.state.body.lastIndexOf())}</p>
    </div>
  );
};

export default Blog;
