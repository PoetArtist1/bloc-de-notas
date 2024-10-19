import React from 'react';
import { ReactComponent as Editpng} from '../images/button-editicon.svg';
import { ReactComponent as Delpng} from '../images/button-deleteicon.svg';
import '../stylesheets/Notes.css';

function Notes({ note, onEdit, onDelete }) {
  return (
    <div className='notes-container'>
      <div className='title-container'>
        <p className='title-text'>{note.title}</p>
      </div>
      <div className='text-notes-container'>
        <p className='text-notes'>{note.content}</p>
      </div>
      <div className='bottom-container'>
        <p className='date-text'>{(new Date(note.created_at)).toLocaleDateString()}</p>
        <div className='buttons-container'>
          <button className='edit-button' onClick={onEdit}>
            <Editpng className='edit-icon'/>
          </button>
          <button className='del-button' onClick={onDelete}>
            <Delpng className='delete-icon'/>
          </button>
        </div>
      </div>  
    </div>
  );
}
export default Notes;
