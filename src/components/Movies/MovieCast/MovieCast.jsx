import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../service/moviedbAPI.js";
import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieActors = async () => {
      setLoading(true);
      try {
        const data = await getMovieCast(movieId);
        console.log(data);
        setMovieCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieActors();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {movieCast?.length ? (
          <ul className={styles.castList}>
            {movieCast.map((actor) => {
              return (
                <li className={styles.castItem} key={actor.id}>
                  <img
                    className={styles.castImg}
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.original_name}
                  />
                  <p className={styles.castName}>{actor.original_name}</p>
                  <p className={styles.castCharacter}>
                    Character: {actor.character}
                  </p>
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

export default MovieCast;
