import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">footer</footer>
    </>
  );
};

export default Layout;
