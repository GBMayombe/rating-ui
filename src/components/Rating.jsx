import { useState } from 'react';
import Star from './Star';

const Rating = ({
  color = 'gold',
  heading = 'Rate Your Experience',
  feedbackMsg = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_value, index) => index + 1);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star, _index) => (
          <Star
            key={star}
            star={star}
            color={color}
            hover={hover}
            rating={rating}
            hoverEnter={setHover}
            ratingClick={setRating}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMsg[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
