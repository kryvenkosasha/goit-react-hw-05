import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieCast from "./Components/MovieCasts/MovieCasts.jsx";
import MovieReviews from "./Components/MovieReviews/MovieReviews.jsx";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
