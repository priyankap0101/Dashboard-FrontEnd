/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DataCount = ({ count }) => {
  return (
    <header>
      <h1>Welcome to Your Dashboard</h1>
      <h2>Total Data Count: {count}</h2>
    </header>
  );
};

export default DataCount;
