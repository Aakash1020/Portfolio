import React, { useEffect, useState } from "react";
import "./style/Github.css";
import github from "./github.png";

function Linkedin() {
  const [change, handleold] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2580) {
        handleold(true);
      } else {
        handleold(false);
      }
    });
  });

  return (
    <div className="github">
      <div className="github__image">
        <div className="github__columns">
          <h1 className={`github__text1 ${change && "github__text1__change"}`}>
            Git<span className="Hub__text">Hub</span>
            <h4 className="github__text2">
              " Awesome place for developers to showcase their work, for hosting
              open source projects and version control using Git "
            </h4>
          </h1>
          <img
            className={`image__details ${change && "image__details__change"}`}
            src={github}
            alt="github"
          />
        </div>
      </div>
    </div>
  );
}

export default Linkedin;
