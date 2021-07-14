import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithGitHub, signin } from "../helpers/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(error);
    try {
      await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const googleSignIn = async (e) => {
    e.preventDefault();
    setError(error);
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };
  const githubSignIn = async (e) => {
    e.preventDefault();
    setError(error);
    try {
      await signInWithGitHub();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>
          Login to
          <Link to="/"> The Chat App</Link>
        </h1>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Login</button>
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
        <hr />
        <p>
          Dont have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
