import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/skill">
            <Skills/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
