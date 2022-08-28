import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [appHeading, setAppHeading] = useState("");
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw Error();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProducts(data);
        setAppHeading(<h1>Our Product List</h1>);
        setIsLoding(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoding(false);
        setProducts(null);
        setAppHeading("");
      });
  }, []);

  const productElement =
    products &&
    products.map((product) => {
      return (
        <div
          key={product.id}
          style={{
            width: "400px",
            backgroundColor: "aqua",
            padding: "20px",
            margin: "50px auto",
          }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img
            src={product.image}
            alt=""
            height={300}
            width={300}
            style={{ marginLeft: "40px" }}
          />
          <h3 style={{ textAlign: "center" }}>Price: {product.price}</h3>
        </div>
      );
    });

  let errorMessage = (
    <h3 style={{ textAlign: "center" }}>Fetching Is not succsess</h3>
  );
  const lodingMessage = (
    <h1 style={{ textAlign: "center" }}>Product Is Loding....</h1>
  );

  return (
    <div>
      {error && errorMessage}
      <h1 style={{ textAlign: "center", color: "green" }}>{appHeading}</h1>
      {productElement}
      {isLoding && lodingMessage}
    </div>
  );
};

export default FetchData;
