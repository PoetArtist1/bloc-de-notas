import React from 'react';
import '../stylesheets/Window.css';
import { ReactComponent as Addicon} from '../images/button-addicon.svg';

function Window(){
  return(
    <div className='main-container'>
        <div className='left-side-container'>
                <h5 className='logo'>Notely</h5>
            <div className='menu-bar'>
                <Addicon className='add-icon' />
            </div>
        </div>
        <div className='separator'></div>
        <div className='right-side-container'>
            <div className='top-bar-container'>
            </div>
            <h1 className='h1-notes'>Notes</h1>
            <div className='notes-square-container'>
            </div>
        </div>
    </div>
  );
}

export default Window;