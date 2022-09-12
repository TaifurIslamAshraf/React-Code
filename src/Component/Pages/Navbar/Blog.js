import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { blogData } from "../../../data";

const Blog = () => {
  const params = useParams();

  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blog = blogData.filter((blog) => blog.title === params.title);
    setBodyData(blog[0].body);
  }, []);

  return (
    <div>
      <h1>{params.title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(0, bodyData.lastIndexOf())}</p>
    </div>
  );
};

export default Blog;
