import React from 'react';
import { ReactComponent as Searchicon} from '../images/button-searchicon.svg';

import '../stylesheets/SearchBar.css';

function handleInput(e) {
  const els = document.querySelectorAll('.notes-container');
  console.log(els);
  els.forEach(el => {
    const titleText = el.querySelector('.title-text');
    if (!titleText.textContent.includes(e.target.value)) return el.classList.add('hide')
    el.classList.remove('hide');
  });
}

function SearchBar(){
  return(
    <div className="search-container">
    <div className="search-icon-text" id="search-placeholder">
        <Searchicon className='Searchicon-class' />
        <span className="search-text">Search</span>
    </div>
    <input className='search-input' placeholder='Escribe aquí...' onInput={handleInput}></input>
    </div>

  );
}

export default SearchBar;