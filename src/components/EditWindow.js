import React from 'react';
import { ReactComponent as Saveicon} from '../images/button-saveicon.svg';
import { ReactComponent as Delicon} from '../images/button-deleteicon.svg';
import '../stylesheets/EditWindow.css';

function EditWindow(){
  return(
    <div className='notes-edit-container'>
      <div className='title-buttons-edit-container'>
        <input className='title-edit-text' placeholder='Ingrese el titulo...'></input>        
          <Delicon className='del-icon' />
      </div>
      <div className='text-edit-container'>
            <textarea className='text-edit-notes' placeholder='Ingrese el texto...'></textarea>
        </div>
      <div className='bottom-container'>
            <p className='date-text'>15/10/2024</p>
            <Saveicon className='save-icon' />
      </div>  
    </div>
  );
}

export default EditWindow;