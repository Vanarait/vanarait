import React from 'react';

function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  const starIcons = Array.from({ length: totalStars }, (_, index) => (
    <span key={index} className={index < filledStars ? "star-filled" : "star-empty"}>
      ★
    </span>
  ));

  return <div className="star-rating">{starIcons}</div>;
}

export default StarRating;
