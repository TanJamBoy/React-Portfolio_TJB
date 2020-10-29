import React from 'react';
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
