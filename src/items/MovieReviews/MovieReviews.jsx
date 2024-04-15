import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './MovieReviews.css'

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEzMGRhMzk0ZGVmMGU0MGQwZjIwMDAwNTJiNGU1ZCIsInN1YiI6IjY2MWI4NzU1MDkxZTYyMDE2MzQ4YzQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ywpCbLyd2loQBqXx6WkGVo3PK_MQFg2z0nS5WmQvvwU",
            },
          }
        );
        setReviews(res.data.results);
      } catch (error) {
        console.log("Error: ", error);
        setError("Ooops, something went wrong, try later...", error);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 >Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map((review, idx) => (
            <li key={idx} className="reviews-item">
              <p >{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p >
          No reviews yet
          
        </p>
      )}
    </div>
  );
}
