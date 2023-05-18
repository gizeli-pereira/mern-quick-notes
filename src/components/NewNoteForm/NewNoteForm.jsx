import { useState } from "react";
import "./NewNoteForm.css";

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState([{
    text: "",
    createdAt: ""
  }]);
  const date = Date.now()

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote({
      text: evt.target.text.value,
      createdAt: Date.now(),
    })
    setNewNote({
    text: "",
    createdAt: "",
    });
  }

  return (
    <>
      <form className="NewNoteForm" onSubmit={handleAddNote}>
        <label>Note</label>
        <input
          type="text"
          name="text"
          placeholder="Text here"
          value={newNote.text}
          onChange={(evt) => setNewNote(evt.target.value)}
          required
        ></input>
        <button type="submit">ADD NOTE</button>
      </form>
    </>
  );
}