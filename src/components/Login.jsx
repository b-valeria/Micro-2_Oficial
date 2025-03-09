import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar Sesión con Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
