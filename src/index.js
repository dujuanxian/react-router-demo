import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
