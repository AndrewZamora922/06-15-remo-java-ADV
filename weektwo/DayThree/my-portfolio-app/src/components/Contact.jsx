import React from "react";
import "./Contact.css";

export default function Contact() {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [acceptedTerms] = React.useState(false);  


  const handleSubmit = (event) => {

    console.log(`
      Name: ${Name}
      Email: ${Email}
      Phone: ${Phone}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }
    return (
      <div className="about">
      <img
        className="about__background"
        src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"
      alt=''/>
      <form onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
  <br />
        <label>
          Name:
          <input
            name="Name"
            type="Name"
            value={Name}
            onChange={e => setName(e.target.value)}
            required />
        </label>
        
        <label>
          Email:
          <input
            name="Email"
            type="Email"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label>
  
        <label>
          Phone Number:
          <input
            name="Phone"
            type="Phone"
            value={Phone}
            onChange={e => setPhone(e.target.value)}
            required />
        </label>
  
        <button>Submit</button>
      </form>
      </div>
    );
  };
