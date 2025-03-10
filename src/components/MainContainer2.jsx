"use client";
import React, { useState } from "react";
import styles from "./MainContainer2.module.css";
import Navigation from "./Navigation";
import LoginForm from "./LoginForm";

function MainContainer2() {


  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <main className={styles.mainContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc0cc787160ad26fba54087f89d90cc3881553fe"
        alt="Background"
        className={styles.backgroundImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ced3c35b122040f4ac92ba7f1b1e9a1a8bb6d"
        alt="Logo"
        className={styles.logo}
      />
      <Navigation onLoginClick={handleLoginClick} />

       <LoginForm  />
    </main>
  );
}

export default MainContainer2;