import React from "react";
import "./App.css";
import styled from "styled-components";
import LoaderCom from "./components/LoaderCom";
import ButtonCom from "./components/ButtonCom";
import LoginCom from "./components/LoginCom";
import NavigationCom from "./components/NavigationCom";
import MenuCom from "./components/MenuCom";
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
      <li> <Link to="/button-com"> <h1>Button</h1> </Link> </li>
      <li> <Link to="/login-com"> <h1>Login Screen</h1> </Link> </li>
      <li> <Link to="/navigation-com"> <h1>Navigation</h1> </Link> </li>
      <li> <Link to="/menu-com"> <h1>Menu</h1> </Link> </li>
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
        <Route path="/button-com">
          <ButtonCom />
        </Route>
        <Route path="/login-com">
          <LoginCom />
        </Route>
        <Route path="/navigation-com">
          <NavigationCom />
        </Route>
        <Route path="/menu-com">
          <MenuCom />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};


export default App;

