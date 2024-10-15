import React from 'react';
import { ReactComponent as Editicon} from '../images/button-editicon.svg';
import { ReactComponent as Delicon} from '../images/button-deleteicon.svg';
import '../stylesheets/Notes.css';

function Notes(){
  return(
    <div className='notes-container'>
      <div className='title-container'>
        <p className='title-text'>Titulo</p>
      </div>
      <div className='text-notes-container'>
        <p className='text-notes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nibh nulla.</p>
      </div>
      <div className='bottom-container'>
        <p className='date-text'>15/10/2024</p>
        <div className='buttons-container'>
          <Editicon className='edit-icon' width='28' height='28'/>
          <Delicon className='del-icon' width='28' height='28'/>
        </div>
      </div>  
    </div>
  );
}

export default Notes;