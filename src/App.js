import React from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { HomePage } from "./pages/Home/Home.jsx";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Resume } from "./pages/Resume/Resume";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Hobbies } from "./pages/Hobbies/Hobbies";
import { Contact } from "./pages/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch> 
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Sidebar></Sidebar>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
