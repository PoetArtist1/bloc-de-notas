import React from 'react';
import { ReactComponent as Savepng } from '../images/button-saveicon.svg';
import { ReactComponent as Delpng } from '../images/button-deleteicon.svg';
import '../stylesheets/EditWindow.css';

function EditWindow({ onClose }) {
  return (
    <div className='notes-edit-container'>
      <div className='title-buttons-edit-container'>
        <input className='title-edit-text' placeholder='Ingrese el titulo...'></input>  
        <button className='delete-button'>
          <Delpng className='del-icon' />
        </button>    
      </div>
      <div className='text-edit-container'>
        <textarea className='text-edit-notes' placeholder='Ingrese el texto...'></textarea>
      </div>
      <div className='bottom-container'>
        <p className='date-text'>15/10/2024</p>
        <button className='save-edit-button' onClick={onClose}>
          <Savepng className='save-icon' />
        </button>
      </div>  
    </div>
  );
}

export default EditWindow;
