import React from 'react';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => (
  <nav>
        <h1> Welcome to Interaction Design!</h1>
        <ul>
          <li>
            <Link to ="/week1">
              {" "}
              <h1> Week 1</h1></Link>
            <Link to ="/week2"> <h1>Week 2</h1></Link>
          </li>
        </ul>
      </nav>
);

const App = () => (
  <>
    <Week1/>
  </>
);


export default App;
