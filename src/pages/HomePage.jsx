import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/moviedbAPI";
import MovieList from "../components/Movies/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <h1 className={s.heading}>Trending today</h1>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default HomePage;
