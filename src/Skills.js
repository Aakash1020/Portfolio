import React, { useEffect, useState } from "react";
import "./style/Skills.css";

function Skills() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });
  return (
    <div className="skills">
      <div className={`skills__info ${show && "skills__info__change"}`}>
        <div className="rows__columns">
          <div class="row1">
            <div class="column1">
              <h4 className="col1__minitext">Highest</h4>
              <h2 className="col1__text1">Education</h2>
              <p className={`dash ${show && "dash__change"}`}></p>
            </div>
            <div class="column2">
              <h2 className="col2__text1">
                BE (Bachelor of Engineering) Computer Science
              </h2>
              <p className="col2__text2">
                All India Shri Shivaji Memorial Society's College of
                Engineering, Pune.
              </p>
              <span className={`dash ${show && "year"}`}>2017 - 2021</span>
            </div>
          </div>
          <p className={`dash ${show && "Border1"}`}></p>

          <div class="row2">
            <div class="column1">
              <h2 className="col1__text1">My Skills</h2>
              <p className={`dash ${show && "dash__change"}`}></p>
            </div>
            <div class="column2__visible">
              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>C++</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "cpp"}`}></span>
                </span>
              </li>

              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>HTML</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "html"}`}></span>
                </span>
              </li>

              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>CSS</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "css"}`}></span>
                </span>
              </li>

              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>JAVASCRIPT</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "java"}`}></span>
                </span>
              </li>

              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>REACT</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "react"}`}></span>
                </span>
              </li>

              <li>
                <h3 className={`blackcolor ${show && "h3"}`}>PYTHON</h3>
                <span className={`blackcolor ${show && "bar1"}`}>
                  <span className={`blackcolor ${show && "python"}`}></span>
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
