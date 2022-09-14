import React, { useState } from "react";

// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const User = () => {
  // const { userid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age, userId: userId });
    setName("");
    setUserId("");
    setAge("");
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          placeholder="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          name="age"
          id=""
          placeholder="age"
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <input
          type="text"
          name="userId"
          id=""
          placeholder="userId"
          required
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Find User
        </button>
      </form>

      <h1>User page</h1>
      <h3>UserId: {searchParams.get("userId")}</h3>
      <h3>Name: {searchParams.get("name")}</h3>
      <h3>Age: {searchParams.get("age")}</h3>
    </div>
  );
};

export default User;
