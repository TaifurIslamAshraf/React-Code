import React, { useState } from "react";

import { Link } from "react-router-dom";

import { blogData } from "../../data";

const Blogs = () => {
  const [blogs, setblogs] = useState(blogData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 200)}</p>
              <Link to={title}>Learn More...</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
