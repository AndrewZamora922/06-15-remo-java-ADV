import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the chat app</h1>
      <div>
      <p>Here on The Chat App you can stay in contact with other developers in the tech industry.
       Share ideas, help others, or network.</p>
       <br></br>
        <button>
          <Link to="/signup">Create new account</Link>
        </button>
        <br></br>
        <br></br>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
