import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import './MoviesPage.css'

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
      fetchMovies(query);
    }
  }, [searchParams]);

  const fetchMovies = async (query) => {
    // setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
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
      setError(error.message);
    } finally {
    //   setLoading(false);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search movies by title"
          className="search-input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {!error && <TrendingMovies movies={movies} />}
    </div>
  );
}
