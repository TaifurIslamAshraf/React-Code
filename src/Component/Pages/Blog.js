import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { blogData } from "../../data";

const Blog = () => {
  const { title } = useParams();

  const [bodyData, setBodyData] = useState("");
  console.log(bodyData.length);
  useEffect(() => {
    const blog = blogData.filter((blog) => blog.title === title);
    setBodyData(blog[0].body);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, blogData.lastIndexOf())}</p>
    </div>
  );
};

export default Blog;
