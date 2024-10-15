import React from 'react';
import '../stylesheets/Window.css';
import { ReactComponent as Addicon} from '../images/button-addicon.svg';
import SearchBar from './SearchBar';
import Notes from './Notes';

function Window(){
  return(
    <div className='main-container'>
        <div className='left-side-container'>
          <div className='logo-container'>
            <h5 className='logo'>Notely</h5>
          </div>
          <div className='add-icon-container'>
            <Addicon className='add-icon' />
          </div>
        </div>
        <div className='separator'></div>
        <div className='right-side-container'>
          <div className='top-bar-container'>
            <SearchBar />
          </div>
            <h1 className='h1-notes'>Notes</h1>
          <div className='notes-square-container'>
            <Notes />
          </div>
        </div>
    </div>
  );
}

export default Window;