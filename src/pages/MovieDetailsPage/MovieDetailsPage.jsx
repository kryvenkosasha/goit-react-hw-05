import { useEffect, useState, useRef } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import axios from "axios";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEzMGRhMzk0ZGVmMGU0MGQwZjIwMDAwNTJiNGU1ZCIsInN1YiI6IjY2MWI4NzU1MDkxZTYyMDE2MzQ4YzQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywpCbLyd2loQBqXx6WkGVo3PK_MQFg2z0nS5WmQvvwU",
              accept: "application/json",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (backLinkRef.current) {
      backLinkRef.current.focus();
    }
  }, [location]);

  return (
    <div>
      <Link
        to={location.state?.from || "/movies"}
        ref={backLinkRef}
        className="button"
      >
        Back
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <div>
            <p>Overview</p>
            <p>{movie.overview}</p>
          </div>
          <p>
            Average rating:
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>

          <p>
            Release Date:
            {movie.release_date}
          </p>
        </div>
      </div>
      <div>
        <NavLink to={`/movies/${movieId}/cast`} className="button">
          Cast
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className="button">
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
