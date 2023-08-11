import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo_container"]}>
        <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
        <p className={styles["brand_name"]}>TripWise AI</p>
      </div>

      <div className={styles["right_container"]}>
        <button className={styles["nav_link"]} onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className={styles["nav_link"]}
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className={styles["nav_link"]}
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
