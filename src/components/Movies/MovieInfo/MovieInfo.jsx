import s from "./MovieInfo.module.css";

const MovieInfo = ({
  poster_path,
  original_title,
  popularity,
  overview,
  genres,
}) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.poster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div className={s.info}>
        <h2>{original_title}</h2>
        <p>User score: {Math.round((popularity / 10) * 100)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
