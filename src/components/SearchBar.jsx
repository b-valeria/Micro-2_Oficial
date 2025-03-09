import React from "react";
import styles from "./MainContainer.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Buscar" className={styles.searchInput} />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b19774bae4ed11cc4150063dde146e3d90824b"
        alt="Search"
        className={styles.searchIcon}
      />
    </div>
  );
}

export default SearchBar;