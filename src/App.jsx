import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);

    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
