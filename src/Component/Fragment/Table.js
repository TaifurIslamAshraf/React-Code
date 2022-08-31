import React from "react";
import TableTd from "./TableTd";
import "./fragment.modiul.css";
const Table = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      <TableTd />
    </table>
  );
};

export default Table;
