import React,{use} from "react";
import styles from "./MainContainer.module.css";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
function Header() {

  const contextUser = use(UserContext);

  const {user,email,loggedIn} =contextUser; 
  console.log(email);
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ced3c35b122040f4ac92ba7f1b1e9a1a8bb6d"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.navLinks}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <a href="#" className={styles.navItem}>
          Destinos
        </a>
        <a href="#" className={styles.navItem}>
          Novedades
        </a>
        <a href="#" className={styles.navItem}>
          Contacto
        </a>  
        
        
        { loggedIn && 
        
    
        <>
            <a href="#" className={styles.navItem}>
          Reserve
        </a>  <a href="#" className={styles.navItem}>
          Foro
        </a>

        
        </>



        
        
        }
        <Link to='/login' className={styles.loginButton}>Login</Link>


  
      </nav>
    </header>
  );
}

export default Header;