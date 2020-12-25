import React, { useEffect, useState } from "react";
import "./style/Info.css";

function Info() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 480) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });
  return (
    <div className="info">
      <div className="text__info">
        <p className="text1">
          Adaptable Computer Engineering student currently attending{" "}
          <span className={`text2 ${show && "text2__change"}`}>
            "All India Shri Shivaji Memorial Society's College of Engineering,
            Pune"
          </span>
          {""}. Aiming to leverage proven teamwork, technical, and planning
          skills to successfully fill the required role. I can be relied upon to
          achieve goals and Learn.
        </p>
      </div>
    </div>
  );
}

export default Info;
