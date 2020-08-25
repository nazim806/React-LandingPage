import React, { useState } from "react";

import Footer from "./components/Footer.jsx";
import Media from "./components/Media.jsx";
import Learning from "./components/Learning";
import Quotes from "./components/Quote.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar.jsx";

import Note from "./components/Note";

import CreateArea from "./components/CreateArea";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

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
            <div class = "note">
              <CreateArea onAdd={addNote} />
              {notes.map((noteItem, index) => {
                return (
                  <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                  />
                );
              })}
              ;
            </div>
          </div>

          <Footer class="footer" />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
