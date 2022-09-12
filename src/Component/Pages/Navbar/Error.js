import React from "react";

import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="error__h1">404 Page Not Found !!!</h1>
      <button className="error__h1 btn" onClick={() => navigate("/")}>
        Go To Homepage
      </button>
    </div>
  );
};

export default Error;
