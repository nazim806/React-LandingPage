
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Learning() {
  return (
    <ul className="news-media">
      
      <li>
        <Link to="https://github.com/nazim806/" target="_blank">
          Github
        </Link>
      </li>
      <li>
        <Link to="https://medium.com/" target="_blank">
          Medium
        </Link>
      </li>
      <li>
        <Link to="https://www.udemy.com/" target="_blank">
          Udemy
        </Link>
      </li>
      <li>
        <Link to="https://codewithmosh.com/courses/" target="_blank">
          Code With Mosh
        </Link>
      </li>
    </ul>
  );
}

export default Learning;
