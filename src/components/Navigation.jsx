"use client";
import React, { useState } from "react";
import styles from "./MainContainer2.module.css";

function Navigation({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyle = {
    ...(isMenuOpen && { transform: "translate(0)" }),
  };

  return (
    <>
      {/* Mobile menu toggle button - only visible on small screens */}
      {!isMenuOpen && (
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Open navigation menu"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 10,
            display: "none",
            "@media (max-width: 991px)": {
              display: "block",
            },
          }}
        >
          ☰
        </button>
      )}

      <nav className={styles.navigation} style={navStyle}>
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            aria-label="Close navigation menu"
            style={{
              alignSelf: "flex-end",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              display: "none",
              "@media (max-width: 991px)": {
                display: "block",
              },
            }}
          >
            ✕
          </button>
        )}

        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Destinos
        </a>
        <a href="#" className={styles.navLink}>
          Novedades
        </a>
        <a href="#" className={styles.navLink}>
          Contacto
        </a>
        <button onClick={onLoginClick} className={styles.loginButton}>
          Login
        </button>
      </nav>
    </>
  );
}

export default Navigation;