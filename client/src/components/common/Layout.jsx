import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header className="header">header</header>
      <main className="main">
        <div className="page">
          <Outlet />
        </div>
      </main>
      <footer className="footer">footer</footer>
    </>
  );
};

export default Layout;
