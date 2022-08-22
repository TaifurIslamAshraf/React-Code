import React, { useState } from "react";
import "../FORM/Form.bodul.css";

export default function Form() {
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const handleFormChange = (e) => {
    const inputName = e.target.name;
    setValue({ ...value, [inputName]: e.target.value });
  };

  const onSubmitHandle = (e) => {
    console.log(value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Form handle</h1>
      <article>
        <form action="" onSubmit={onSubmitHandle}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={handleFormChange}
              type="name"
              name="name"
              id="name"
              placeholder="Enter Your Full Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Eamil:</label>
            <br />
            <input
              onChange={handleFormChange}
              type="Email"
              name="Email"
              id="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">password:</label>
            <br />
            <input
              onChange={handleFormChange}
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
