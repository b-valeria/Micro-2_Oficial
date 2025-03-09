"use client";
import React from "react";
import styles from "./MainContainer.module.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import InfoCardSection from "./InfoCardSection";

function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <HeroSection />
      <InfoCardSection />
    </main>
  );
}

export default MainContainer;