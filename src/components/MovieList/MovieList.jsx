import { NavLink, useLocation } from "react-router-dom";
import "./MovieList.css";

const TrendingMovies = (movies) => {
  const location = useLocation();

  return (
    <div>
      <ul className="trending-movies-list">
        {movies.movies.map((movie) => (
          <li key={movie.id} className="trending-movies-item">
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <p>Rating: {movie.vote_average}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
