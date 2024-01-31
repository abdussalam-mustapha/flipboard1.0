import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Auth.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch(authActions.login());

      console.log("Signup success:", user);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
