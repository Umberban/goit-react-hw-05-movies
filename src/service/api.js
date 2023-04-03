import axios from 'axios';

const KEY = '6a403587ea3e1d5368a8465cffbbd459';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios('trending/movie/day', {
    params: { api_key: KEY },
  });
  return response.data.results;
};

export const SearchMovies = async query => {
  const response = await axios(`search/movie?query=${query}`, {
    params: { api_key: KEY, query},
  });
  return response.data.results;
};

export const getMoviesById = async movieId => {
  const response = await axios(`movie/${movieId}`, {
    params: { api_key: KEY },
  });
  return response.data;
};

export const getCredits = async movieId => {
  const response = await axios(`movie/${movieId}/credits`, {
    params: { api_key: KEY },
  });
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios(`movie/${movieId}/reviews`, {
    params: { api_key: KEY },
  });
  return response.data.results;
};