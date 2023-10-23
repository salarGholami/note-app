import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
      id: Date.now(""),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");

    console.log(newNote);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="text-field"
          placeholder="Note title ..."
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="text-field"
          placeholder="Note description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
