import { useState } from 'react';
import Star from './Star';
import Modal from './Modal';
import Button from './Button';

const Rating = ({
  color = 'gold',
  heading = 'Rate Your Experience',
  feedbackMsg = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_value, index) => index + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  // Close modal and reset UI
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

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

      <Button
        className="submit-btn"
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
