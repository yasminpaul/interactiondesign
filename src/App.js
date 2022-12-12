import React from "react";
import "./App.css";
import styled from "styled-components";
import LoaderCom from "./components/LoaderCom";
import Week2 from "./components/Week2";
import ButtonCom from "./components/ButtonCom";
import Week4 from "./components/Week4";
import Week5 from "./components/Week5";
import Week6 from "./components/Week6";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  align-items: center
  height: 100px;
  padding: 90px;
  background: #AB9696;
  width: 100px;
  li{
    list-style: none;
    margin-right: 2%;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const Home = () => (
  <nav>
    <StyledHeader> WELCOME TO INTERACTION DESIGN!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/loader-com">
          {" "}
          <h1> Loader</h1>
        </Link>
      </li>
      <li> <Link to="/week-2"> <h1>Week 2</h1> </Link> </li>
      <li> <Link to="/button-com"> <h1>Button</h1> </Link> </li>
      <li> <Link to="/week-4"> <h1>Week 4</h1> </Link> </li>
      <li> <Link to="/week-5"> <h1>Week 5</h1> </Link> </li>
      <li> <Link to="/week-6"> <h1>Week 6</h1> </Link> </li>
    </StyledNav>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/loader-com">
          <LoaderCom />
        </Route>
        <Route path="/week-2">
          <Week2 />
        </Route>
        <Route path="/button-com">
          <ButtonCom />
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

