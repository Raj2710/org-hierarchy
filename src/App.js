import React from "react";
import "./styles.css";
import Chart from "./Chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        Employee Hierarchy
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}