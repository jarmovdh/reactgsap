import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import flower from "../Assets/flower.svg";
import another from "../Assets/another.svg";
import arrow from "../Assets/arrow.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="container1">
          <div className="text-line" id="qvstudio">
            <p>QV STUDIO</p>
          </div>
          <div className="txt-line line-bottom" id="agency">
            <p>agency</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="left-side-quote">
        <p>
          We create digital experiences by combining <br />
          webdesgin, content and strategy, <br /> that move brands forward.
        </p>
      </div>
      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="digital">
            <p>Digital</p>
          </div>
          <div className="txt-line linebottom" id="designer">
            <p>Designer</p>
          </div>
        </div>
      </div>
      <div className="flower-svg">
        <img src={flower} alt="" />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">Shortly</h1>
          <h1 className="main-short-about">About</h1>
          <h1 className="main-short-about">MySelf!</h1>
        </div>
        <div className="sub-main-p-short-about">
          <p className="sub-main-short-about">
            I believe that every project that I do shoud have an overvalue.
          </p>
          <p className="sub-main-short-about">
            I always try to find the optimal solution to the client's task.
          </p>
        </div>
        <div className="another-svg">
          <img src={another} alt="" />
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
        </div>
        <div className="skill-set-boxes">
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">HTML5</h1>
            <p className="skill-set-box-p">I develop website Markup</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">SCSS</h1>
            <p className="skill-set-box-p">
              Adding style and design to browsers
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">JavaScript</h1>
            <p className="skill-set-box-p">
              With this tech i ccreate visual effects and interactions and DOM
              elements
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">ReactJS</h1>
            <p className="skill-set-box-p">I use it to create web apps </p>
            <p></p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Greensock - GSAP </h1>
            <p className="skill-set-box-p">
              I used this as an animation librabry
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Three.js</h1>
            <p className="skill-set-box-p">Is what i want to learn next</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Sass</h1>
            <p className="skill-set-box-p">Advance functionalities voor CSS</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Node.js</h1>
            <p className="skill-set-box-p">
              For server scripting for applications
            </p>
            <p>___</p>
          </div>
        </div>
        <div className="project-and-work">
          <h1>
            <Link className="h1-project" to="/projects">
              My Projects and works <img src={arrow} alt="" />
            </Link>
          </h1>
          <br />
          <p>Click here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
