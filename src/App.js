import React from "react";
import "./App.css";
import Week1 from "./components/Week1";
import Week2 from "./components/Week2";
import Week3 from "./components/Week3";
import Week4 from "./components/Week4";
import Week5 from "./components/Week5";
import Week6 from "./components/Week6";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
  <nav>
    <h1> Welcome to Interaction Design!</h1>
    <ul>
      <li>
        <Link to="/week-1">
          {" "}
          <h1> Week 1</h1>
        </Link>
      </li>
      <li> <Link to="/week-2"> <h1>Week 2</h1> </Link> </li>
      <li> <Link to="/week-3"> <h1>Week 3</h1> </Link> </li>
      <li> <Link to="/week-4"> <h1>Week 4</h1> </Link> </li>
      <li> <Link to="/week-5"> <h1>Week 5</h1> </Link> </li>
      <li> <Link to="/week-6"> <h1>Week 6</h1> </Link> </li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/week-1">
          <Week1 />
        </Route>
        <Route path="/week-2">
          <Week2 />
        </Route>
        <Route path="/week-3">
          <Week3 />
        </Route>
        <Route path="/week-4">
          <Week4 />
        </Route>
        <Route path="/week-5">
          <Week5 />
        </Route>
        <Route path="/week-6">
          <Week6 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};


export default App;
