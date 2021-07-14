import { Link } from "react-router-dom";
import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <img
        className="body__background"
        src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"
        alt=""
      />

      <div className="body__aboutMe">
        <img src="IMG.jpg" alt="" />
      </div>
      <br />
      <div className="body__info">
        <h1>Andrew Zamora</h1>
        <br />
        <p>
          Hello, my name is Andrew. I am a full stack developer living in San
          Antonio, TX.
        </p>
      </div>

      <div className="body__viewProjects">
      <Link to="/projects">
          <button>View Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
