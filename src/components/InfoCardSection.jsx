import React from "react";
import styles from "./MainContainer.module.css";
import InfoCard from "./InfoCard";

function InfoCardSection() {
  const cardData = [
    {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/68c51cfa33ff258e3c883fad73501b3180e2979a",
      title: "Raices Unimetanas",
      text: "En nuestra agencia de excursiones, nos enorgullece contar con un equipo de guías apasionados y altamente capacitados, todos ellos egresados de la Universidad Metropolitana. Gracias a la formación integral que ofrece esta prestigiosa institución, nuestros guías no solo están equipados con conocimientos académicos, sino también con una profunda comprensión del entorno natural y cultural que nos rodea.",
    },
    {
      logo: null,
      title: "Quines Somos",
      text: "Nos dedicamos a ofrecer experiencias únicas en el Parque Nacional El Ávila, en Caracas. Con años de experiencia en ecoturismo, nuestro objetivo es conectar a los visitantes con la belleza natural y la rica biodiversidad de esta emblemática montaña. Nos comprometemos a brindar excursiones seguras, educativas y memorables, fomentando el respeto por el medio ambiente y la cultura local.",
    },
    {
      logo: null,
      title: "Amantes del Avila",
      text: "El Ávila, también conocido como Waraira Repano, es un emblemático cerro que se alza sobre Caracas, Venezuela. Su historia se remonta a tiempos precolombinos, cuando las comunidades indígenas lo consideraban sagrado. Durante la colonización española, el Ávila fue testigo del crecimiento de la ciudad y se convirtió en un símbolo de identidad para los caraqueños.",
    },
  ];

  return (
    <section className={styles.infoCards}>
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          logo={card.logo}
          title={card.title}
          text={card.text}
        />
      ))}
    </section>
  );
}

export default InfoCardSection;