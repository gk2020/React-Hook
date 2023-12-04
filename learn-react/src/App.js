import { Component, useState } from "react";
import "./App.css";
import Bgcolors from "./components/bgcolors.jsx";
import Card from "./components/Card.jsx";

function App() {
  let data = [
    {
      name: "Rishabh",
      message: "Rishabh Demo",
    },
    {
      name: "Shivam",
      message: "Shivam Demo",
    },
    {
      name: "Shashank",
      message: "Shashank Demo",
    },
  ];
  return (
    <>
      {data.map((item) => (
        <Card items={item} />
      ))}
    </>
  );
}

export default App;
