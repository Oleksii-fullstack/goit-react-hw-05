import axios from "axios";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRhZDhhYzYzNjY3MjVlODJlNWQ1YjY0YzIxOTc5YiIsIm5iZiI6MTc0OTQ3NTQ3OS4wNSwic3ViIjoiNjg0NmUwOTc4MGFkMzAxMTk2MjkyZmU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RAnm3ESV8DUxFqvKK9WsubBFb2DOGEMSPRqtEFVq5C4",
      },
    }
  );
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRhZDhhYzYzNjY3MjVlODJlNWQ1YjY0YzIxOTc5YiIsIm5iZiI6MTc0OTQ3NTQ3OS4wNSwic3ViIjoiNjg0NmUwOTc4MGFkMzAxMTk2MjkyZmU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RAnm3ESV8DUxFqvKK9WsubBFb2DOGEMSPRqtEFVq5C4",
      },
    }
  );

  const { poster_path, original_title, popularity, overview, genres } = data;
  return {
    poster_path,
    original_title,
    popularity,
    overview,
    genres,
  };
};

export const getMovieCast = async (movieID) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRhZDhhYzYzNjY3MjVlODJlNWQ1YjY0YzIxOTc5YiIsIm5iZiI6MTc0OTQ3NTQ3OS4wNSwic3ViIjoiNjg0NmUwOTc4MGFkMzAxMTk2MjkyZmU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RAnm3ESV8DUxFqvKK9WsubBFb2DOGEMSPRqtEFVq5C4",
      },
    }
  );
  return data.cast;
};

export const getMovieReviews = async (movieInD) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieInD}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRhZDhhYzYzNjY3MjVlODJlNWQ1YjY0YzIxOTc5YiIsIm5iZiI6MTc0OTQ3NTQ3OS4wNSwic3ViIjoiNjg0NmUwOTc4MGFkMzAxMTk2MjkyZmU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RAnm3ESV8DUxFqvKK9WsubBFb2DOGEMSPRqtEFVq5C4",
      },
    }
  );
  return data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie/${query}`
  );
  return data.results;
};
