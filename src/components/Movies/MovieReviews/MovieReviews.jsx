import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../../service/moviedbAPI.js";
import Section from "../../Section/Section.jsx";
import Container from "../../Container/Container";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Loader from "../../Loader/Loader.jsx";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCommentary = async () => {
      setLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        // console.log(data);
        setMovieReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieCommentary();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {movieReviews?.length ? (
          <ul className={styles.reviewsList}>
            {movieReviews.map((review) => {
              return (
                <li className={styles.reviewItem} key={review.id}>
                  <p className={styles.reviewAuthor}>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <ErrorMessage />
        )}
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </Container>
    </Section>
  );
};

export default MovieReviews;
