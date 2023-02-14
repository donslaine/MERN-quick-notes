import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { getUser } from '../../utilities/users-service'
import NewNotePage from '../NewNotePage/NewNotePage'
import AuthPage from '../AuthPage/AuthPage'
import NotesPage from '../NotesPage/NotesPage'
import NavBar from '../../components/NavBar/NavBar'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNotePage />} />
            <Route path="/notes" element={<NotesPage />} />
          </Routes>
        </>
        ) : (
        <AuthPage setUser={setUser} user={user} />
      )}
    </main>
  );
}

export default App;

