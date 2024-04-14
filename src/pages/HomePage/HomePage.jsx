import { useEffect, useState } from "react";
import axios from "axios"; 

import TrendingMovies from '../../Components/TrendingMovies/TrendingMovies'

const HomePage = () => {
const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEzMGRhMzk0ZGVmMGU0MGQwZjIwMDAwNTJiNGU1ZCIsInN1YiI6IjY2MWI4NzU1MDkxZTYyMDE2MzQ4YzQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywpCbLyd2loQBqXx6WkGVo3PK_MQFg2z0nS5WmQvvwU",
              accept: "application/json",
            },
          }
        );
        setMovies(res.data.results);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {movies.length > 0 && <TrendingMovies movies={movies} />}
    </>
  );
};

export default HomePage