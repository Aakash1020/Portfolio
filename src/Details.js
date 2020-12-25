import React, { useEffect, useState } from "react";
import "./style/Details.css";
import vscode from "./vscode.gif";

function Details() {
  const [fade, handlefade] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        handlefade(true);
      } else {
        handlefade(false);
      }
    });
  });

  return (
    <div className="details">
      <div className="tools__details">
        <div className="tools__row">
          <div className="tools__column1">
            <img
              className={`vscode__gif ${fade && "vscode__gif__visible"}`}
              src={vscode}
              alt="vscode"
            />
          </div>
          <div className="tools__column2">
            <h1 className="tools__text1">
              Vs<span className="tools__text2">Code</span>
            </h1>
            <h3 className="tools__text3">
              " The best open source tool I use for coding, easy to use and
              recommended by developers "
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
