function NoteStatus({ notes }) {
  //dervied state :
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompeltedNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>no Notes has Alerdy been added ! </h2>;

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
