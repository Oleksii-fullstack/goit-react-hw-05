import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { getMoviesByQuery } from "../service/moviedbAPI";
import { FiSearch } from "react-icons/fi";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieList from "../components/Movies/MovieList/MovieList";
import s from "./MoviesPage.module.css";

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
        <div className={s.searchWrapper}>
          <input
            className={s.input}
            placeholder="type here to search film"
            defaultValue={value}
            onChange={(e) => {
              setSearchParams({ query: e.target.value });
            }}
          />
          <FiSearch className={s.searchIcon} size="18px" />
        </div>
        {isEmpty && <ErrorMessage />}
        <MovieList movies={movies} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
