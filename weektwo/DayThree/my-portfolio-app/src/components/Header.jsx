import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ active }) => {
  return (
    <div className="header">
      {active === "home" && (
        <img
          className="header__image"
          src="https://img.icons8.com/ios-glyphs/2x/men-age-group-5.png"
          alt=""
        />
      )}
      {active === "about" && (
        <img
          className="header__image"
          src="https://img.icons8.com/ios-glyphs/2x/men-age-group-5.png"
          alt=""
        />
      )}

      {active === "projects" && (
        <img
          className="header__image"
          src="https://img.icons8.com/ios-filled/2x/group-of-projects.png"
          alt=""
        />
      )}

      {active === "resume" && (
        <img
          className="header__image"
          src="https://img.icons8.com/ios-filled/2x/resume.png"
          alt=""
        />
      )}

      {active === 'contact' && (
        <img
        className='header__image'
        src='https://img.icons8.com/material-rounded/2x/add-contact-to-company.png'
        alt=''
        />
      )}

      

      <ul>
        <Link to="/">
          <li className={active === "home" && "header__home--active"}>
          Home
          </li>
        </Link>

        <Link to="/about">
          <li className={active === "about" && "header__about--active"}>
            About
          </li>
        </Link>

        <Link to="/projects">
          <li className={active === "projects" && "header__projects--active"}>
            Projects
          </li>
        </Link>

        <Link to="/resume">
          <li className={active === "resume" && "header__resume--active"}>
            Resume
          </li>
        </Link>

        <Link to='/contact'>
        <li className={active === 'contact' && 'header__contact--active'}>
        Contact
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
