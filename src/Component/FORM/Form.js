import React, { useState } from "react";
import "../FORM/Form.bodul.css";

export default function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  // const { name, email, password } = user;

  // const nameHandleChange = (e) => {
  //   setUser({ name: e.target.value, email, password });
  // };
  // const EmailHandleChange = (e) => {
  //   setUser({ name, email: e.target.value, password });
  // };
  // const passwordHandleChange = (e) => {
  //   setUser({ name, email, password: e.target.value });
  // };

  const handleFormChang = (e) => {
    const fildName = e.target.name;

    // if (fildName === "name") {
    //   setUser({ name: e.target.value, email, password });
    // } else if (fildName === "email") {
    //   setUser({ name, email: e.target.value, password });
    // } else {
    //   setUser({ name, email, password: e.target.value });
    // }

    setUser({ ...user, [fildName]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1>From Handle</h1>

      <article>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              // onChange={nameHandleChange}
              onChange={handleFormChang}
              type="name"
              name="name"
              id="name"
              placeholder="Enter Your Full Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              // onChange={EmailHandleChange}
              onChange={handleFormChang}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              // onChange={passwordHandleChange}
              onChange={handleFormChang}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your password"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </article>
    </div>
  );
}
