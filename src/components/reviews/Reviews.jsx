import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/api';
import css from 'components/reviews/Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getReviews(movieId)
      .then(setReview)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <>
      {review.length ? (
        <ul className={css.list}>
          {review.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <p className={css.author}>Author: {author}</p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.message}>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
