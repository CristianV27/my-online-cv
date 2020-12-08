import React from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/Home/Home.jsx";

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
