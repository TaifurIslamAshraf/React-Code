import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "./data";

const Blogs = () => {
  const truncetString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <section>
        {blogData.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncetString(body, 200)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More...
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
