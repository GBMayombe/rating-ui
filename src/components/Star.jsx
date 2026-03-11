const Star = ({
  star,
  hover,
  color,
  rating,
  hoverEnter,
  hoverLeave,
  ratingClick,
}) => {
  return (
    <span
      className="star"
      onMouseLeave={hoverLeave}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      style={{ color: star <= (hover || rating) ? color : '#ccc' }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
