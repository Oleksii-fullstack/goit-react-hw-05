import { Link, useLocation } from "react-router-dom";
import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Grid>
      {movies.map((movie) => {
        return (
          <GridItem key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {/* <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              /> */}
              <h2>{movie.original_title}</h2>
              {/* <p>User score: {Math.round((movie.popularity / 10) * 100)}%</p> */}
              {/* <span>Overview</span>
              <p>{movie.overview}</p> */}
              {/* <span>Genres {movie.genre_ids}</span> */}
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MovieList;
