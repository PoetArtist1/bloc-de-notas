import React from 'react';
import { ReactComponent as Searchicon} from '../images/button-searchicon.svg';

import '../stylesheets/SearchBar.css';

function SearchBar(){
  return(
    <div class="search-container">
    <div class="search-icon-text" id="search-placeholder">
        <Searchicon className='Searchicon-class' />
        <span class="search-text">Search</span>
    </div>
    <input className='search-input' placeholder='Escribe aquí...'></input>
    </div>

  );
}

export default SearchBar;