import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider,getAuth } from "firebase/auth";
import { app } from "../firebase";



const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {

      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      console.log(response);
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
