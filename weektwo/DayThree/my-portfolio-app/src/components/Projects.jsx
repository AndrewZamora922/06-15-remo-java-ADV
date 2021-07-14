import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <img
        className="projects__background"
        src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"
      alt=''/>
      <div className="projects__icon">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.hackerrank.com/dashboard"
        >
          <img
            src="https://img.icons8.com/windows/2x/ffffff/hackerrank.png"
            alt=""
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AndrewZamora922"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/2x/ffffff/github.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
