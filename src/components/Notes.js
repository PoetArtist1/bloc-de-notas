import React from 'react';
import { ReactComponent as Editpng} from '../images/button-editicon.svg';
import { ReactComponent as Delpng} from '../images/button-deleteicon.svg';
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
          <button className='edit-button'>
            <Editpng className='edit-icon'/>
          </button>
          <button className='del-button'>
            <Delpng className='delete-icon'/>
          </button>
        </div>
      </div>  
    </div>
  );
}

export default Notes;