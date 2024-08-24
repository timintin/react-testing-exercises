
import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ photos }) {
  const [currIdx, setCurrIdx] = useState(0);

  const goForward = () => setCurrIdx(currIdx + 1);
  const goBackward = () => setCurrIdx(currIdx - 1);

  return (
    <div className="Carousel">
      <img
        src={photos[currIdx]}
        alt={`image ${currIdx + 1}`}
        data-testid="image-id"
      />
      {currIdx !== 0 && (
        <button
          data-testid="left-arrow"
          className="left-arrow"
          onClick={goBackward}
        >
          Left
        </button>
      )}
      {currIdx !== photos.length - 1 && (
        <button
          data-testid="right-arrow"
          className="right-arrow"
          onClick={goForward}
        >
          Right
        </button>
      )}
    </div>
  );
}

export default Carousel;
