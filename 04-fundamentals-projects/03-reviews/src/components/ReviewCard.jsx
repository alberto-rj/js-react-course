import { REVIEWS, ICONS } from '../data';
import { useState } from 'react';
import { Review } from '.';

const ReviewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { previous, next } = ICONS;

  const getCurrentIndex = () => currentIndex;
  const getFirstIndex = () => 0;
  const getLastIndex = () => REVIEWS.length - 1;
  const getNextIndex = () => currentIndex + 1;
  const getPreviousIndex = () => currentIndex - 1;
  const getIndexCount = () => REVIEWS.length;

  const getcurrentReview = () => {
    return REVIEWS[getCurrentIndex()];
  };

  const setNextIndex = () => {
    if (getCurrentIndex() < getLastIndex()) {
      setCurrentIndex(getNextIndex());
    } else {
      setCurrentIndex(getFirstIndex());
    }
  };

  const setPreviousIndex = () => {
    if (getCurrentIndex() <= getFirstIndex()) {
      setCurrentIndex(getLastIndex());
    } else {
      setCurrentIndex(getPreviousIndex());
    }
  };

  const setRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * getIndexCount());
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="review">
      <Review {...getcurrentReview()} />
      <div className="review__navigation">
        <button
          className="review__previous"
          aria-label="Show previous user review"
          onClick={setPreviousIndex}
        >
          <img
            src={previous}
            alt=""
            width="20"
            height="20"
          />
        </button>
        <button
          className="review__next"
          aria-label="Show next user review"
          onClick={setNextIndex}
        >
          <img
            src={next}
            alt=""
            width="20"
            height="20"
          />
        </button>
      </div>
      <button
        className="review__btn"
        onClick={setRandomIndex}
        aria-label="Suprime me with a random user review"
      >
        Suprise Me
      </button>
    </div>
  );
};

export default ReviewCard;
