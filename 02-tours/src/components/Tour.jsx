import { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(true);
  const { id, name, info, image, price, removeTour, infoLimit = 120 } = props;
  const infoOverflow = info.length > infoLimit;

  const getInfo = () => {
    if (readMore) {
      return `${info.substring(0, infoLimit - 1)}...`;
    }
    return info;
  };

  const getToggleButton = () => {
    return (
      <button
        className="btn btn--empty"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? 'read more' : 'show less'}
      </button>
    );
  };

  return (
    <article className="tour">
      <div className="tour__header">
        <img
          src={image}
          alt={name}
          className="tour__image"
        />
      </div>
      <div className="tour__body">
        <h2 className="tour__name">{name}</h2>
        <p className="tour__price">${price}</p>
        <p className="tour__info">{getInfo()}</p>
        {infoOverflow && getToggleButton()}
      </div>
      <div className="tour__footer">
        <button
          className="btn btn--outline"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;