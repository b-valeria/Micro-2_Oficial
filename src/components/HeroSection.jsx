import React from "react";
import styles from "./MainContainer.module.css";
import SearchBar from "./SearchBar";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.mainTitle}>Hiking y Diversion en el Avila</h1>
        <h2 className={styles.subtitle}>Conecta con el corazon de Caracas</h2>
        <SearchBar />
      </div>
    </section>
  );
}

export default HeroSection;