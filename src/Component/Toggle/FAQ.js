import React, { useState } from "react";

export default function FAQ(props) {
  const { title, desc } = props.faqs;

  const [toggle, setToggle] = useState(false);
  return (
    <article>
      <div className="title">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      <div className="desc">{toggle && <p>{desc}</p>}</div>
    </article>
  );
}
