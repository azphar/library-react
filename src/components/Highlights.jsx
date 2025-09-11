import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBookOpen, faTag } from "@fortawesome/free-solid-svg-icons";

function Highlight({ icon, title, text }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">{text}</p>
    </div>
  );
}

function Highlights() {
  return (
    <section id="highlights">
      <div className="row">
        <h2 className="highlight__subtitle">
          Why choose <span className="purple">Library</span>
        </h2>

        <div className="highlight__wrapper">
          <Highlight
            icon={faBolt}
            title="Easy and Quick"
            text="Get access to the book you purchased online instantly."
          />
          <Highlight
            icon={faBookOpen}
            title="10,000+ Books"
            text="Library has books in all your favourite categories."
          />
          <Highlight
            icon={faTag}
            title="Affordable"
            text="Get your hands on popular books for as little as $10."
          />
        </div>
      </div>
    </section>
  );
}

export default Highlights;
