import { useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();
  //dervied state :
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompeltedNotes = allNotes - completedNotes;

  if (!allNotes) return <Message>this is children text</Message>;

  return (
    <ul className="note-status">
      <li>
        all <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompeltedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
