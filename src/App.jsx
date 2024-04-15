import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>movies page</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
