import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Ratings = ({ rating = 0 }) => {
  const val = Number(rating) || 0;
  const full = Math.floor(val);
  const half = val - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className="book__ratings" aria-label={`Rating ${val} of 5`} title={`${val} / 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <FontAwesomeIcon key={`f${i}`} icon={faStarSolid} className="book__star book__star--full" />
      ))}
      {half === 1 && <FontAwesomeIcon icon={faStarHalfStroke} className="book__star book__star--half" />}
      {Array.from({ length: empty }).map((_, i) => (
        <FontAwesomeIcon key={`e${i}`} icon={faStarRegular} className="book__star book__star--empty" />
      ))}
    </div>
  );
};

export default Ratings;
