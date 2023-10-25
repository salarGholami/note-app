function NoteList({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem() {
  return <div className="note-item">
    
  </div>;
}
