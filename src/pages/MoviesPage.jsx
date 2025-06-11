import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { getMoviesByQuery } from "../service/moviedbAPI";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieList from "../components/Movies/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const query = searchParams.get("query");

  const [value] = useDebounce(query, 300);

  useEffect(() => {
    if (!value) return;

    const getMovies = async () => {
      setLoading(true);
      setIsEmpty(false);
      try {
        const data = await getMoviesByQuery(value);
        if (!data.length) {
          setIsEmpty(true);
          return;
        }
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [value]);

  return (
    <Section>
      <Container>
        <input
          defaultValue={value}
          onChange={(e) => {
            setSearchParams({ query: e.target.value });
          }}
        />
        {isEmpty && <ErrorMessage />}
        <MovieList movies={movies} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
