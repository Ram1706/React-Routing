import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../src/Components/HomePage";
import Login from "../src/Components/Login";
import Register from "../src/Components/Register";
import NotFound from "../src/Components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

import "./styles.css";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Register">
            Register
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
