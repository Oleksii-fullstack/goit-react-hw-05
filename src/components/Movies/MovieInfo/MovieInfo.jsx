const MovieInfo = ({
  poster_path,
  original_title,
  popularity,
  overview,
  genres,
}) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <h2>{original_title}</h2>
      <p>User score: {Math.round((popularity / 10) * 100)}%</p>
      <span>Overview:</span>
      <p>{overview}</p>
      <span>Genres: {genres.map(({ name }) => name).join(", ")}</span>
    </div>
  );
};

export default MovieInfo;
