import React, { useState } from 'react';
import '../stylesheets/Window.css';
import { ReactComponent as Addpng } from '../images/button-addicon.svg';
import { ReactComponent as Userpng } from '../images/button-user.svg';
import SearchBar from './SearchBar';
import Notes from './Notes';
import EditWindow from './EditWindow';

function Window() {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleAddClick = () => {
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <div className='main-container'>
      <div className={isEditOpen ? 'left-side-container blurred' : 'left-side-container'}>
        <div className='logo-container'>
          <h3 className='logo'>Notely</h3>
        </div>
        <div className='add-icon-container'>
          <button className='button-add' onClick={handleAddClick}>
            <Addpng className='add-icon' />
          </button>
        </div>
      </div>
      <div className='separator' ></div>
      <div className={isEditOpen ? 'right-side-container blurred' : 'right-side-container'}>
        <div className='top-bar-container'>
          <Userpng className='user-icon' />
          <p className='user-name'>User</p>
          <SearchBar className='searchbar-class' />
        </div>
        <h1 className='h1-notes'>Notes</h1>
        <div className='notes-square-container'>
          <Notes />
          <Notes />
        </div>
      </div>

      {isEditOpen && <EditWindow onClose={handleCloseEdit} />}
    </div>
  );
}

export default Window;
