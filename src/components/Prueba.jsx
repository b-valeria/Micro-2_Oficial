"use client";
import React, { useState } from "react";
import styles from "./MainContainer.module.css";
import Navigation from "./Navigation";
import LoginForm from "./LoginForm";

function MainContainer() {
  const [showLogin, setShowLogin] = useState(false);

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

      {showLogin && <LoginForm onClose={handleCloseLogin} />}
    </main>
  );
}

export default MainContainer;



//login form//


import React, { useState } from "react";
import styles from "./MainContainer.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <section className={styles.loginContainer}>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <header className={styles.loginHeader}>
          <h1 className={styles.loginTitle}>Login</h1>
          <button
            type="button"
            className={styles.closeButton}

            aria-label="Close login form"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2791bcf465c970b687cf585da2114975fcba8226"
            alt="Decorative"
            className={styles.decorativeImage}
          />
        </header>

        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.inputText}>
              Email
            </label>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5fe30d6b66b52b16227236b904d4e0ac496221"
              alt="Email icon"
              className={styles.inputIcon}
            />
          </div>
          <div className={styles.inputDivider} />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "none" }}
          />

          <div className={styles.inputField}>
            <label htmlFor="password" className={styles.inputText}>
              Password
            </label>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/029784f02f6ae6185226de734bf2e15c8ce64ce1"
              alt="Password icon"
              className={styles.inputIcon}
            />
          </div>
          <div className={styles.inputDivider} />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "none" }}
          />
        </div>

        <div className={styles.optionsRow}>
          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className={styles.checkbox}
            />
            <label htmlFor="rememberMe" className={styles.rememberText}>
              Remember me
            </label>
          </div>
          <a href="#" className={styles.forgotPassword}>
            Forget password
          </a>
        </div>

        <button type="submit" className={styles.submitButton}>
          Login
        </button>

        <p className={styles.registerPrompt}>
          No tienes una cuenta?{" "}
          <a href="#" className={styles.registerLink}>
            Registrate
          </a>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;