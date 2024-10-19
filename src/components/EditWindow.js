import React, { useState, useEffect } from "react";
import { ReactComponent as Savepng } from "../images/button-saveicon.svg";
import { ReactComponent as Delpng } from "../images/button-deleteicon.svg";
import { getTokenFromLocalStorage } from "../helpers/helpers";
import axios from "axios";
import "../stylesheets/EditWindow.css";

function EditWindow({ note, setNotes, notes, onClose, token, user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);
  const handleSave = async () => {
    try {
      const tokenLoad = getTokenFromLocalStorage();
      // if (!note) { // Si no hay nota, no podemos guardar
      //   debugger;
      //   return;
      // }
      const noteData = {
        title,
        content,
        user_id: 1,
      };
      let response;
      if (note) {
        response = await axios.put(
          `http://localhost:3001/notes/${note.id}`,
          noteData,
          {
            headers: { Authorization: tokenLoad },
          }
        );
      } else {
        response = await axios.post("http://localhost:3001/notes", noteData, {
          headers: { Authorization: tokenLoad },
        });
      }
      const updatedNote = response.data;
      if (note) {
        setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
      } else {
        setNotes([...notes, updatedNote]);
      }
      onClose(); // Cerrar la ventana al guardar
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };
  return (
    <div className="notes-edit-container">
      <div className="title-buttons-edit-container">
        <input
          className="title-edit-text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingrese el título..."
        />
        <button className="delete-button" onClick={onClose}>
          <Delpng className="del-icon" />
        </button>
      </div>
      <div className="text-edit-container">
        <textarea
          className="text-edit-notes"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ingrese el texto..."
        />
      </div>
      <div className="bottom-container">
        <p className="date-text">
          {note
            ? new Date(note.created_at).toLocaleDateString()
            : new Date().toLocaleDateString()}
        </p>
        <button className="save-edit-button" onClick={handleSave}>
          <Savepng className="save-icon" />
        </button>
      </div>
    </div>
  );
}
export default EditWindow;
