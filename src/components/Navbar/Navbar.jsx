import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="px-6 pt-6 flex items-center justify-between lg:px-24 lg:py-12">
      <div className="w-28">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className={`${styles.navbar__items} flex gap-x-3 lg:gap-x-16`}>
          <li className="hover:underline hover:cursor-pointer">Features</li>
          <li className="hover:underline hover:cursor-pointer">Team</li>
          <li className="hover:underline hover:cursor-pointer">Sign In</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
