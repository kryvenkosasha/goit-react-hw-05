import { NavLink, Routes, Router, Route } from "react-router-dom";

const TrendingMovies = (movies) => {
  return (
    <div>
      <ul>
        {movies.movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <p>Rating: {movie.vote_average}</p>
            </NavLink> 

             <Routes>
              <Route path="/movies/${movie.id}" element={<div>dfpm;vc</div>} />
            </Routes>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
