import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.wrapper}>
      <h2 className={css.heading}>Trending today</h2>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={css.link}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
