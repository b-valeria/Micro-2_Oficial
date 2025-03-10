"use client";
import React, { useState } from "react";
import styles from "./MainContainer2.module.css";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import {app} from '../firebase'
import { Link, useNavigate } from 'react-router'


const auth = getAuth(app)



function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const user =  await signInWithEmailAndPassword(auth, email, password)
      console.log(user)

      navigate('/')
      
    } catch (error) {
      setError(error.message)

      
    }

    console.log({ email, password, rememberMe });
  };

  return (
    <section className={styles.loginContainer}>
      {error && <p>{error}</p>}
      <form className={styles.loginBox} onSubmit={handleSubmit}>


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
         
          />
        </div>

        <div className={styles.optionsRow}>
          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
    
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