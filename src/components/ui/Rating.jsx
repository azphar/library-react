import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Ratings({ rating = 0 }) {
  const value = Number(rating) || 0;
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className="book__ratings" aria-label={`Rating ${value} out of 5`} title={`${value} / 5`}>
      {/* full stars */}
      {Array.from({ length: full }).map((_, i) => (
        <FontAwesomeIcon key={`f${i}`} icon={faStarSolid} className="book__star" />
      ))}
      {/* half star */}
      {half === 1 && <FontAwesomeIcon icon={faStarHalfStroke} className="book__star" />}
      {/* empty stars */}
      {Array.from({ length: empty }).map((_, i) => (
        <FontAwesomeIcon key={`e${i}`} icon={faStarRegular} className="book__star" />
      ))}
    </div>
  );
}

export default Ratings;
