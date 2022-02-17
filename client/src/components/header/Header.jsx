import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container container--small">
        <ul className="header__nav nav">
          <li className="nav__item">
            <Link className="nav__link" to="/searchpage">
              Search Page
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/createpage">
              Create Page
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
