import React from "react";
import "./GetInTouch.css";
import flower2 from "../Assets/flower2.svg";

function GetInTouch() {
  return (
    <div>
      <div className="get-in-touch">
        <h1>GET IN TOUCH</h1>
        <p>
          I'm open for collaborations, new challenges and freelance work. Feel
          free to get in touch
        </p>
        <img src={flower2} alt="" />
      </div>
    </div>
  );
}

export default GetInTouch;
