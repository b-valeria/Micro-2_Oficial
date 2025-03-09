import React from "react";
import styles from "./MainContainer.module.css";

function InfoCard({ logo, title, text }) {
  return (
    <article className={styles.infoCard}>
      {logo && (
        <img src={logo} alt={`${title} Logo`} className={styles.uniLogo} />
      )}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </article>
  );
}

export default InfoCard;
