import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Media() {
  return (
    <ul className="news-media">
      <li>
        <Link to="https://democracynow.org/" target="_blank">
          Democracy Now
        </Link>
      </li>
      <li>
        <Link to="https://theintercept.com/" target="_blank">
          Intercept
        </Link>
      </li>
      <li>
        <Link to="https://www.thedailystar.net/" target="_blank">
          The Daily Star
        </Link>
      </li>

      <li>
        <Link to="https://www.nytimes.com/" target="_blank">
          New York Times
        </Link>
      </li>
      <li>
        <Link to="https://www.aldaily.com/" target="_blank">
          Arts and Literature Daily
        </Link>
      </li>
      <li>
        <Link to="https://nobojug.blog/" target="_blank">
          Nobojug Blog
        </Link>
      </li>


      
      
    </ul>
  );
}

export default Media;
