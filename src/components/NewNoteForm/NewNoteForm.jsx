import { useState } from "react";

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: '',
    createdAt: ''
  });
  const date = Date.now()

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote({
      text: evt.target.text.value,
      createdAt: Date.now(),
    })
    setNewNote({
      text: '',
      createdAt:''
    })
  }

  return (
    <>
      <form onSubmit={handleAddNote} className="NoteForm">
        <label htmlFor="">Note</label>
        <input
        type='text'
        name='text'
        placeholder='note'
        value={newNote.text}
        onChange={(evt) => setNewNote({ ...newNote, text: evt.target.value })}
        required
        ></input>
        <button type='submit'>ADD NOTE</button>
      </form>
    </>
  )
}