import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'service/api';
import css from './Home.module.css';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
    .then(setMovies)
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <>
    <h1 className={css.homeTitle}>Trending movies today</h1>
      <ul className={css.homeList}>
        {movies.map(({ id, title }) => (
          <li className={css.homeItem} key={id}>
          <Link state={{from: location }} to={`movies/${id}`}>{title}</Link></li>
        ))}
      </ul>
    </>
  );
};

