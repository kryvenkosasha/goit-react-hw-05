import { NavLink } from "react-router-dom";
import './TrendingMovies.css'

const TrendingMovies = (movies) => {
  return (
    <div>
      <ul className="trending-movies-list">
        {movies.movies.map((movie) => (
          <li key={movie.id} className="trending-movies-item">
            <NavLink to={`/movies/${movie.id}`}>
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
