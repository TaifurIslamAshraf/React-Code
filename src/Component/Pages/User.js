import React from "react";
import { useState } from "react";

// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const User = () => {
  // const { userid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, id: age });
    setAge("");
    setName("");
  };
  return (
    <div>
      <h1>User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <button type="submit">Find User</button>
      </form>

      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1>
      <h1>{searchParams.get("age")}</h1>
    </div>
  );
};

export default User;
