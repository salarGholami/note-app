import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useReducer } from "react";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [...state, action.palyload];
    }
    case "delete": {
      return state.filter((s) => s.id !== action.palyload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.palyload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknow error" + action.type);
  }
};

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (newNote) => {
    dispatch({ type: "add", palyload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", palyload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", palyload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
