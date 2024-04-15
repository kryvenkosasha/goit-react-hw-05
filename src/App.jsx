import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "./App.css";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />

      <Routes>
        <Route
          path="/movies/${movie.id}"
          element={<div>detail info page</div>}
        />
        <Route path="/" element={HomePage} />
        <Route path="/movies" element={<div>movies page</div>} />
      </Routes>
    </>
  );
}

export default App;
