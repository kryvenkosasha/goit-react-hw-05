import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './MovieCasts.css'

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEzMGRhMzk0ZGVmMGU0MGQwZjIwMDAwNTJiNGU1ZCIsInN1YiI6IjY2MWI4NzU1MDkxZTYyMDE2MzQ4YzQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywpCbLyd2loQBqXx6WkGVo3PK_MQFg2z0nS5WmQvvwU",
              accept: "application/json",
            },
          }
        );
        setCast(res.data.cast);
      } catch (error) {
        console.log(error);
        setError("Ooops, something went wrong, try later...", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 >Casts</h2>
      <ul className="casts-list">
        {cast.map((actor, idx) => (
          <li key={idx} className="casts-item">
            <div >
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              
              <p>{actor.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
