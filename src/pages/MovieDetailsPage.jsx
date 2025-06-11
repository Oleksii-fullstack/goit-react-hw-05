import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../service/moviedbAPI";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieInfo from "../components/Movies/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/");

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  console.log(movie);

  return (
    <Section>
      <Container>
        <Link to={goBackLink.current}>Go Back</Link>
        {movie && <MovieInfo {...movie} />}
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <Link to={"cast"}>Cast</Link>
        <Link to={"reviews"}>Reviews</Link>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
