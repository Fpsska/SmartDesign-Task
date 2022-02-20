import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container container--small">
        <ul className="header__nav nav">
          <li className="nav__item">
            <NavLink className="nav__link" to="/SmartDesign-Task">
              Search Page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="createpage">
              Create Page
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
