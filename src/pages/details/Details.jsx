import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMoviesById } from 'service/api';
import css from './Details.module.css';

export const Details = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesById(movieId)
      .then(setMovie)
      .catch(error => {
        
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, overview, vote_average, poster_path, genres } = movie;

  return (
    <>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          navigate(location.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      <div className={css.movie}>
        <img
          src={
            poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png`
          }
          className={css.img}
          alt={title}
        />
        <div className={css.movieDescription}>
          <h2 className={css.title}>{title}</h2>
          <h3 className={css.descTitle}>User Score:</h3>
          <p> {vote_average}</p>
          <h3 className={css.descTitle}>Overview:</h3>
          <p>{overview}</p>
          <h3 className={css.descTitle}>Genres:</h3>
          <p>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <Link to="movieId" state={{ from: location }}></Link>
      <Link
        className={css.cast}
        to="cast"
        state={{ from: location.state?.from }}
      >
        Cast
      </Link>
      <Link
        className={css.review}
        to="reviews"
        state={{ from: location.state?.from }}
      >
        Review
      </Link>
      <Outlet />
    </>
  );
};
