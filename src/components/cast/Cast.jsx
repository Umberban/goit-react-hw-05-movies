import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'service/api';
import css from 'components/cast/Cast.module.css';

export const Cast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCredits(movieId)
      .then(setCast)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!cast) {
    return null;
  }


  return (
    <>
      {cast.length ? (
        <ul className={css.list}>
          {cast.map(({ id, character, profile_path, name }) => (
            <li className={css.item} key={id}>
            <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png`
                }
                alt={name}
              />
              <p className={css.text}>{name}</p>
              <p className={css.textChar}>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.message}>
          We don't have any information about cast of this movie.
        </p>
      )}
    </>
  );
};
