import React from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        dolorem sunt beatae commodi ea pariatur odit officia et laboriosam? Iure
        praesentium fuga quibusdam minus accusantium, odit facere eum dolorum
        molestiae itaque, voluptatum similique possimus nesciunt deleniti maxime
        voluptas sapiente fugiat.
      </p>

      <button className="btn" onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Contact;
