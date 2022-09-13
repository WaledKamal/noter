import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Note from "./components/Notes/Note";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
      <Routes>
      </Routes>
    </>
  );
}

export default App;
