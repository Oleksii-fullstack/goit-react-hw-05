import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../service/moviedbAPI.js";
import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

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
        // console.log(data);
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
          <ul>
            {movieCast.map((actor) => {
              <li key={actor.id}>
                <img
                  src={`https://api.themoviedb.org/3/movie${actor.profile_path}/credits`}
                  alt={actor.original_name}
                />
                <span>{actor.original_name}</span>
                <span>Character: {actor.character}</span>
              </li>;
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
