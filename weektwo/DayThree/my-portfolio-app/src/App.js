import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <Header active="about" />
            <About />
          </Route>

          <Route path="/projects">
            <Header active="projects" />
            <Projects />
          </Route>

          <Route path="/resume">
            <Header active="resume" />
            <Resume />
          </Route>

          <Route path="/contact">
          <Header active="contact" />
          <Contact />
        </Route>

          <Route path="/">
            <Header active="home" />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
