
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
