import { useState } from "react";
import DATA from "../data";

const Question = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { id, title, info } = props;
  const { icon: { plus, minus } } = DATA;

  const toggleShown = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="accordion">
      <h2>
        <button
          id={`accordion-toggle-${id}`}
          className="accordion__toggle"
          aria-expanded={isShown}
          aria-controls={`accordion-panel-${id}`}
          onClick={toggleShown}
        >
          <span className="accordion__heading">{title}</span>
          <img
            src={isShown ? minus : plus}
            alt=""
            width={32}
            height={32}
          />
        </button>
      </h2>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-toggle-${id}`}
        className={`accordion__panel${isShown ? ' accordion__panel--shown' : ''}`}
      >
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Question;