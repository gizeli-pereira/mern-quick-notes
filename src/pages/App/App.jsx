import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesHistoryPage from '../NotesHistoryPage/NotesHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNote] = useState([])
  const [showNotes, setShowNotes] = useState(true)
  
  useEffect(() => {
    if (user) {
      const storedNote = localStorage.getItem(`notes_${user.id}`);
      if (storedNote) {
        setNote(JSON.parse(storedNote));
      }
    }
  }, [user]);

  function addNote(note) {
    const updatedNote = [...notes, note];
    setNote(updatedNote);
    if (user) {
      localStorage.setItem(`notes_${user.id}`, JSON.stringify(updatedNote));
    }
  }

  return (
    <main className="App">
      { user ?
        <>
            <NavBar user={user} setUser={setUser} />
            <NewNoteForm addNote={addNote} />
            <h1>Notes</h1>
            { showNotes && <NotesHistoryPage user={user} notes={notes} /> }
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}