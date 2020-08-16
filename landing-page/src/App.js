import React from "react";

import Footer from "./components/Footer.jsx";
import Media from "./components/Media.jsx";
import Learning from "./components/Learning";
import Quotes from "./components/Quote.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Quotes />
          <h3>Links of most frequently used websites</h3>
          <div class="media">
            <div class="news">
              <Media />
            </div>
            <div class="learning">
              <Learning />
            </div>
          </div>

          <Footer fixed="bottom" />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
