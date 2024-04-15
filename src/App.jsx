import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>movies page</div>} />
        <Route path="/movies/:movie.id" element={<div>detail info page</div>} />
      </Routes>
    </>
  );
}

export default App;
