import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FirstTask from "./components/FirstTask/FirstTask";
import { Header } from "./components/Header/Header";
import { SecondTask } from "./components/SecondTask/SecondTask";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/second">
            <SecondTask />
          </Route>
          <Route path="/">
            <FirstTask />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
