import React from "react";
import "./App.css";
import UsersPage from "./Pages/UsersPage";
import UserShowPage from "./Pages/UserShowPage";
import HomePage from "./Pages/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/About" component={HomePage} />
          <Route exact path="/users/:id" component={UserShowPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
