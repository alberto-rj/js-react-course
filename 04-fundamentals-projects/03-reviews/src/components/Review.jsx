import { ICONS } from "../data";

const Review = (props) => {
  const { name, image, job, text } = props;
  const { quote } = ICONS;
  return (
    <div className="review__profile">
      <div className="review__avatar">
        <img
          className="review__image"
          alt={`A picture of ${name}, ${job}`}
          src={image}
          width="120"
          height="120"
        />
        <img
          className="review__quote"
          alt=""
          src={quote}
          width="40"
          height="40"
        />
        <div className="review__pseudo"></div>
      </div>
      <p className="review__name">{name}</p>
      <p className="review__job">{job}</p>
      <p className="review__text">{text}</p>
    </div>
  );
};

export default Review;
