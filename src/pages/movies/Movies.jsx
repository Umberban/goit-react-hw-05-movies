import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchMovies } from 'service/api';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleClick = e => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.searchQuery.value.trim() });
    e.target.reset();
    setInput('');
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchQuery"
          value={input}
          onChange={handleClick}
          placeholder="write a thing"

        />
        <button disabled={!input} className={css.btn}>
          Search
        </button>
      </form>
      {movies && (
        <ul className={css.list}>
          {movies.map(({ id, title }) => (
            <li className={css.item} key={id}>
              <Link className={css.link} state={{ from: location }} to={`${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;