import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit
        reprehenderit facere praesentium ut, molestiae laborum veniam, facilis,
        possimus ea ipsum rem repellat? Dolore sequi rem doloremque cumque!
        Eligendi eius nulla repellendus officiis cum ab expedita, error ipsam
        repudiandae, officia magnam recusandae molestias ducimus beatae, quod
        distinctio. Consequuntur, quidem? Aperiam?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum autem
        voluptates reiciendis doloribus, enim ad explicabo, sapiente veniam
        labore blanditiis eveniet cumque iure, animi deserunt! Voluptas
        provident ullam aut beatae.
      </p>
      <button
        className="btn error__h1"
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Homepage
      </button>
    </div>
  );
};

export default Contact;
