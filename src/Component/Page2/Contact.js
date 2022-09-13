import React from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis
        delectus debitis impedit ab excepturi doloremque laudantium, libero
        consequuntur enim totam ipsa quaerat ullam facilis quisquam obcaecati
        quibusdam iste sunt atque, eaque tempore. Iusto eligendi debitis labore
        deleniti quod. Eligendi voluptatum quas ipsa aperiam perspiciatis
        laudantium quo consequatur quos vitae deleniti. Dignissimos unde ipsum
        minima ratione eligendi assumenda delectus eos.
      </p>
      <button
        className="btn"
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
