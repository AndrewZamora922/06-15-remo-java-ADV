import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithGitHub, signup } from "../helpers/auth";
import "../pages/Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [value, setValue] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  const githubSignIn = async () => {
    try {
      await signInWithGitHub();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ error: "" });
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          Sign Up to
          <Link to="/"> The Chat App</Link>
        </h1>
        <p>Fill out the form to sign up and use the app.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          {error ? <p>error</p> : null}
          <button type="submit">Sign Up</button>
        </div>
        <br/>
        <button onClick={googleSignIn} type="button">
          Sign in with Google
        </button>
        <br/>
        <br/>
        <button onClick={githubSignIn} type="button">
          Sign in with Github
        </button>
        <hr></hr>
        <p>
          If you have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
