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
    // setNotes(filteredNotes);   // maybye to be muted

    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id)); //another way to unmuted react to delete notes
  };

  const handleCompleteNote = (e) => {
    console.log(e.target.value);
    const noteId = Number(e.target.value);

    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);  // maybye to be muted

    setNotes(
      (prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, completed: !note.completed } : note
        ) //another way to unmuted react when checkedBox notes
    );
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
