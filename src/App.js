import React, { useState, useEffect } from "react";
import axios from "axios";
import Window from "./components/Window";
import Login from "./components/Login";
import "./App.css";
import { getTokenFromLocalStorage } from "./helpers/helpers";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null); // Establece el estado del usuario en null
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    if (!token) return;
    try {
      const response = await axios.get("http://localhost:3001/notes", {
        headers: {
          Authorization: getTokenFromLocalStorage(),
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
      alert("Failed to fetch notes. Please log in again.");
      setToken("");
      setUser(null); // Establece el estado del usuario en null si hay un error
    }
  };
  useEffect(() => {
    fetchNotes();
  }, [token]); //Fetch a las notas cuando cambia
  return (
    <div className="App">
      {token ? (
        <Window notes={notes} setNotes={setNotes} user={user} />
      ) : (
        <Login setToken={setToken} setUser={setUser} />
      )}
    </div>
  );
}
export default App;
