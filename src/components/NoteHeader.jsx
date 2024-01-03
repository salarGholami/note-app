import { useNotes } from "../context/NotesContext";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">sort base on latest notes</option>
        <option value="earliest">sort base on earliest notes</option>
        <option value="completed">sort base on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
