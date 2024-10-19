import React, { useState } from "react";
import "../stylesheets/Window.css";
import { ReactComponent as Addpng } from "../images/button-addicon.svg";
import { ReactComponent as Userpng } from "../images/button-user.svg";
import { getTokenFromLocalStorage } from "../helpers/helpers";
import SearchBar from "./SearchBar";
import Notes from "./Notes";
import EditWindow from "./EditWindow";
import axios from "axios";

function Window({ notes, setNotes, user, token }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null); // Para editar o agregar nota
  const handleAddClick = () => {
    setEditingNote(null); // Limpiamos la nota para agregar una nueva
    setIsEditOpen(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note); // Establecemos la nota a editar
    setIsEditOpen(true);
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3001/notes/${noteId}`, {
        headers: {
          Authorization: getTokenFromLocalStorage(),
        },
      });
      setNotes(notes.filter((note) => note.id !== noteId)); // Eliminamos la nota de la lista local
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <div className="main-container">
      <div
        className={
          isEditOpen ? "left-side-container blurred" : "left-side-container"
        }
      >
        <div className="logo-container">
          <h3 className="logo">Notely</h3>
        </div>
        <div className="add-icon-container">
          <button className="button-add" onClick={handleAddClick}>
            <Addpng className="add-icon" />
          </button>
        </div>
      </div>
      <div className="separator"></div>
      <div
        className={
          isEditOpen ? "right-side-container blurred" : "right-side-container"
        }
      >
        <div className="top-bar-container">
          <Userpng className="user-icon" />
          <p className="user-name">{user ? user.name : "User"}</p>{" "}
          {/* Asegúrate de mostrar el nombre correcto */}
          <SearchBar className="searchbar-class" />
        </div>
        <h1 className="h1-notes">Notes</h1>
        <div className="notes-square-container">
          {notes.map((note) => (
            <Notes
              key={note.id}
              note={note}
              onEdit={() => handleEditNote(note)}
              onDelete={() => handleDeleteNote(note.id)}
            />
          ))}
        </div>
      </div>
      {isEditOpen && (
        <EditWindow
          note={editingNote}
          setNotes={setNotes}
          notes={notes}
          onClose={handleCloseEdit}
          token={token}
          user={user} // Asegúrate de pasar el objeto user
        />
      )}
    </div>
  );
}
export default Window;
