import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const starIcon = "★";
  const emptyStarIcon = "☆";

  return (
    <div /*style={{position:'absolute',bottom:'10px',left:'20px'}}*/>
      {[...Array(filledStars)].map((_, i) => (
        <span key={i} className="filled-star star">
          {starIcon}
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className="empty-star star">
          {emptyStarIcon}
        </span>
      ))}
    </div>
  );
};

export default StarRating
