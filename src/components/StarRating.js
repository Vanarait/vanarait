import React, { useState } from "react";
import styled from "styled-components";

const StyledStarDiv = styled.div`
  justify-content: end;
  .rating-title {
    font-size: 1rem;
    color: limegreen;
  }
`;

const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  .star {
    cursor: pointer;
    font-size: 0.8rem;
    margin-left: 3px;
    color: #ccc;
    transition: color 0.3s ease;
  }

  .star:hover,
  .star.filled,
  .star.half-filled {
    color: orange;
  }
`;

const StarRating = ({ totalStars = 5, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
    if (onRate) {
      onRate(clickedIndex + 1);
    }
  };

  return (
    <StyledStarDiv className="d-flex align-items-center">
      <h2 className="mb-0 rating-title">Rating: </h2>
      <RatingDiv>
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          const filled = starValue <= rating;
          const halfFilled = rating > index && rating < starValue;

          return (
            <span
              key={index}
              onClick={() => handleStarClick(index)}
              className={`star ${filled ? "filled" : ""} ${
                halfFilled ? "half-filled" : ""
              }`}
            >
              {filled ? (
                <i className="fa fa-star" aria-hidden="true" key={index}></i>
              ) : halfFilled ? (
                <i
                  className="fa fa-star-half-o"
                  aria-hidden="true"
                  key={index}
                ></i>
              ) : (
                <i className="fa fa-star-o" aria-hidden="true" key={index}></i>
              )}
            </span>
          );
        })}
      </RatingDiv>
    </StyledStarDiv>
  );
};

export default StarRating;
